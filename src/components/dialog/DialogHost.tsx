"use client";

import Stack from "@mui/material/Stack";
import * as React from "react";

import { Button } from "@/components/button";

import { Dialog } from "./Dialog";

export function DialogHost() {
  const [open, setOpen] = React.useState(false);
  return (
    <Stack spacing={2} sx={{ alignItems: "flex-start" }}>
      <Button variant="contained" onClick={() => setOpen(true)}>
        Open dialog
      </Button>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        secondaryLabel="Secondary"
        primaryLabel="Primary"
      />
    </Stack>
  );
}
