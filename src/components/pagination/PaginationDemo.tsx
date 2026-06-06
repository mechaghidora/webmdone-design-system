"use client";

import Stack from "@mui/material/Stack";
import * as React from "react";

import { Typography } from "@/components/typography";

import { BackNextPagination } from "./BackNextPagination";

export function PaginationDemo() {
  const [page, setPage] = React.useState(1);
  return (
    <Stack spacing={2} sx={{ alignItems: "flex-start" }}>
      <Typography variant="body2" color="text.secondary">
        Text buttons for BACK and NEXT with MUI arrow icons.
      </Typography>
      <Typography variant="caption">Simulated page: {page}</Typography>
      <BackNextPagination
        disableBack={page <= 1}
        onBack={() => setPage((p) => Math.max(1, p - 1))}
        onNext={() => setPage((p) => p + 1)}
      />
    </Stack>
  );
}
