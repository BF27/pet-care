import { Button, Box, Link, Paper } from "@mui/material";
import { useState, useEffect } from "react";
import { auth } from "../../utils/initFirebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Typography from "@mui/material/Typography";
import RequiredInput from "../../components/RequiredInput";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [newUser, setNewUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (newUser)
      createUserWithEmailAndPassword(auth, newUser.email, newUser.password)
        .then(() => {
          navigate("/user");
        })
        .catch((error) => {
          console.log(error);
        });
  }, [newUser]);

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userData = Object.fromEntries(formData);
    if (userData.password === userData.confirmPassword) {
      setNewUser({
        name: userData.password,
        email: userData.email,
        password: userData.password,
      });
    } else {
      alert("Passwords don't match");
    }
  }

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
      <Typography variant="h2">Sign Up</Typography>
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          width: "100%",
        }}
        onSubmit={handleSubmit}
      >
        <RequiredInput label="Email" name="email" type="email" />
        <RequiredInput label="Password" name="password" type="password" />
        <RequiredInput
          label="Confirm password"
          name="confirmPassword"
          type="password"
        />
        <Typography>
          Already have an account? <br />
          Click <Link href="/signin">here</Link> to sign in.
        </Typography>
        <Box>
          <Button variant="contained" type="submit" sx={{ width: "100%" }}>
            Sign Up
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default Signup;
