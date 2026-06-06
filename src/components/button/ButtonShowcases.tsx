import AddIcon from "@mui/icons-material/Add";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";

import { Button } from "./Button";

export function ButtonTextShowcase() {
  return (
    <Stack direction="row" spacing={2} sx={{ flexWrap: "wrap" }}>
      <Button>Primary</Button>
      <Button disabled>Disabled</Button>
      <Button href="#text">Link</Button>
    </Stack>
  );
}

export function ButtonOutlineShowcase() {
  return (
    <Stack direction="row" spacing={2} sx={{ flexWrap: "wrap" }}>
      <Button variant="outlined">Outlined</Button>
      <Button variant="outlined" disabled>
        Disabled
      </Button>
    </Stack>
  );
}

export function ButtonElevatedContainedShowcase() {
  return (
    <Stack direction="row" spacing={2} sx={{ flexWrap: "wrap" }}>
      <Button variant="contained">Contained</Button>
      <Button variant="contained" disabled>
        Disabled
      </Button>
    </Stack>
  );
}

export function ButtonWithStartIconShowcase() {
  return <Button variant="contained" startIcon={<AddIcon />}>With start icon</Button>;
}

export function ButtonWithEndIconShowcase() {
  return <Button variant="contained" endIcon={<SendIcon />}>With end icon</Button>;
}

export function ButtonAllVariantsOverviewShowcase() {
  return (
    <Stack spacing={2}>
      <ButtonTextShowcase />
      <ButtonOutlineShowcase />
      <ButtonElevatedContainedShowcase />
      <Stack direction="row" spacing={2}>
        <ButtonWithStartIconShowcase />
        <ButtonWithEndIconShowcase />
      </Stack>
    </Stack>
  );
}
