import Stack from "@mui/material/Stack";
import type { Meta, StoryObj } from "@storybook/react";

import { Typography } from "@/components/typography";
import { TypographyScaleShowcase } from "@/components/typography";

const meta: Meta = {
  title: "MUI/Typography",
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj;

export const Scale: Story = {
  render: () => (
    <Stack spacing={1.5} sx={{ maxWidth: 720 }}>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
        All sizes, weights, line-heights, and letter-spacing come from{" "}
        <code>styles/tokens.css</code> (<code>--type-*</code>) via the app theme—use{" "}
        <code>variant</code> instead of ad-hoc <code>sx</code> font metrics.
      </Typography>
      <TypographyScaleShowcase />
    </Stack>
  ),
};
