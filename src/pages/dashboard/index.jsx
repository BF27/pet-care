import React, { useEffect, useState } from "react";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Collapse,
  Box,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import Header from "../../components/Header";
import TableHeader from "./components/TableHeader";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../utils/initFirebase";
import { doc, getDoc } from "firebase/firestore";

const AnimalTable = () => {
  const [animals, setAnimals] = useState([]);
  const [userId, setUserId] = useState(null);
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

  const [expandedAnimalId, setExpandedAnimalId] = useState(null);

  const handleExpand = (id) => {
    if (expandedAnimalId === id) {
      setExpandedAnimalId(null);
    } else {
      setExpandedAnimalId(id);
    }
  };

  const handleDelete = (id) => {
    
  };

  const navigate = useNavigate();
  const handleNewPetButton = () => {
    navigate("/pet");
  };

  return (
    <>
      <Header />
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
                <TableRow>
                  <TableCell colSpan={3}>
                    <Collapse
                      in={expandedAnimalId === animal.petId}
                      timeout="auto"
                      unmountOnExit
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <p>Breed: {animal.petBreed}</p>
                        <EditIcon />
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <p>Gender: {animal.petGender}</p>
                        <EditIcon />
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <p>Date of birth: {animal.petBirth}</p>
                        <EditIcon />
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <p>Chip number: {animal.petChipNum}</p>
                        <EditIcon />
                      </Box>
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
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
        <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
          <Button
            variant="outlined"
            color="primary"
            size="medium"
            onClick={handleNewPetButton}
          >
            Add new pet
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default AnimalTable;
