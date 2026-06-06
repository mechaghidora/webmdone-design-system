import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import type { Meta, StoryObj } from "@storybook/react";

import { PageSection } from "@/components/layout";
import { Typography } from "@/components/typography";

const baseSpacing = [
  { token: "--space-1", label: "1 (8px)" },
  { token: "--space-2", label: "2 (16px)" },
  { token: "--space-3", label: "3 (24px)" },
  { token: "--space-4", label: "4 (32px)" },
  { token: "--space-5", label: "5 (40px)" },
];

const semanticSpacing = [
  { token: "--space-section-gap", label: "Section gap" },
  { token: "--space-section-padding-desktop", label: "Section padding desktop" },
  { token: "--space-section-padding-mobile", label: "Section padding mobile" },
  { token: "--space-content-gap", label: "Content gap" },
  { token: "--space-component-gap", label: "Component gap" },
  { token: "--space-card-padding", label: "Card padding" },
];

function SpacingBar({ token, label }: { token: string; label: string }) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
      <Typography variant="caption" sx={{ width: 200 }}>
        {label}
      </Typography>
      <Box sx={{ height: 24, width: `var(${token})`, bgcolor: "var(--color-action-primary)", borderRadius: 0.5 }} />
      <Typography variant="caption" component="code" color="text.secondary">
        {token}
      </Typography>
    </Box>
  );
}

const meta: Meta = {
  title: "Tokens/Spacing",
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj;

export const BaseScale: Story = {
  name: "Base scale",
  render: () => (
    <Stack spacing={2}>
      <Typography variant="body2" color="text.secondary">
        Base spacing tokens from <code>styles/tokens.css</code> (width = token value).
      </Typography>
      <Stack spacing={1}>
        {baseSpacing.map((s) => (
          <SpacingBar key={s.token} {...s} />
        ))}
      </Stack>
    </Stack>
  ),
};

export const SemanticSpacing: Story = {
  name: "Semantic spacing",
  render: () => (
    <Stack spacing={2}>
      <Typography variant="body2" color="text.secondary">
        Semantic spacing tokens for recurring layout patterns.
      </Typography>
      <Stack spacing={1}>
        {semanticSpacing.map((s) => (
          <SpacingBar key={s.token} {...s} />
        ))}
      </Stack>
    </Stack>
  ),
};

export const PageSectionPadding: Story = {
  name: "PageSection padding",
  render: () => (
    <PageSection sx={{ border: "1px dashed var(--color-border)" }}>
      <Typography variant="body2">
        <code>PageSection</code> uses <code>--space-section-padding-mobile</code> /{" "}
        <code>--space-section-padding-desktop</code> for responsive padding.
      </Typography>
    </PageSection>
  ),
};
