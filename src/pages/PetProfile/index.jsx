import { Box, Typography, TextField, Button } from "@mui/material"


const PetProfile = () => {
  return (
    <Box
    component={"main"}
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "1rem",
      width: "clamp(280px, 26vw, 480px)",
      border: 1,
      padding: "1rem",
      borderRadius: "1rem",
    }}>
    <Typography variant="h2">PetProfile</Typography>
    <Box 
      component="form"
      className="pet-adder-form"
    sx={{
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
      width: "100%",
    }}>
      <TextField type = "text" label="Type your pet name" id="petName" name="petName" required/>
      <TextField type = "text" label="Type your pet gender" id="petGender" name="petGender" required/>
      <TextField type = "text" label="Type your pet breed" id="petBreed" name="petBreed" required/>
      <TextField type = "text" label="Type your pet date of birth" id="petBirth" name="petBirth" required/>
      <TextField type = "text" label="Type your pet chip number" id="petChipNum" name="petChipNum" required/>
      <TextField type = "text" label="Type your pet date of birth" id="petBirth" name="petBirth" required/>
      <Button variant="contained" type="submit">Submit</Button>
    </Box>
    </Box>
  )
}

export default PetProfile
