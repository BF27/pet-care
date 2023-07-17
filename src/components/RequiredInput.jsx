import { Box, TextField } from "@mui/material"


const RequiredInput = ({label, name, type}) => {
  return (
    <Box>
      <TextField
            label={label}
            name={name}
            id={name}
            type={type}
            sx={{ width: "100%" }}
            required
          />
    </Box>
  )
}

export default RequiredInput
