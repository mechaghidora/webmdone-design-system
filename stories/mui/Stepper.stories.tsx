import type { Meta, StoryObj } from "@storybook/react";

import { AlternativeLabelStepper } from "@/components/stepper";

const meta: Meta = {
  title: "MUI/Stepper",
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj;

export const AlternativeLabel: Story = {
  render: () => <AlternativeLabelStepper />,
};
