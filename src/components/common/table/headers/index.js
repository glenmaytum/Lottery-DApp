import { BiSortAlt2, BiSortDown, BiSortUp } from "react-icons/bi";

export default function TableHeader({
  heading,
  requestSort,
  searchCriteria,
  sortIcon,
  width,
}) {
  return (
    <th
      className={`p-3 text-left min-w-min heightFix`}
      onClick={() => requestSort(searchCriteria)}
    >
      {heading}
    </th>
  );
}
