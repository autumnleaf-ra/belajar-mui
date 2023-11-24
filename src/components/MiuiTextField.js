import { Input, InputAdornment, Stack, TextField } from "@mui/material";
import React, { useState } from "react";

const MiuiTextField = () => {
  const [value, setValue] = useState("");
  return (
    <Stack mt={4} ml={3}>
      <Stack direction={"row"} spacing={2}>
        <TextField label="Name" variant="outlined" />
        <TextField label="Name" variant="filled" />
        <TextField label="Name" variant="standard" />
      </Stack>

      <Stack direction={"row"} spacing={2} mt={2}>
        <TextField
          label="Small"
          variant="outlined"
          size="small"
          color="secondary"
        />
      </Stack>
      <Stack direction={"row"} spacing={2} mt={2}>
        <TextField
          label="Form Input"
          required
          value={value}
          onChange={(e) => setValue(e.target.value)}
          error={!value}
          helperText={
            !value ? "Required" : "Do not share youre password with anyone"
          }
        />
        <TextField
          label="Password"
          type="password"
          required
          helperText="Do not share youre password"
          disabled
        />
        <TextField label="Read only" InputProps={{ readOnly: true }} />
      </Stack>
      <Stack direction={"row"} spacing={2} mt={2}>
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        />
      </Stack>
    </Stack>
  );
};

export default MiuiTextField;
