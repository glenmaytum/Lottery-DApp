import { BiSortAlt2, BiSortDown, BiSortUp } from "react-icons/bi";

export default function TableHeader({
  heading,
  requestSort,
  searchCriteria,
  sortIcon,
}) {
  return (
    <th className="px-6 py-3 border-b border-gray-200  text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
      <button
        className="flex items-center gap-0.5"
        type="button"
        onClick={() => requestSort(searchCriteria)}
      >
        {heading}
        {sortIcon && <BiSortAlt2 />}
      </button>
    </th>
  );
}
