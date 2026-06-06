import Box from "@mui/material/Box";
import type { Meta, StoryObj } from "@storybook/react";

import { TabsNav } from "@/components/tabs";
import { HeroSection, PageSection } from "@/components/layout";
import { Typography } from "@/components/typography";

const meta: Meta = {
  title: "MUI/Tabs",
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => <TabsNav labels={["Account settings", "Billing history", "Notifications"]} />,
};

export const ProductPagePattern: Story = {
  name: "Product page pattern",
  render: () => (
    <TabsNav labels={["Coaching", "Classes", "Activity"]} aria-label="Product tabs example">
      <>
        <HeroSection>
          <HeroSection.Content>
            <Typography variant="h1" component="h1">
              Welcome to Coaching!
            </Typography>
            <Typography variant="body1" component="p" sx={{ mt: "var(--space-content-gap)" }}>
              Tab bar is full-bleed; hero copy uses section padding via HeroSection.Content.
            </Typography>
          </HeroSection.Content>
        </HeroSection>
        <PageSection>
          <Typography variant="body2">
            PageSection content is inset with the same section padding tokens.
          </Typography>
        </PageSection>
      </>
      <Box />
      <Box />
    </TabsNav>
  ),
};
