import Stack from "@mui/material/Stack";

import { CircularProgress, LinearProgress } from "./Progress";

export function CircularProgressShowcase() {
  return (
    <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
      <CircularProgress />
      <CircularProgress variant="determinate" value={65} />
    </Stack>
  );
}
