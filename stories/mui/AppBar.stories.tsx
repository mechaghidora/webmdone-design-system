import Box from "@mui/material/Box";
import type { Meta, StoryObj } from "@storybook/react";

import { DemoAppBar } from "@/components/mui-demos";

const meta: Meta = {
  title: "MUI/App bar",
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Box sx={{ width: "100%" }}>
      <DemoAppBar />
    </Box>
  ),
};
