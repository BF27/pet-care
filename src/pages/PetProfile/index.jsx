import { Box, Typography, TextField, Button, Paper } from "@mui/material";
import { db, auth } from "../../utils/initFirebase";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const PetProfile = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState(null);
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
      <Typography variant="h2">Pet Profile</Typography>
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
        <TextField
          type="text"
          label="Type your pet gender"
          id="petGender"
          name="petGender"
          required
        />
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
        <TextField
          type="text"
          label="Type your pet date of birth"
          id="petBirth"
          name="petBirth"
          required
        />
        <TextField
          type="text"
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
