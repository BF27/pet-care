import {
  AppBar,
  Toolbar,
  Avatar,
  Typography,
  Container,
  Button,
} from "@mui/material";
import LogOutBtn from "./LogOutBtn";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/initFirebase";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [user, setUser] = useState(null);
  const [userName, setUserName] = useState(null);
  const [userPhoto, setUserPhoto] = useState(null);
  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setUserName(user.displayName);
        setUserPhoto(user.photoURL);
        setUserEmail(user.email);
      }
    });
  }, [user]);

  const navigate = useNavigate();

  function handleClick() {
    navigate("/user");
  }

  return (
    <AppBar>
      <Container sx={{ display: "flex", justifyContent: "space-between", alignItems: 'center' }}>
        <Typography variant="h1" sx={{ fontSize: "3rem", fontWeight: "500" }}>
          PetCare
        </Typography>
        <Toolbar sx={{ justifyContent: "flex-end", gap: "1rem" }}>
          {user ? (
            <>
              <Avatar src={userPhoto} alt="Profile Picture" />
              <Typography
                variant="h6"
                onClick={handleClick}
                sx={{
                  cursor: "pointer",
                  textDecoration: "underline",
                  "&:hover": { textDecoration: "none" },
                }}
              >
                {userName ? userName : userEmail}
              </Typography>
              <LogOutBtn />
            </>
          ) : (
            <Button variant="text" sx={{color: "#fff"}} onClick={() => navigate("/signin")}>
              Sign In
            </Button>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
