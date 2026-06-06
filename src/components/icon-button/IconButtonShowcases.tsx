import DeleteIcon from "@mui/icons-material/Delete";
import MenuIcon from "@mui/icons-material/Menu";
import Stack from "@mui/material/Stack";

import { IconButton } from "./IconButton";

export function IconButtonVariantsShowcase() {
  return (
    <Stack direction="row" spacing={1}>
      <IconButton aria-label="menu">
        <MenuIcon />
      </IconButton>
      <IconButton aria-label="delete" color="error">
        <DeleteIcon />
      </IconButton>
      <IconButton aria-label="delete" disabled>
        <DeleteIcon />
      </IconButton>
    </Stack>
  );
}
