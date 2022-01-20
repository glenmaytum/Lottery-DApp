import { useState, useMemo } from "react";
import TableHeader from "../../common/table/headers";
import TableRow from "../../common/table/rows";

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

  const [sortedField, setSortedField] = useState(null);
  const [sortConfig, setSortConfig] = useState(null);

  const requestSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  useMemo(() => {
    let sortedData = [...data];
    if (sortedField !== null) {
      sortedData.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    console.log(sortedData);
    return sortedData;
  }, [data, sortConfig]);

  return (
    <section className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
      <table className="min-w-full">
        <thead>
          <tr>
            <TableHeader
              heading={"address"}
              onClick={() => requestSort("address")}
            />
            <TableHeader
              heading={"times entered"}
              onClick={() => requestSort("timesEntered")}
            />
            <TableHeader
              heading={"eth wagered"}
              onClick={() => requestSort("ethWagered")}
            />
            <TableHeader
              heading={"change of winning"}
              onClick={() => requestSort("chanceOfWin")}
            />
          </tr>
        </thead>
        <tbody className="bg-white">
          {data.map((item, i) => {
            return (
              <TableRow
                key={i}
                address={item.address}
                timesEntered={item.timesEntered}
                ethWagered={item.ethWagered}
                chanceOfWin={item.chanceOfWin}
              />
            );
          })}
        </tbody>
      </table>
    </section>
  );
}
