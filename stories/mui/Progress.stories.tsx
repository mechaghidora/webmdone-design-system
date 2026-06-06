import Stack from "@mui/material/Stack";
import type { Meta, StoryObj } from "@storybook/react";

import { CircularProgressShowcase } from "@/components/progress";
import { LinearProgress } from "@/components/progress";

const meta: Meta = {
  title: "MUI/Progress",
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj;

export const Circular: Story = {
  render: () => <CircularProgressShowcase />,
};

export const Linear: Story = {
  render: () => (
    <Stack spacing={2} sx={{ maxWidth: 400 }}>
      <LinearProgress />
      <LinearProgress variant="determinate" value={50} />
    </Stack>
  ),
};
