import type { Meta, StoryObj } from "@storybook/react";

import { DemoDialog } from "@/components/mui-demos";

const meta: Meta = {
  title: "MUI/Dialog",
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => <DemoDialog />,
};
