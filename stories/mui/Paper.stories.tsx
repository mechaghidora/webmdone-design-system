import type { Meta, StoryObj } from "@storybook/react";

import { PaperElevationsShowcase } from "@/components/paper";

const meta: Meta = {
  title: "MUI/Paper surfaces",
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj;

export const Elevations: Story = {
  render: () => <PaperElevationsShowcase />,
};
