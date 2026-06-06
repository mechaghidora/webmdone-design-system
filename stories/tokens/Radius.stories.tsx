import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import type { Meta, StoryObj } from "@storybook/react";

import { Typography } from "@/components/typography";

const meta: Meta = {
  title: "Tokens/Radius",
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj;

export const BaseRadius: Story = {
  name: "Base radius",
  render: () => (
    <Stack spacing={2}>
      <Typography variant="body2" color="text.secondary">
        Border radius tokens from <code>styles/tokens.css</code>.
      </Typography>
      <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
        <Box
          sx={{
            width: 120,
            height: 120,
            borderRadius: "var(--borderRadius)",
            border: "1px solid var(--color-border)",
            bgcolor: "var(--color-surface)",
          }}
        />
        <Typography variant="caption" component="code">
          --borderRadius
        </Typography>
      </Box>
    </Stack>
  ),
};
