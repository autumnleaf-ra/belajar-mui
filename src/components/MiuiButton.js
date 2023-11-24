import {
  Button,
  ButtonGroup,
  IconButton,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import React, { useState } from "react";

// icons material
import SendIcon from "@mui/icons-material/Send";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";

const MiuiButton = () => {
  const [formats, setFormats] = useState([]);

  const handleFormatChange = (event, newFormats) => {
    setFormats(newFormats);
    console.log({
      newFormats,
    });
  };

  return (
    <>
      <Stack mt={4}>
        <Stack spacing={2} direction="row" justifyContent={"center"}>
          <Button href="https://google.com" target="_blank">
            Text
          </Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
        </Stack>
      </Stack>

      <Stack mt={4}>
        <Stack spacing={2} direction={"row"} justifyContent={"center"}>
          <Button variant="contained" color="primary">
            Primary
          </Button>
          <Button variant="contained" color="secondary">
            secondary
          </Button>
          <Button variant="contained" color="error">
            error
          </Button>
          <Button variant="contained" color="info">
            info
          </Button>
          <Button variant="contained" color="success">
            success
          </Button>
        </Stack>
      </Stack>

      <Stack mt={4}>
        <Stack
          display={"block"}
          spacing={2}
          direction={"row"}
          justifyContent={"center"}
        >
          <Button variant="contained" size="small">
            Small
          </Button>
          <Button variant="contained" size="medium">
            medium
          </Button>
          <Button variant="contained" size="large">
            large
          </Button>
        </Stack>
      </Stack>

      <Stack mt={4}>
        <Stack spacing={2} direction={"row"} justifyContent={"center"}>
          <Button
            variant="contained"
            startIcon={<SendIcon />}
            disableRipple
            onClick={() => alert("Clicked")}
          >
            Send
          </Button>
          <Button variant="contained" endIcon={<SendIcon />}>
            Send
          </Button>
          {/* Hanya menampilkan Icon */}
          <IconButton aria-label="send" color="success" size="small">
            <SendIcon />
          </IconButton>
        </Stack>
      </Stack>

      <Stack mt={4}>
        <Stack direction={"row"} justifyContent={"center"}>
          <ButtonGroup
            variant="contained"
            orientation="vertical"
            size="small"
            color="secondary"
            aria-aria-label="alignment button group"
          >
            <Button onClick={() => alert("Left Clicked")}>Left</Button>
            <Button>Center</Button>
            <Button>Right</Button>
          </ButtonGroup>
        </Stack>
      </Stack>

      <Stack mt={4}>
        <Stack direction={"row"} justifyContent={"center"}>
          <ToggleButtonGroup
            aria-label="text formatting"
            value={formats}
            onChange={handleFormatChange}
            size="small"
            color="success"
            exclusive
          >
            <ToggleButton value={"bold"} aria-label="bold">
              <FormatBoldIcon />
            </ToggleButton>
            <ToggleButton value={"italic"} aria-label="italic">
              <FormatItalicIcon />
            </ToggleButton>
            <ToggleButton value={"underlined"} aria-label="underlined">
              <FormatUnderlinedIcon />
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>
      </Stack>
    </>
  );
};

export default MiuiButton;
