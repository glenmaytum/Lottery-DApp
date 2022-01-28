import TableHeader from "../../../common/table/headers";
import TableRow from "../../../common/table/rows";
import useSortableData from "../../../../hooks/utils/useSortedData";
import { FiChevronDown } from "react-icons/fi";
import useCheckIsMobile from "../../../../hooks/utils/checkIfMobile";
import { useWeb3 } from "../../../../providers";

const UserData = () => {
  const isMobile = useCheckIsMobile();
  const { allContractData, allAddressesLoaded } = useWeb3();
  const { individualEntryData } = allContractData;
  const { items, requestSort } = useSortableData(individualEntryData);

  return (
    <>
      {
        <table className="w-full flex flex-row flex-no-wrap  sm:bg-white rounded-lg overflow-hidden sm:shadow-lg border-collapse">
          <thead className="text-white">
            {allAddressesLoaded &&
              items.map((_, i) => {
                return (
                  <tr
                    key={i}
                    className="bg-blue-400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0"
                  >
                    <TableHeader
                      heading={"address"}
                      requestSort={requestSort}
                      searchCriteria={"address"}
                      sortIcon={<FiChevronDown />}
                    />
                    <TableHeader
                      heading={"times played "}
                      requestSort={requestSort}
                      searchCriteria={"timesEntered"}
                    />
                    <TableHeader
                      heading={"eth wagered"}
                      requestSort={requestSort}
                      searchCriteria={"ethWagered"}
                    />
                    <TableHeader
                      heading={"Win % "}
                      requestSort={requestSort}
                      searchCriteria={"roundedChanceOfWin"}
                    />
                  </tr>
                );
              })}
          </thead>

          <tbody className="flex-1 sm:flex-none ">
            {allAddressesLoaded &&
              items.map((item, i) => {
                const {
                  address,
                  timesEntered,
                  ethWagered,
                  roundedChanceOfWin,
                } = item;

                return (
                  <TableRow
                    key={i}
                    address={
                      isMobile
                        ? address.slice(0, 8) + "..." + address.slice(-8)
                        : address
                    }
                    timesEntered={timesEntered}
                    ethWagered={ethWagered}
                    chanceOfWin={`${roundedChanceOfWin}%`}
                  />
                );
              })}
          </tbody>
        </table>
      }
    </>
  );
};

export default UserData;
