import type { Meta, StoryObj } from "@storybook/react";

import { LinkPrimaryUnderlineShowcase } from "@/components/link";

const meta: Meta = {
  title: "MUI/Link",
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj;

export const PrimaryUnderline: Story = {
  render: () => <LinkPrimaryUnderlineShowcase />,
};
