export default function Cell({ cellData }) {
  return (
    <td className="border-grey-light border hover:bg-gray-100 p-3 heightFix">
      {cellData}
    </td>
  );
}
