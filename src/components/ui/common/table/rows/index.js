import Cell from "../cells";

const TableRow = ({ address, timesEntered, ethWagered, chanceOfWin }) => {
  return (
    <tr className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0 bg-white">
      <Cell cellData={address} />
      <Cell cellData={timesEntered} />
      <Cell cellData={ethWagered} />
      <Cell cellData={chanceOfWin} />
    </tr>
  );
};

export default TableRow;
