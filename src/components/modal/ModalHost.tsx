"use client";

import Stack from "@mui/material/Stack";
import * as React from "react";

import { Button } from "../button";

import { Modal } from "./Modal";

export function ModalHost() {
  const [open, setOpen] = React.useState(false);
  return (
    <Stack spacing={2} sx={{ alignItems: "flex-start" }}>
      <Button variant="contained" onClick={() => setOpen(true)}>
        Open modal
      </Button>
      <Modal open={open} onClose={() => setOpen(false)} />
    </Stack>
  );
}
