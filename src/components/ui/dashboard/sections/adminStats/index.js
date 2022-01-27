import { useEffect, useState } from "react";
import Card from "../../../common/card/index";
import { ReactComponent as EntriesImg } from "../../../../../images/entries.svg";
import { ReactComponent as PlayersImg } from "../../../../../images/players.svg";
import { ReactComponent as JackpotImg } from "../../../../../images/jackpot.svg";
import { ReactComponent as ProfitImg } from "../../../../../images/profit.svg";
import { useWeb3 } from "../../../../providers/";
import useContractData from "../../../../hooks/utils/manipulateAddresses";

const AdminStats = () => {
  const { allContractData, allAddressesLoaded } = useWeb3();

  const { totalEntries, players, jackpot, profit } = allContractData;

  let type = allAddressesLoaded;
  console.log(type);

  return (
    <section className="text-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      <Card
        image={<EntriesImg />}
        display={totalEntries}
        dataLoaded={type}
        description={"Entries"}
      />
      <Card
        image={<PlayersImg />}
        display={players}
        dataLoaded={type}
        description={"Players"}
      />
      <Card
        image={<JackpotImg />}
        display={`${jackpot} ETH`}
        dataLoaded={type}
        description={"Jackpot"}
      />
      <Card
        image={<ProfitImg />}
        display={`${profit} ETH`}
        dataLoaded={type}
        description={"Profit"}
      />
    </section>
  );
};

export default AdminStats;
