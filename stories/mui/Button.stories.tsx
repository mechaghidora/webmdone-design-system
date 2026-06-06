import type { Meta, StoryObj } from "@storybook/react";

import {
  ButtonAllVariantsOverviewShowcase,
  ButtonElevatedContainedShowcase,
  ButtonOutlineShowcase,
  ButtonTextShowcase,
  ButtonWithEndIconShowcase,
  ButtonWithStartIconShowcase,
} from "@/components/button";

const meta: Meta = {
  title: "MUI/Button",
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj;

export const Text: Story = { render: () => <ButtonTextShowcase /> };
export const Outlined: Story = { render: () => <ButtonOutlineShowcase /> };
export const Contained: Story = { render: () => <ButtonElevatedContainedShowcase /> };
export const WithStartIcon: Story = { render: () => <ButtonWithStartIconShowcase /> };
export const WithEndIcon: Story = { render: () => <ButtonWithEndIconShowcase /> };
export const AllVariants: Story = { render: () => <ButtonAllVariantsOverviewShowcase /> };
