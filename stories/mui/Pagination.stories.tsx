import type { Meta, StoryObj } from "@storybook/react";

import { BackNextPagination } from "@/components/mui-demos";
import { NumberedPaginationDemo, PaginationDemo } from "@/components/pagination";

const meta: Meta = {
  title: "MUI/Pagination",
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj;

export const BackNext: Story = {
  render: () => <BackNextPagination page={1} pageCount={5} />,
};

export const PageCounter: Story = {
  name: "Page counter",
  render: () => <PaginationDemo />,
};

export const PageNumbers: Story = {
  name: "Page numbers",
  render: () => <NumberedPaginationDemo />,
};
