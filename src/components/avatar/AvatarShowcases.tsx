import Stack from "@mui/material/Stack";

import { Avatar } from "./Avatar";

export function AvatarImageShowcase() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar alt="User" src="/better-yourself-logo.png" />
      <Avatar alt="User" src="/better-yourself-logo.png" variant="rounded" />
      <Avatar alt="User" src="/better-yourself-logo.png" variant="square" />
    </Stack>
  );
}

export function AvatarTextShowcase() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar>AB</Avatar>
      <Avatar variant="rounded">CD</Avatar>
      <Avatar variant="square">EF</Avatar>
    </Stack>
  );
}

export function AvatarAllVariantsShowcase() {
  return (
    <Stack spacing={2}>
      <AvatarImageShowcase />
      <AvatarTextShowcase />
    </Stack>
  );
}
