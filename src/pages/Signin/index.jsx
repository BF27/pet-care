import {
  Button,
  Box,
  Link,
  Container,
  Typography,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { auth } from "../../utils/initFirebase";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import RequiredInput from "../../components/RequiredInput";
import { useEffect } from "react";

const Signin = () => {
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/dashboard");
      }
    });
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userData = Object.fromEntries(formData);

    signInWithEmailAndPassword(auth, userData.email, userData.password)
      .then(() => {
        navigate("/dashboard");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  }

  return (
    <Container
      fixed
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
      <Typography variant="h2">Sign In</Typography>
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          width: "100%",
        }}
        onSubmit={(e) => handleSubmit(e)}
      >
        <RequiredInput label="Email" name="email" type="email" />
        <RequiredInput label="Password" name="password" type="password" />
        <FormControlLabel control={<Checkbox />} label="Remember me" />
        <Typography>
          Click <Link href="/signup">here</Link> to sign up.
        </Typography>
        <Box>
          <Button variant="contained" type="submit" sx={{ width: "100%" }}>
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Signin;
