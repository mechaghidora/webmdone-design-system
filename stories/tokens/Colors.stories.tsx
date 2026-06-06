import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import type { Meta, StoryObj } from "@storybook/react";

import { Typography } from "@/components/typography";

function ColorSwatch({ token, label }: { token: string; label: string }) {
  return (
    <Box>
      <Box
        sx={{
          height: 72,
          borderRadius: 1,
          border: "1px solid",
          borderColor: "divider",
          bgcolor: `var(${token})`,
        }}
      />
      <Typography variant="caption" sx={{ display: "block", mt: 0.5 }}>
        {label}
      </Typography>
      <Typography variant="caption" color="text.secondary" component="code" sx={{ fontSize: 11 }}>
        {token}
      </Typography>
    </Box>
  );
}

function ColorGrid({ colors }: { colors: { token: string; label: string }[] }) {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
        gap: 2,
      }}
    >
      {colors.map((c) => (
        <ColorSwatch key={c.token} {...c} />
      ))}
    </Box>
  );
}

const coreColors = [
  { token: "--color-background", label: "Background" },
  { token: "--color-surface", label: "Surface" },
  { token: "--color-text-primary", label: "Text primary" },
  { token: "--color-text-secondary", label: "Text secondary" },
  { token: "--color-border", label: "Border" },
  { token: "--color-action-primary", label: "Action primary" },
  { token: "--color-success", label: "Success" },
  { token: "--color-warning", label: "Warning" },
  { token: "--color-error", label: "Error" },
  { token: "--color-info", label: "Info" },
];

const healthColors = [
  { token: "--color-default-health", label: "Default health" },
  { token: "--color-exercise", label: "Exercise" },
  { token: "--color-stress", label: "Stress" },
  { token: "--color-nutrition", label: "Nutrition" },
  { token: "--color-sleep", label: "Sleep" },
  { token: "--color-weight", label: "Weight" },
  { token: "--color-hypertension", label: "Hypertension" },
  { token: "--color-cholesterol", label: "Cholesterol" },
  { token: "--color-diabetes", label: "Diabetes" },
  { token: "--color-heart-health", label: "Heart health" },
];

const meta: Meta = {
  title: "Tokens/Colors",
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj;

export const CoreSemantic: Story = {
  name: "Core semantic",
  render: () => (
    <Stack spacing={2}>
      <Typography variant="body2" color="text.secondary">
        Semantic color tokens from <code>styles/tokens.css</code>.
      </Typography>
      <ColorGrid colors={coreColors} />
    </Stack>
  ),
};

export const HealthCategories: Story = {
  name: "Health categories",
  render: () => (
    <Stack spacing={2}>
      <Typography variant="body2" color="text.secondary">
        Health topic palette tokens for category UI.
      </Typography>
      <ColorGrid colors={healthColors} />
    </Stack>
  ),
};
