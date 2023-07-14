import { Button, TextField, Box, Link } from "@mui/material";
import Typography from "@mui/material/Typography";

const Signin = () => {
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
      <Typography variant="h2">Sign In</Typography>
      <Box
        component="form"
        sx={{ display: "flex", flexDirection: "column", gap: "1rem", width: "100%"}}
      >
        <div>
          <TextField label="Email" type={"email"} sx={{width:"100%"}}/>
        </div>
        <div>
          <TextField label="Password" type={"password"} sx={{width:"100%"}}/>
        </div>
        <Typography>
          Click <Link href="/signup">here</Link> to sign up.
        </Typography>
        <div>
          <Button variant="contained" type="submit" sx={{width:"100%"}}>
            Sign In
          </Button>
        </div>
      </Box>
    </Box>
  );
};

export default Signin;
