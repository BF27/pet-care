import { TableRow, TableCell, Button } from "@mui/material";

const MainTableRow = ({
  petName,
  petSpecies,
  petId,
  expandedAnimalId,
  changeExpandedAnimalId,
}) => {
  const handleExpand = (id) => {
    if (expandedAnimalId === id) {
      changeExpandedAnimalId(null);
    } else {
      changeExpandedAnimalId(id);
    }
  };

  return (
    <TableRow>
      <TableCell>{petName}</TableCell>
      <TableCell>{petSpecies}</TableCell>
      <TableCell>
        <Button
          variant="outlined"
          color="primary"
          size="small"
          onClick={() => handleExpand(petId)}
        >
          Data
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default MainTableRow;
