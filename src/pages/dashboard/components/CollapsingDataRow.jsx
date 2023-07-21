import { Box, TextField } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../utils/initFirebase";

const CollapsingDataRow = ({ title, value, dataField, animals, changeAnimals, petId, userId }) => {

  const [editing, setEditing] = useState(false);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = async (event) => {

    const newValue = document.getElementById(`${petId}_${dataField}`).value;

    const newAnimals = animals.map((animal) => {
      if (animal.petId === petId) {
        animal[dataField] = newValue;
      }
      return animal;
    });

    await setDoc(doc(db, "users", userId), {
      pets: newAnimals
    });
    changeAnimals(newAnimals);
    setEditing(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        minHeight: "80px",
      }}
    >
      {editing ? (
        <>
          <TextField id={`${petId}_${dataField}`} type="text" defaultValue={value} label={title} />
          <SaveIcon onClick={(event) => handleSave(event)} sx={{ cursor: "pointer" }} />
        </>
      ) : (
        <>
          <p>
            {title}: {value}
          </p>
          <EditIcon onClick={handleEdit} sx={{ cursor: "pointer" }} />
        </>
      )}
    </Box>
  );
};

export default CollapsingDataRow;
