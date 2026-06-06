import type { Meta, StoryObj } from "@storybook/react";

import { SkeletonShapesShowcase } from "@/components/skeleton";

const meta: Meta = {
  title: "MUI/Skeleton",
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj;

export const Shapes: Story = {
  render: () => <SkeletonShapesShowcase />,
};
