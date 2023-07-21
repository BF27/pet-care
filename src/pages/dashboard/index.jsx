import React, { useState } from "react";
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


const AnimalTable = () => {
  const [animals, setAnimals] = useState([
    {
      id: 1,
      name: "Buksi",
      gender: "Hím",
      species: "kutya",
      breed: "Német juhász",
      birthDate: "2000-01-01",
      chipNumber: "123456",
    },
    {
      id: 2,
      name: "Sanyi",
      gender: "Nőstény",
      species: "cica",
      breed: "Perzsa",
      birthDate: "2001-02-02",
      chipNumber: "654321",
    },
  ]);

  const [expandedAnimalId, setExpandedAnimalId] = useState(null);

  const handleExpand = (id) => {
    if (expandedAnimalId === id) {
      setExpandedAnimalId(null);
    } else {
      setExpandedAnimalId(id);
    }
  };

  const handleDelete = (id) => {
    const updatedAnimals = animals.filter((animal) => animal.id !== id);
    setAnimals(updatedAnimals);
  };

  const navigate = useNavigate();
  const handleNewPetButton = () => {
    navigate("/pet");
  }

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
            {animals.map((animal) => (
              <React.Fragment key={animal.id}>
                <TableRow>
                  <TableCell>{animal.name}</TableCell>
                  <TableCell>{animal.species}</TableCell>
                  <TableCell>
                    <Button
                      variant="outlined"
                      color="primary"
                      size="small"
                      onClick={() => handleExpand(animal.id)}
                    >
                      Data
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={3}>
                    <Collapse
                      in={expandedAnimalId === animal.id}
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
                        <p>Breed: {animal.breed}</p>
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
                        <p>Gender: {animal.gender}</p>
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
                        <p>Date of birth: {animal.birthDate}</p>
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
                        <p>Chip number: {animal.chipNumber}</p>
                        <EditIcon />
                      </Box>
                      <Button
                        variant="outlined"
                        color="secondary"
                        size="small"
                        onClick={() => handleDelete(animal.id)}
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
          <Button variant="outlined" color="primary" size="medium" onClick={handleNewPetButton}>
            Add new pet
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default AnimalTable;
