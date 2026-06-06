import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import type { Meta, StoryObj } from "@storybook/react";

import { Typography } from "@/components/typography";

const borderWidths = [
  { token: "--border-width-sm", label: "Small (1px)" },
  { token: "--border-width-md", label: "Medium (2px)" },
];

const meta: Meta = {
  title: "Tokens/Borders",
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj;

export const BorderWidths: Story = {
  name: "Border widths",
  render: () => (
    <Stack spacing={2}>
      <Typography variant="body2" color="text.secondary">
        Border width tokens from <code>styles/tokens.css</code> (top edge uses{" "}
        <code>--color-border</code>).
      </Typography>
      {borderWidths.map(({ token, label }) => (
        <Box key={token}>
          <Typography variant="caption" color="text.secondary" sx={{ display: "block", mb: 0.5 }}>
            {label} — <code>{token}</code>
          </Typography>
          <Box
            sx={{
              width: "100%",
              maxWidth: 480,
              height: 48,
              bgcolor: "var(--color-surface)",
              borderTop: "solid var(--color-border)",
              borderTopWidth: `var(${token})`,
            }}
          />
        </Box>
      ))}
    </Stack>
  ),
};
