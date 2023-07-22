import { TableRow, TableCell, Button } from "@mui/material";

const MainTableRow = ({ animal, expandedAnimalId, changeExpandedAnimalId }) => {
  const handleExpand = (id) => {
    if (expandedAnimalId === id) {
      changeExpandedAnimalId(null);
    } else {
      changeExpandedAnimalId(id);
    }
  };

  return (
    <TableRow>
      <TableCell>{animal.petName}</TableCell>
      <TableCell>{animal.petSpecies}</TableCell>
      <TableCell>
        <Button
          variant="outlined"
          color="primary"
          size="small"
          onClick={() => handleExpand(animal.petId)}
        >
          Data
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default MainTableRow;
