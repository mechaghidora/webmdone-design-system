import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import { Paper } from "./Paper";

export function PaperElevationsShowcase() {
  return (
    <Stack direction="row" spacing={2} sx={{ flexWrap: "wrap" }}>
      {[0, 1, 2, 3, 4].map((elevation) => (
        <Paper key={elevation} elevation={elevation} sx={{ width: 120, height: 80, p: 2 }}>
          <Box component="span" sx={{ fontSize: 12 }}>
            elevation={elevation}
          </Box>
        </Paper>
      ))}
    </Stack>
  );
}
