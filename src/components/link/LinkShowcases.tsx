import Stack from "@mui/material/Stack";

import { Link } from "./Link";

export function LinkPrimaryUnderlineShowcase() {
  return (
    <Stack spacing={1}>
      <Link href="#">Primary link</Link>
      <Link href="#" color="text.secondary">
        Secondary link
      </Link>
      <Link href="#" underline="none">
        No underline
      </Link>
    </Stack>
  );
}
