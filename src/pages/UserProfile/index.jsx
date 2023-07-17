import { Box, Typography, TextField, Button, Avatar } from "@mui/material";

const UserProfile = () => {
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
      }}
    >
      <Typography variant="h2">User Profile</Typography>
      <Box
        component="form"
        className="user-adder-form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          width: "100%",
        }}
      >
        <Avatar variant="rounded">I</Avatar>
        <TextField
          type="text"
          label="Type your last name"
          id="lastName"
          name="lastName"
          required
        />
        <TextField
          type="text"
          label="Type your first name"
          id="firstName"
          name="firstName"
          required
        />
        <TextField
          type="text"
          label="Type your e-mail address"
          id="userAddress"
          name="userAddress"
          required
        />
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default UserProfile;
