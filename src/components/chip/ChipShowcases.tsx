"use client";

import Stack from "@mui/material/Stack";
import * as React from "react";

import { Chip } from "./Chip";

export function ChipActiveInactiveShowcase() {
  const [active, setActive] = React.useState(true);
  return (
    <Stack direction="row" spacing={1}>
      <Chip label={active ? "Active" : "Inactive"} color={active ? "primary" : "default"} onClick={() => setActive((v) => !v)} />
      <Chip label="Disabled" disabled />
    </Stack>
  );
}

export function ToggleChip() {
  const [selected, setSelected] = React.useState(false);
  return (
    <Chip
      label={selected ? "Selected" : "Unselected"}
      variant={selected ? "filled" : "outlined"}
      onClick={() => setSelected((v) => !v)}
    />
  );
}
