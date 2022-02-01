import { useEffect, useState } from "react";
import { useWeb3 } from "../../../../providers/";
import { useAccount } from "../../../../hooks/web3/index";

const PlayerStats = () => {
  const { allContractData, allAddressesLoaded, isLoading } = useWeb3();
  const { individualEntryData } = allContractData;
  const { account } = useAccount();

  const [timesUserEntered, setTimesUSerEntered] = useState(0);

  useEffect(() => {
    const timesEntered = async () => {
      let individual = await individualEntryData.filter(
        (entry) => entry.address === account.data
      );

      setTimesUSerEntered(individual[0].timesEntered);
    };

    account && allAddressesLoaded && timesEntered();
  }, [account, allAddressesLoaded]);

  return (
    <section className="flex justify-center">
      <div className="p-6 rounded-md bg-white shadow-sm title-font font-medium text-gray-900">
        You have entered {timesUserEntered} times
      </div>
    </section>
  );
};

export default PlayerStats;
