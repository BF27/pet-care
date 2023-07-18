import { IconButton } from "@mui/material";
import { Logout } from "@mui/icons-material";
import { auth } from "../utils/initFirebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const LogOutBtn = () => {
  const navigate = useNavigate();

  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log("Unsuccessful logout", error);
      });
  };

  return (
    <IconButton color="inherit" onClick={handleLogOut}>
      <Logout />
    </IconButton>
  );
};

export default LogOutBtn;
