import { useEffect, useState } from "react";
import Card from "../../../common/card/index";
import { ReactComponent as EntriesImg } from "../../../../../images/entries.svg";
import { ReactComponent as PlayersImg } from "../../../../../images/players.svg";
import { ReactComponent as JackpotImg } from "../../../../../images/jackpot.svg";
import { ReactComponent as ProfitImg } from "../../../../../images/profit.svg";
import { useWeb3 } from "../../../../providers/";

const AdminStats = () => {
  const { allAddresses } = useWeb3();
  const [stats, setStats] = useState({});

  useEffect(() => {
    // Getting the uniqueAddresses and number of times each has entered
    const setStatsFunc = () => {
      const numEntries = Object.keys(allAddresses).length;
      const uniqueAddrsWithTally = Object.entries(
        allAddresses.reduce(
          (acc, curr) => ((acc[curr] = (acc[curr] || 0) + 1), acc),
          {}
        )
      );
      const players = Object.keys(uniqueAddrsWithTally).length;

      const jackpot = numEntries * 0.1;
      const profit = (jackpot * 0.05).toFixed(3);

      setStats({
        numEntries,
        uniqueAddrsWithTally,
        players,
        jackpot,
        profit,
      });
    };

    allAddresses && setStatsFunc();
  }, [allAddresses]);

  return (
    <section className="text-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      <Card
        image={<EntriesImg />}
        display={stats.numEntries}
        description={"Entries"}
      />
      <Card
        image={<PlayersImg />}
        display={stats.players}
        description={"Players"}
      />
      <Card
        image={<JackpotImg />}
        display={`${stats.jackpot} ETH`}
        description={"Jackpot"}
      />
      <Card
        image={<ProfitImg />}
        display={`${stats.profit} ETH`}
        description={"Profit"}
      />
    </section>
  );
};

export default AdminStats;
