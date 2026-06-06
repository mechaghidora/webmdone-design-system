import type { Meta, StoryObj } from "@storybook/react";

import { AccordionGroup } from "@/components/accordion";

const meta: Meta = {
  title: "MUI/Accordion",
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => <AccordionGroup />,
};
