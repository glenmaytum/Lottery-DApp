export default function Cell({ cellData }) {
  return (
    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
      <div className="ml-4">
        <div className="text-sm leading-5 text-gray-500">{cellData}</div>
      </div>
    </td>
  );
}
