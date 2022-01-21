import Cell from "../cells";

export default function TableRow({
  address,
  timesEntered,
  ethWagered,
  chanceOfWin,
}) {
  return (
    <tr>
      <Cell cellData={address} />
      <Cell cellData={timesEntered} />
      <Cell cellData={ethWagered} />
      <Cell cellData={chanceOfWin} />
      <Cell />
    </tr>
  );
}
