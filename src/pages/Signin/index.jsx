import { Button, Box, Link, Container, Typography, Checkbox, FormControlLabel } from "@mui/material";
import { auth } from "../../utils/initFirebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { UserContext, ChangeUserContext } from "../../contexts/userContext";
import RequiredInput from "../../components/RequiredInput";

const Signin = () => {
  const user = useContext(UserContext);
  const changeUser = useContext(ChangeUserContext);
  const [signIn, setSignIn] = useState(false);
  const [userEmail, setUserEmail] = useState(null);
  const [userPwd, setUserPwd] = useState(null);

  useEffect(() => {
    if(user) {
      console.log(user.uid)
    }
    if (signIn) {
      signInWithEmailAndPassword(auth, userEmail, userPwd)
        .then((userCredential) => {
          changeUser(userCredential.user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
        });
    }
  }, [signIn]);

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userData = Object.fromEntries(formData);
    setUserEmail(userData.email);
    setUserPwd(userData.password);
    setSignIn(true);
  }

  return (
    <Container fixed
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
