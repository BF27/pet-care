import { TableHead, TableRow, TableCell } from "@mui/material";

const TableHeader = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell>Pet name</TableCell>
        <TableCell colSpan={2}>Pet species</TableCell>
      </TableRow>
    </TableHead>
  );
};
export default TableHeader;
