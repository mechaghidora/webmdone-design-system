import type { Meta, StoryObj } from "@storybook/react";

import { BackNextPagination } from "@/components/mui-demos";
import { PaginationDemo } from "@/components/pagination";

const meta: Meta = {
  title: "MUI/Pagination",
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj;

export const BackNext: Story = {
  render: () => <BackNextPagination />,
};

export const Demo: Story = {
  render: () => <PaginationDemo />,
};
