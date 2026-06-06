import type { Meta, StoryObj } from "@storybook/react";

import { DemoModal } from "@/components/mui-demos";

const meta: Meta = {
  title: "MUI/Modal",
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => <DemoModal />,
};
