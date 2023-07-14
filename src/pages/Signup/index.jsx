import { Button, TextField, Box, Link } from "@mui/material";
import { useState, useEffect } from "react";
import { auth } from "../../utils/initFirebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Typography from "@mui/material/Typography";

const Signup = () => {
  const [newUser, setNewUser] = useState(null);

  useEffect(() => {
    console.log(newUser);
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
    console.log(formData);
    console.log(userData);
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
        <div>
          <TextField
            label="Name"
            id="name"
            name="name"
            type={"text"}
            sx={{ width: "100%" }}
          />
        </div>
        <div>
          <TextField
            label="Email"
            name="email"
            id="email"
            type={"email"}
            sx={{ width: "100%" }}
          />
        </div>
        <div>
          <TextField
            id="password"
            name="password"
            label="Password"
            type={"password"}
            sx={{ width: "100%" }}
          />
        </div>
        <div>
          <TextField
            id="confirmPassword"
            name="confirmPassword"
            label="Confirm password"
            type={"password"}
            sx={{ width: "100%" }}
          />
        </div>
        <Typography>
          Already have an account? <br />
          Click <Link href="/signin">here</Link> to sign in.
        </Typography>
        <div>
          <Button variant="contained" type="submit" sx={{ width: "100%" }}>
            Sign Up
          </Button>
        </div>
      </Box>
    </Box>
  );
};

export default Signup;
