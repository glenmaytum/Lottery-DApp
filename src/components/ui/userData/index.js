import TableHeader from "../../common/table/headers";
import { useEffect, useState } from "react";
import TableRow from "../../common/table/rows";
import useSortableData from "../hooks/useSortedData";
import { FiChevronDown } from "react-icons/fi";

export default function UserData() {
  const data = [
    {
      address: "0x6Cb2498B6a1522BEf2be154198BFE9a2187EE2Ee",
      timesEntered: 2,
      ethWagered: 0.1,
      chanceOfWin: 3.3,
    },
    {
      address: "0x73292de885830ae2227dea6f0f7b5e4dbb960b82",
      timesEntered: 7,
      ethWagered: 0.7,
      chanceOfWin: 21.2,
    },
    {
      address: "0x640149c30ba94c14ef7c1dc354c4a73258f64f03",
      timesEntered: 5,
      ethWagered: 0.5,
      chanceOfWin: 15.1,
    },
    {
      address: "0xeeb5a6e00ade3f3e3e93a5c670022596f93f5df1",
      timesEntered: 1,
      ethWagered: 0.1,
      chanceOfWin: 3.3,
    },
    {
      address: "0x137bee4febb7b7c5ef7c01d11b8ba709efa3b674",
      timesEntered: 3,
      ethWagered: 0.3,
      chanceOfWin: 9,
    },
    {
      address: "0x3cd026f08561e14090f2fe0f3be9b4d8ee271eba",
      timesEntered: 1,
      ethWagered: 0.1,
      chanceOfWin: 3.3,
    },
    {
      address: "0x9a623e61b4e15fd05382a3e1b53cf520786fcd94",
      timesEntered: 4,
      ethWagered: 0.4,
      chanceOfWin: 12.1,
    },
    {
      address: "0x0e4b2d7bde0e5695946aa86d184d2a0d42a9125a",
      timesEntered: 11,
      ethWagered: 1.1,
      chanceOfWin: 33.3,
    },
  ];
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    window.screen.width <= 760 ? setIsMobile(true) : setIsMobile(false);
  }, [window.screen.width]);

  function detectWindowSize() {
    window.innerWidth <= 760 ? setIsMobile(true) : setIsMobile(false);
  }

  window.onresize = detectWindowSize;

  console.log(isMobile);

  const { items, requestSort } = useSortableData(data);

  return (
    <table className="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5 border-collapse">
      <thead className="text-white">
        {items.map((item, i) => {
          return (
            <tr className="bg-blue-400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
              <TableHeader
                heading={"address"}
                requestSort={requestSort}
                searchCriteria={"address"}
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
                searchCriteria={"chanceOfWin"}
                width={true}
              />
            </tr>
          );
        })}
      </thead>
      <tbody className="flex-1 sm:flex-none ">
        {items.map((item, i) => {
          return (
            <TableRow
              key={i}
              address={
                isMobile
                  ? item.address.slice(0, 8) + "..." + item.address.slice(-8)
                  : item.address
              }
              timesEntered={item.timesEntered}
              ethWagered={item.ethWagered}
              chanceOfWin={item.chanceOfWin}
            />
          );
        })}
      </tbody>
    </table>
  );
}
