import { AppBar, Toolbar, Avatar, Typography } from "@mui/material";
import LogOutBtn from "./LogOutBtn";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/initFirebase";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [userName, setUserName] = useState(null);
  const [userPhoto, setUserPhoto] = useState(null);
  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserName(user.displayName);
        setUserPhoto(user.photoURL);
        setUserEmail(user.email);
      }
    });
  }, []);

  const navigate = useNavigate();

  function handleClick () {
    navigate("/user")
  }

  return (
    <AppBar>
      <Toolbar sx={{ justifyContent: "flex-end", gap: "1rem" }}>
        <Avatar src={userPhoto} alt="Profile Picture" />
        <Typography variant="h6" onClick={handleClick} sx={{cursor: "pointer", textDecoration: "underline", "&:hover":{textDecoration: "none"}}}>
          {userName ? userName : userEmail}
        </Typography>
        <LogOutBtn />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
