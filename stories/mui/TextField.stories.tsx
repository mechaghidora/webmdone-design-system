import type { Meta, StoryObj } from "@storybook/react";

import { StandardFieldsShowcase } from "@/components/text-field";

const meta: Meta = {
  title: "MUI/Input",
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj;

export const StandardFields: Story = {
  render: () => <StandardFieldsShowcase />,
};
