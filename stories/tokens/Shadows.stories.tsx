import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import type { Meta, StoryObj } from "@storybook/react";

import { Typography } from "@/components/typography";

const elevations = [
  { token: "--box-shadow-1", label: "1" },
  { token: "--box-shadow-2", label: "2" },
  { token: "--box-shadow-3", label: "3" },
  { token: "--box-shadow-4", label: "4" },
  { token: "--box-shadow-5", label: "5" },
];

const semantic = [
  { token: "--shadow-card", label: "Card", note: "box-shadow-1" },
  { token: "--shadow-dropdown", label: "Dropdown", note: "box-shadow-2" },
  { token: "--shadow-modal", label: "Modal", note: "box-shadow-5" },
];

function ShadowGrid({ items }: { items: { token: string; label: string; note?: string }[] }) {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
        gap: 3,
        p: 2,
        borderRadius: 1,
        bgcolor: "var(--color-background)",
      }}
    >
      {items.map(({ token, label, note }) => (
        <Box key={token}>
          <Box
            sx={{
              width: 160,
              height: 100,
              borderRadius: "var(--borderRadius)",
              bgcolor: "var(--color-surface)",
              boxShadow: `var(${token})`,
            }}
          />
          <Typography variant="caption" sx={{ display: "block", mt: 0.5 }}>
            {label}
            {note ? ` (${note})` : ""}
          </Typography>
          <Typography variant="caption" color="text.secondary" component="code" sx={{ fontSize: 11 }}>
            {token}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}

const meta: Meta = {
  title: "Tokens/Shadows",
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj;

export const ElevationScale: Story = {
  name: "Elevation scale",
  render: () => (
    <Stack spacing={2}>
      <Typography variant="body2" color="text.secondary">
        Base elevation tokens from <code>styles/tokens.css</code>.
      </Typography>
      <ShadowGrid items={elevations} />
    </Stack>
  ),
};

export const SemanticShadows: Story = {
  name: "Semantic shadows",
  render: () => (
    <Stack spacing={2}>
      <Typography variant="body2" color="text.secondary">
        Semantic shadow aliases for common UI surfaces.
      </Typography>
      <ShadowGrid items={semantic} />
    </Stack>
  ),
};
