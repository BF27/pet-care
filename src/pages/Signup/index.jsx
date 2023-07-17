import { Button, Box, Link } from "@mui/material";
import { useState, useEffect } from "react";
import { auth } from "../../utils/initFirebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Typography from "@mui/material/Typography";
import RequiredInput from "../../components/RequiredInput";

const Signup = () => {
  const [newUser, setNewUser] = useState(null);

  useEffect(() => {
    if (newUser) {
      const createUser = async () => {
        await createUserWithEmailAndPassword(
          auth,
          newUser.email,
          newUser.password
        );
      };
      createUser();
    }
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
    <Box
      component="main"
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
    </Box>
  );
};

export default Signup;
