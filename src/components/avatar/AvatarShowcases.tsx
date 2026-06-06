import Stack from "@mui/material/Stack";

import { Avatar } from "./Avatar";

const AVATAR_IMAGE_SRC = "/kevin-mueller-s3HuF4LDeOc-unsplash.jpg";
const AVATAR_IMAGE_ALT = "Person in a wellness setting";

export function AvatarImageShowcase() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar alt={AVATAR_IMAGE_ALT} src={AVATAR_IMAGE_SRC} />
      <Avatar alt={AVATAR_IMAGE_ALT} src={AVATAR_IMAGE_SRC} variant="rounded" />
      <Avatar alt={AVATAR_IMAGE_ALT} src={AVATAR_IMAGE_SRC} variant="square" />
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
