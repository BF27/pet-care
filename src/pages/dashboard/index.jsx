import React, { useEffect, useState } from "react";
import { Table, TableBody, Box, Typography } from "@mui/material";
import TableHeader from "./components/TableHeader";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../utils/initFirebase";
import { doc, getDoc } from "firebase/firestore";
import MainTableRow from "./components/MainTableRow";
import CollapsingRow from "./components/CollapsingRow";

const AnimalTable = () => {
  const [animals, setAnimals] = useState([]);
  const [userId, setUserId] = useState(null);
  const [expandedAnimalId, setExpandedAnimalId] = useState(null);

  const changeExpandedAnimalId = (id) => {
    setExpandedAnimalId(id);
  };
  
  const changeAnimals = (newAnimals) => {
    setAnimals(newAnimals);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid);
      }
    });
  }, []);

  useEffect(() => {
    if (userId) {
      const docRef = doc(db, "users", userId);
      getDoc(docRef)
        .then((item) => setAnimals(item.data().pets))
        .catch((error) => {
          console.log(error);
        });
    }
  }, [userId]);

  return (
    <>
      <Box
        component={"main"}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
          width: "clamp(280px, 40vw, 1000px)",
          border: 1,
          padding: "1rem",
          borderRadius: "1rem",
        }}
      >
        <Typography variant="h2">Your Pet list</Typography>
        <Table>
          <TableHeader />
          <TableBody>
            {animals.map((animal, i) => (
              <React.Fragment key={i}>
                <MainTableRow
                  petId={animal.petId}
                  petName={animal.petName}
                  petSpecies={animal.petSpecies}
                  expandedAnimalId={expandedAnimalId}
                  changeExpandedAnimalId={changeExpandedAnimalId}
                />
                <CollapsingRow
                  userId={userId}
                  petId={animal.petId}
                  animals={animals}
                  changeAnimals={changeAnimals}
                  expandedAnimalId={expandedAnimalId}
                  petBreed={animal.petBreed}
                  petGender={animal.petGender}
                  petBirth={animal.petBirth}
                  petChipNum={animal.petChipNum}
                />
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </Box>
    </>
  );
};

export default AnimalTable;
