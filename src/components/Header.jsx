import { AppBar, Toolbar, Avatar } from "@mui/material";
import LogOutBtn from "./LogOutBtn";
import HeaderUserName from "./HeaderUserName";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/initFirebase";

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

  return (
    <AppBar>
      <Toolbar sx={{ justifyContent: "flex-end", gap: "1rem" }}>
        <Avatar src={userPhoto} alt="Profile Picture" />
        <HeaderUserName userName={userName ? userName : userEmail} />
        <LogOutBtn />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
