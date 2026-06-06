import type { Meta, StoryObj } from "@storybook/react";

import { coachingImages } from "@/src/assets/coaching-images";
import { HeroSection } from "@/components/layout";
import { Typography } from "@/components/typography";

const meta: Meta<typeof HeroSection> = {
  title: "Layout/HeroSection",
  component: HeroSection,
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<typeof HeroSection>;

export const WithBackgroundIllustration: Story = {
  name: "With background illustration",
  render: () => (
    <HeroSection
      desktopIllustrationSrc={coachingImages.heroDesktop}
      mobileIllustrationSrc={coachingImages.heroMobile}
    >
      <HeroSection.Content>
        <Typography variant="h1" component="h1">
          Welcome to Coaching!
        </Typography>
        <Typography variant="body1" component="p" sx={{ mt: "var(--space-content-gap)" }}>
          Desktop: illustration is a shell background. Mobile: image stacks above this text.
        </Typography>
      </HeroSection.Content>
    </HeroSection>
  ),
};

export const TextOnly: Story = {
  render: () => (
    <HeroSection>
      <HeroSection.Content>
        <Typography variant="h1" component="h1">
          Hero without illustration
        </Typography>
      </HeroSection.Content>
    </HeroSection>
  ),
};
