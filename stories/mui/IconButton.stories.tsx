import type { Meta, StoryObj } from "@storybook/react";

import { IconButtonVariantsShowcase } from "@/components/icon-button";

const meta: Meta = {
  title: "MUI/Icon button",
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj;

export const Variants: Story = {
  render: () => <IconButtonVariantsShowcase />,
};
