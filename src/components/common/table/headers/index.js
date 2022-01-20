export default function TableHeader({ heading, requestSort, criteria }) {
  return (
    <th className="px-6 py-3 border-b border-gray-200  text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
      <button type="button">{heading}</button>
    </th>
  );
}
