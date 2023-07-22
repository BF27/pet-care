import { TableRow, TableCell, Collapse, Button } from "@mui/material";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../utils/initFirebase";
import CollapsingDataRow from "./CollapsingDataRow";
import { useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";


const CollapsingRow = ({ index, expandedAnimalId, animals, changeAnimals }) => {
  const user = useContext(UserContext);
  const pet = animals[index];

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
        <Collapse in={expandedAnimalId === pet.petId} timeout="auto" unmountOnExit>
          <CollapsingDataRow
            userId={user.uid}
            petId={pet.petId}
            title="Breed"
            value={pet.petBreed}
            dataField={"petBreed"}
            animals={animals}
            changeAnimals={changeAnimals}
          />
          <CollapsingDataRow
            userId={user.uid}
            petId={pet.petId}
            title="Gender"
            value={pet.petGender}
            dataField={"petGender"}
            animals={animals}
            changeAnimals={changeAnimals}
          />
          <CollapsingDataRow
            userId={user.uid}
            petId={pet.petId}
            title="Date of birth"
            value={pet.petBirth}
            dataField={"petBirth"}
            animals={animals}
            changeAnimals={changeAnimals}
          />
          <CollapsingDataRow
            userId={user.uid}
            petId={pet.petId}
            title="Chip number"
            value={pet.petChipNum}
            dataField={"petChipNum"}
            animals={animals}
            changeAnimals={changeAnimals}
          />

          <Button
            variant="outlined"
            color="secondary"
            size="small"
            onClick={() => handleDelete(pet.petId)}
          >
            Delete
          </Button>
        </Collapse>
      </TableCell>
    </TableRow>
  );
};

export default CollapsingRow;
