"use client";

import Stack from "@mui/material/Stack";
import * as React from "react";

import { Typography } from "../typography";

import { BackNextPagination } from "./BackNextPagination";

const PAGE_COUNT = 5;

export function PaginationDemo() {
  const [page, setPage] = React.useState(1);

  return (
    <Stack spacing={2} sx={{ alignItems: "flex-start" }}>
      <Typography variant="body2" color="text.secondary">
        BACK and NEXT with a page counter (e.g. 1/5, 2/5).
      </Typography>
      <BackNextPagination
        page={page}
        pageCount={PAGE_COUNT}
        disableBack={page <= 1}
        disableNext={page >= PAGE_COUNT}
        onBack={() => setPage((p) => Math.max(1, p - 1))}
        onNext={() => setPage((p) => Math.min(PAGE_COUNT, p + 1))}
      />
    </Stack>
  );
}
