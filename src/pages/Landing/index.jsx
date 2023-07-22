import { Box, Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Landing = () => {
  const navigate = useNavigate();
  const handleClick = (page) => {
    navigate(`/${page}`);
  };

  return (
    <Container
      component="main"
      sx={{
        height: "100vh"
      }}
    >
      <Box
        sx={{
          width: "min(100%, 800px)",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: '2rem'
        }}
      >
        <Box>
          <Typography variant="h2">Empower Your Pet's <br /> Well-Being</Typography>
          <Typography variant="h5">
            Track, Monitor, and Nurture their Health with Ease. Your Pet's
            Health, All in One Place - Join Us now!
          </Typography>
        </Box>
        <Box sx={{display: 'flex', gap: '1.5rem'}}>
          <Button variant="contained" onClick={() => handleClick("signup")}>
            Sign up
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Landing;
