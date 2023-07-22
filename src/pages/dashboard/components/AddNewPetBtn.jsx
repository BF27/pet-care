import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
const AddNewPetBtn = () => {
  const navigate = useNavigate();
  const handleNewPetButton = () => {
    navigate("/pet");
  };
  return (
    <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
      <Button
        variant="contained"
        color="primary"
        size="medium"
        onClick={handleNewPetButton}
      >
        Add new pet
      </Button>
    </Box>
  );
};

export default AddNewPetBtn;
