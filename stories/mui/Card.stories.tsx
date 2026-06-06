import Stack from "@mui/material/Stack";
import type { Meta, StoryObj } from "@storybook/react";

import { DemoCard } from "@/components/mui-demos";

const meta: Meta = {
  title: "MUI/Card",
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <DemoCard
      title="Card title"
      body="Supporting body copy uses body2 by default. Tokens control surface color and shadow."
      showFooter
      primaryLabel="Primary action"
    />
  ),
};

export const WithVerticalImage: Story = {
  render: () => (
    <Stack sx={{ maxWidth: 480 }}>
      <DemoCard
        title="With image"
        body="Image column on the right edge."
        withVerticalImage
        imageSrc="/kevin-mueller-s3HuF4LDeOc-unsplash.jpg"
        imageAlt="Person in a wellness setting"
        showFooter
        ctaLabel="Learn more"
      />
    </Stack>
  ),
};
