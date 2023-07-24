import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import { db, auth } from "../../utils/initFirebase";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { DatePicker } from "@mui/x-date-pickers";
import { format } from "date-fns";

const PetProfile = () => {
  const date = new Date();
  const navigate = useNavigate();
  const [userId, setUserId] = useState(null);
  const [birthDate, setBirthDate] = useState(date);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid);
      }
    });
  }, []);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const docRef = doc(db, "users", userId);
    const docSnap = await getDoc(docRef);
    const petId = uuidv4();
    const formData = new FormData(event.target);
    formData.append("petId", petId);
    formData.append("petBirth", birthDate);
    const petData = Object.fromEntries(formData);

    if (docSnap.exists()) {
      await setDoc(doc(db, "users", userId), {
        pets: [...docSnap.data().pets, petData],
      });
    } else {
      await setDoc(doc(db, "users", userId), {
        pets: [petData],
      });
    }
    navigate("/dashboard");
  };
  return (
    <Paper
      elevation={4}
      component="main"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
        width: "clamp(280px, 26vw, 480px)",
        padding: "1rem",
      }}
    >
      <Typography variant="h2">Add New Pet</Typography>
      <Box
        component="form"
        className="pet-adder-form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          width: "100%",
        }}
      >
        <TextField
          type="text"
          label="Type your pet name"
          id="petName"
          name="petName"
          required
        />
        <FormControl fullWidth>
          <InputLabel id="gender-label">Gender</InputLabel>
          <Select
            labelId="gender-label"
            label="Gender"
            id="petGender"
            name="petGender"
            required
          >
            <MenuItem value={"Male"}>Male</MenuItem>
            <MenuItem value={"Female"}>Female</MenuItem>
          </Select>
        </FormControl>
        <TextField
          type="text"
          label="Type your pet species"
          id="petSpecies"
          name="petSpecies"
          required
        />
        <TextField
          type="text"
          label="Type your pet breed"
          id="petBreed"
          name="petBreed"
          required
        />
        <DatePicker
          label="Enter your pet date of birth"
          id="petBirth"
          name="petBirth"
          defaultValue={birthDate}
          onChange={(date) => setBirthDate(format(date, "yyyy.MM.dd"))}
          required
        />
        <TextField
          type="number"
          label="Type your pet chip number"
          id="petChipNum"
          name="petChipNum"
          required
        />
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </Box>
    </Paper>
  );
};

export default PetProfile;
