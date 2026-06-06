import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import type { Meta, StoryObj } from "@storybook/react";

import { Typography } from "@/components/typography";

const typeRows = [
  { prefix: "h1", label: "h1", weight: true },
  { prefix: "h2", label: "h2", weight: false },
  { prefix: "h3", label: "h3", weight: false },
  { prefix: "h4", label: "h4", weight: false },
  { prefix: "h5", label: "h5", weight: false },
  { prefix: "h6", label: "h6", weight: false },
  { prefix: "body1", label: "body1", weight: false },
  { prefix: "body2", label: "body2", weight: false },
  { prefix: "button", label: "button", weight: true },
  { prefix: "caption", label: "caption", weight: false },
  { prefix: "overline", label: "overline", weight: false },
];

const meta: Meta = {
  title: "Tokens/Typography",
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj;

export const TypeScale: Story = {
  name: "Type scale",
  render: () => (
    <Stack spacing={2}>
      <Typography variant="body2" color="text.secondary">
        Size (and weight where defined) from <code>styles/tokens.css</code>. Line heights for MUI{" "}
        <code>variant</code> come from the app theme.
      </Typography>
      <Stack spacing={1.5}>
        {typeRows.map(({ prefix, label, weight }) => (
          <Box key={prefix} sx={{ display: "flex", alignItems: "baseline", gap: 2 }}>
            <Typography variant="caption" color="text.secondary" sx={{ width: 72 }}>
              {label}
            </Typography>
            <Box
              sx={{
                fontSize: `var(--type-${prefix}-size)`,
                fontWeight: weight ? `var(--type-${prefix}-weight, 400)` : 400,
                fontFamily: "var(--font-family)",
              }}
            >
              The quick brown fox
            </Box>
            <Typography variant="caption" component="code" color="text.secondary">
              --type-{prefix}-size
            </Typography>
          </Box>
        ))}
      </Stack>
    </Stack>
  ),
};
