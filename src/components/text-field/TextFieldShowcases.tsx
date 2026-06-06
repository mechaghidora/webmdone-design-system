import Stack from "@mui/material/Stack";

import { TextField } from "./TextField";

export function StandardFieldsShowcase() {
  return (
    <Stack spacing={2} sx={{ maxWidth: 400 }}>
      <TextField label="Standard" />
      <TextField label="Required" required />
      <TextField label="Disabled" disabled defaultValue="Disabled value" />
      <TextField label="Error" error helperText="Helper text for error state" />
      <TextField label="Multiline" multiline rows={3} />
    </Stack>
  );
}
