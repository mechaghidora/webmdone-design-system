import Stack from "@mui/material/Stack";

import { Typography } from "./Typography";

export function TypographyScaleShowcase() {
  return (
    <Stack spacing={1.5} sx={{ maxWidth: 720 }}>
      <Typography variant="h1">H1 — display / page title</Typography>
      <Typography variant="h2">H2 — major section</Typography>
      <Typography variant="h3">H3 — subsection</Typography>
      <Typography variant="h4">H4 — card / panel title</Typography>
      <Typography variant="h5">H5 — minor heading</Typography>
      <Typography variant="h6">H6 — label heading</Typography>
      <Typography variant="subtitle1">Subtitle1 — supporting lead</Typography>
      <Typography variant="subtitle2">Subtitle2 — dense supporting</Typography>
      <Typography variant="body1">Body1 — default paragraph</Typography>
      <Typography variant="body2" color="text.secondary">
        Body2 — secondary paragraph
      </Typography>
      <Typography variant="button">Button label</Typography>
      <Typography variant="caption">Caption text</Typography>
      <Typography variant="overline">Overline label</Typography>
      <Typography variant="brandBarTitle">Brand bar title</Typography>
      <Typography variant="sectionHeading">Section heading</Typography>
      <Typography variant="stat">12,450</Typography>
    </Stack>
  );
}
