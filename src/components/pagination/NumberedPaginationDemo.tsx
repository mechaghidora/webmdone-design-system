"use client";

import Stack from "@mui/material/Stack";
import * as React from "react";

import { Typography } from "@/components/typography";

import { NumberedPagination } from "./NumberedPagination";

const PAGE_COUNT = 10;

export function NumberedPaginationDemo() {
  const [page, setPage] = React.useState(1);

  return (
    <Stack spacing={2} sx={{ alignItems: "flex-start" }}>
      <Typography variant="body2" color="text.secondary">
        Circular page numbers — click a page to jump directly.
      </Typography>
      <NumberedPagination page={page} pageCount={PAGE_COUNT} onChange={setPage} />
    </Stack>
  );
}
