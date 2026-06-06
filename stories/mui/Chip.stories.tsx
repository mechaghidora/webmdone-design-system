import type { Meta, StoryObj } from "@storybook/react";

import { ChipActiveInactiveShowcase, ToggleChip } from "@/components/chip";

const meta: Meta = {
  title: "MUI/Chip",
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj;

export const ActiveInactive: Story = { render: () => <ChipActiveInactiveShowcase /> };
export const Toggle: Story = { render: () => <ToggleChip /> };
