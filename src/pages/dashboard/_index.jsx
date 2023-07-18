import React, { useState } from 'react';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const AnimalTable = () => {

  const [animals, setAnimals] = useState([
    { id: 1, name: 'Buksi', gender: 'Hím', birthDate: '2000-01-01', breed: 'Német juhász', chipNumber: '123456' },
    { id: 2, name: 'Sanyi', gender: 'Nőstény', birthDate: '2001-02-02', breed: 'Perzsa', chipNumber: '654321' },
  ]);

 
  const handleDelete = (id) => {
    const updatedAnimals = animals.filter((animal) => animal.id !== id);
    setAnimals(updatedAnimals);
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Pet name</TableCell>
            <TableCell>Pet gender</TableCell>
            <TableCell>Date of birth</TableCell>
            <TableCell>Breed</TableCell>
            <TableCell>Chip number</TableCell>
            <TableCell>Editing</TableCell>
            <TableCell>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {animals.map((animal) => (
            <TableRow key={animal.id}>
              <TableCell>{animal.name}</TableCell>
              <TableCell>{animal.gender}</TableCell>
              <TableCell>{animal.birthDate}</TableCell>
              <TableCell>{animal.breed}</TableCell>
              <TableCell>{animal.chipNumber}</TableCell>
              <TableCell>
                <Button variant="outlined" color="primary" size="small">
                  Data
                </Button>
              </TableCell>
              <TableCell>
                <Button
                  variant="outlined"
                  color="secondary"
                  size="small"
                  onClick={() => handleDelete(animal.id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AnimalTable;
