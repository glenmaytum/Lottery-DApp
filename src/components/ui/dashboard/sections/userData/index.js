import TableHeader from "../../../common/table/headers";
import TableRow from "../../../common/table/rows";
import useSortableData from "../../../../hooks/utils/useSortedData";
import { FiChevronDown } from "react-icons/fi";
import useCheckIsMobile from "../../../../hooks/utils/checkIfMobile";
import { useWeb3 } from "../../../../providers";

const UserData = () => {
  const isMobile = useCheckIsMobile();
  const data = [
    {
      address: "0x6Cb2498B6a1522BEf2be154198BFE9a2187EE2Ee",
      timesEntered: 2,
    },
    {
      address: "0x73292de885830ae2227dea6f0f7b5e4dbb960b82",
      timesEntered: 7,
    },
    {
      address: "0x640149c30ba94c14ef7c1dc354c4a73258f64f03",
      timesEntered: 5,
    },
    {
      address: "0xeeb5a6e00ade3f3e3e93a5c670022596f93f5df1",
      timesEntered: 1,
    },
    {
      address: "0x137bee4febb7b7c5ef7c01d11b8ba709efa3b674",
      timesEntered: 3,
    },
    {
      address: "0x3cd026f08561e14090f2fe0f3be9b4d8ee271eba",
      timesEntered: 1,
    },
    {
      address: "0x9a623e61b4e15fd05382a3e1b53cf520786fcd94",
      timesEntered: 4,
    },
    {
      address: "0x0e4b2d7bde0e5695946aa86d184d2a0d42a9125a",
      timesEntered: 11,
    },
  ];

  const { allContractData, allAddressesLoaded } = useWeb3();

  // const { items, requestSort } = useSortableData(
  //   allContractData.individualEntryData
  // );

  return (
    <>
      {
        <table className="w-full flex flex-row flex-no-wrap  sm:bg-white rounded-lg overflow-hidden sm:shadow-lg border-collapse">
          <thead className="text-white">
            {allAddressesLoaded &&
              allContractData.individualEntryData.map((item, i) => {
                return (
                  <tr
                    key={i}
                    className="bg-blue-400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0"
                  >
                    <TableHeader
                      heading={"address"}
                      // requestSort={requestSort}
                      searchCriteria={"address"}
                    />
                    <TableHeader
                      heading={"times played "}
                      // requestSort={requestSort}
                      searchCriteria={"timesEntered"}
                    />
                    <TableHeader
                      heading={"eth wagered"}
                      // requestSort={requestSort}
                      searchCriteria={"ethWagered"}
                    />
                    <TableHeader
                      heading={"Win % "}
                      // requestSort={requestSort}
                      searchCriteria={"chanceOfWin"}
                      width={true}
                    />
                  </tr>
                );
              })}
          </thead>

          <tbody className="flex-1 sm:flex-none ">
            {allAddressesLoaded &&
              allContractData.individualEntryData.map((item, i) => {
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
