import { TableRow, TableCell, Collapse, Button } from "@mui/material";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../utils/initFirebase";
import CollapsingDataRow from "./CollapsingDataRow";
import { useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";


const CollapsingRow = ({ animal, expandedAnimalId, animals, changeAnimals }) => {
  const user = useContext(UserContext);

  const handleDelete = async (id) => {
    const newPetList = animals.filter((animal) => animal.petId !== id);
    await setDoc(doc(db, "users", user.uid), {
      pets: newPetList,
    });
    changeAnimals(newPetList);
  };

  return (
    <TableRow>
      <TableCell colSpan={3}>
        <Collapse in={expandedAnimalId === animal.petId} timeout="auto" unmountOnExit>
          <CollapsingDataRow
            userId={user.uid}
            petId={animal.petId}
            title="Breed"
            value={animal.petBreed}
            dataField={"petBreed"}
            animals={animals}
            changeAnimals={changeAnimals}
          />
          <CollapsingDataRow
            userId={user.uid}
            petId={animal.petId}
            title="Gender"
            value={animal.petGender}
            dataField={"petGender"}
            animals={animals}
            changeAnimals={changeAnimals}
          />
          <CollapsingDataRow
            userId={user.uid}
            petId={animal.petId}
            title="Date of birth"
            value={animal.petBirth}
            dataField={"petBirth"}
            animals={animals}
            changeAnimals={changeAnimals}
          />
          <CollapsingDataRow
            userId={user.uid}
            petId={animal.petId}
            title="Chip number"
            value={animal.petChipNum}
            dataField={"petChipNum"}
            animals={animals}
            changeAnimals={changeAnimals}
          />

          <Button
            variant="outlined"
            color="secondary"
            size="small"
            onClick={() => handleDelete(animal.petId)}
          >
            Delete
          </Button>
        </Collapse>
      </TableCell>
    </TableRow>
  );
};

export default CollapsingRow;
