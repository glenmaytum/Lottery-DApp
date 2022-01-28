import Card from "../../../common/card/index";
import { ReactComponent as EntriesImg } from "../../../../../images/entries.svg";
import { ReactComponent as PlayersImg } from "../../../../../images/players.svg";
import { ReactComponent as JackpotImg } from "../../../../../images/jackpot.svg";
import { ReactComponent as ProfitImg } from "../../../../../images/profit.svg";
import { useWeb3 } from "../../../../providers/";
import { Line } from "rc-progress";
import ReactTooltip from "react-tooltip";

const AdminStats = () => {
  const { allContractData, allAddressesLoaded } = useWeb3();
  const { totalEntries, players, jackpot, profit, percentComplete } =
    allContractData;

  return (
    <section className="flex flex-col gap-6">
      {allAddressesLoaded && (
        <>
          <Line
            className="rounded-md"
            percent={`${percentComplete}`}
            strokeWidth="0.5"
            strokeColor="#037DD6"
            trailColor="#5117A7"
            data-tip={`${percentComplete}% Complete`}
          />
          <ReactTooltip />
        </>
      )}

      <div className="text-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <Card
          image={<EntriesImg />}
          display={totalEntries}
          dataLoaded={allAddressesLoaded}
          description={"Entries"}
        />
        <Card
          image={<PlayersImg />}
          display={players}
          dataLoaded={allAddressesLoaded}
          description={"Players"}
        />
        <Card
          image={<JackpotImg />}
          display={`${jackpot} ETH`}
          dataLoaded={allAddressesLoaded}
          description={"Jackpot"}
        />
        <Card
          image={<ProfitImg />}
          display={`${profit} ETH`}
          dataLoaded={allAddressesLoaded}
          description={"Profit"}
        />
      </div>
    </section>
  );
};

export default AdminStats;
