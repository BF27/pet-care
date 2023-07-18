import { AppBar, Toolbar, Typography, Avatar, IconButton } from "@mui/material";
import { Logout } from "@mui/icons-material";

const Header = () => {
  return (
    <AppBar>
      <Toolbar sx={{justifyContent: "flex-end", gap: "1rem" }}>
        <Avatar alt="Profil kép">PN</Avatar> 
        <Typography variant="h6" component="div">
          Profile Name
        </Typography>  
        <IconButton color="inherit">
          <Logout />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
