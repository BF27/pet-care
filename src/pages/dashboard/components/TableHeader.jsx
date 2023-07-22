import { TableHead, TableRow, TableCell } from "@mui/material";
import AddNewPetBtn from "./AddNewPetBtn";

const TableHeader = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell>Pet name</TableCell>
        <TableCell>Pet species</TableCell>
        <TableCell><AddNewPetBtn /></TableCell>
      </TableRow>
    </TableHead>
  );
};
export default TableHeader;
