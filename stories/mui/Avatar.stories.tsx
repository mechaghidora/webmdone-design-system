import type { Meta, StoryObj } from "@storybook/react";

import {
  AvatarAllVariantsShowcase,
  AvatarImageShowcase,
  AvatarTextShowcase,
} from "@/components/avatar";

const meta: Meta = {
  title: "MUI/Avatar",
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj;

export const Image: Story = { render: () => <AvatarImageShowcase /> };
export const Text: Story = { render: () => <AvatarTextShowcase /> };
export const AllVariants: Story = { render: () => <AvatarAllVariantsShowcase /> };
