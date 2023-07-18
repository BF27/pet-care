import { Typography } from "@mui/material";

const HeaderUserName = ({ userName }) => {
  return (
    <Typography variant="h6" component="div">
      {userName}
    </Typography>
  );
};

export default HeaderUserName;
