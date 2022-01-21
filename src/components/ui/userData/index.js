import TableHeader from "../../common/table/headers";
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

  const { items, requestSort } = useSortableData(data);

  return (
    <>
      <section className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
        <table className="min-w-full table-auto">
          <thead>
            <tr>
              <TableHeader
                heading={"address"}
                requestSort={requestSort}
                searchCriteria={"address"}
                sortIcon={true}
              />
              <TableHeader
                heading={"times entered"}
                requestSort={requestSort}
                searchCriteria={"timesEntered"}
                sortIcon={true}
              />
              <TableHeader
                heading={"eth wagered"}
                requestSort={requestSort}
                searchCriteria={"ethWagered"}
                sortIcon={true}
              />
              <TableHeader
                heading={"change of winning"}
                requestSort={requestSort}
                searchCriteria={"chanceOfWin"}
                sortIcon={true}
              />
              <TableHeader heading={<FiChevronDown />} />
            </tr>
          </thead>
          <tbody className="bg-white">
            {items.map((item, i) => {
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
      <div class="container">
        <table class="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
          <thead class="text-white">
            <tr class="bg-blue-400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
              <th class="p-3 text-left">Name</th>
              <th class="p-3 text-left">Email</th>
              <th class="p-3 text-left">ADDRESS</th>
              <th class="p-3 text-left" width="110px">
                Actions
              </th>
            </tr>
            <tr class="bg-blue-400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
              <th class="p-3 text-left">Name</th>
              <th class="p-3 text-left">Email</th>
              <th class="p-3 text-left">ADDRESS</th>
              <th class="p-3 text-left" width="110px">
                Actions
              </th>
            </tr>
          </thead>
          <tbody class="flex-1 sm:flex-none">
            <tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
              <td class="border-grey-light border hover:bg-gray-100 p-3">
                John Covv
              </td>
              <td class="border-grey-light border hover:bg-gray-100 p-3 truncate">
                contato@johncovv.com
              </td>
              <td class="border-grey-light border hover:bg-gray-100 p-3 truncate">
                getgrhrwhrhrwhwrhwrhrthwrhjjbbje
              </td>
              <td class="border-grey-light border hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer">
                Delete
              </td>
            </tr>
            <tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
              <td class="border-grey-light border hover:bg-gray-100 p-3">
                Michael Jackson
              </td>
              <td class="border-grey-light border hover:bg-gray-100 p-3 truncate">
                m_jackson@mail.com
              </td>
              <td class="border-grey-light border hover:bg-gray-100 p-3 truncate">
                jetjetyw5eyvw45ycww4yc4y46v{" "}
              </td>
              <td class="border-grey-light border hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer">
                Delete
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
