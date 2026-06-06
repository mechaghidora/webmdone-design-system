import Stack from "@mui/material/Stack";

import { Skeleton } from "./Skeleton";

export function SkeletonShapesShowcase() {
  return (
    <Stack spacing={2} sx={{ width: 320 }}>
      <Skeleton variant="text" />
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rectangular" height={120} />
      <Skeleton variant="rounded" height={120} />
    </Stack>
  );
}
