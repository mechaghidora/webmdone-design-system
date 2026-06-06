import type { Meta, StoryObj } from "@storybook/react";

import { StandardSelectShowcase } from "@/components/select";

const meta: Meta = {
  title: "MUI/Select",
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj;

export const StandardFields: Story = {
  render: () => <StandardSelectShowcase />,
};
