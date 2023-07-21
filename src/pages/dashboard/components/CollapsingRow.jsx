import { TableRow, TableCell, Collapse, Button } from "@mui/material";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../utils/initFirebase";
import CollapsingDataRow from "./CollapsingDataRow";

const CollapsingRow = ({
  userId,
  animals,
  petId,
  expandedAnimalId,
  petBreed,
  petGender,
  petBirth,
  petChipNum,
  changeAnimals,
}) => {
  const handleDelete = async (id) => {
    const newPetList = animals.filter((animal) => animal.petId !== id);
    await setDoc(doc(db, "users", userId), {
      pets: newPetList,
    });
    changeAnimals(newPetList);
  };

  return (
    <TableRow>
      <TableCell colSpan={3}>
        <Collapse in={expandedAnimalId === petId} timeout="auto" unmountOnExit>
          <CollapsingDataRow
            userId={userId}
            petId={petId}
            title="Breed"
            value={petBreed}
            dataField={"petBreed"}
            animals={animals}
            changeAnimals={changeAnimals}
          />
          <CollapsingDataRow
            userId={userId}
            petId={petId}
            title="Gender"
            value={petGender}
            dataField={"petGender"}
            animals={animals}
            changeAnimals={changeAnimals}
          />
          <CollapsingDataRow
            userId={userId}
            petId={petId}
            title="Date of birth"
            value={petBirth}
            dataField={"petBirth"}
            animals={animals}
            changeAnimals={changeAnimals}
          />
          <CollapsingDataRow
            userId={userId}
            petId={petId}
            title="Chip number"
            value={petChipNum}
            dataField={"petChipNum"}
            animals={animals}
            changeAnimals={changeAnimals}
          />

          <Button
            variant="outlined"
            color="secondary"
            size="small"
            onClick={() => handleDelete(petId)}
          >
            Delete
          </Button>
        </Collapse>
      </TableCell>
    </TableRow>
  );
};

export default CollapsingRow;
