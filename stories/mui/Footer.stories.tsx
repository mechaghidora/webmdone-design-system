import Box from "@mui/material/Box";
import type { Meta, StoryObj } from "@storybook/react";

import { Footer } from "@/components/footer";

const meta: Meta = {
  title: "MUI/Footer",
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Box sx={{ width: "100%" }}>
      <Footer />
    </Box>
  ),
};
