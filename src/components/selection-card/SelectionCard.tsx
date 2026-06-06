"use client";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import NextLink from "next/link";

const IMAGE_WIDTH_PX = 96;

export type SelectionCardProps = {
  title: string;
  body?: string;
  href: string;
  imageSrc?: string;
  imageAlt?: string;
  imageLabel?: string;
  selected?: boolean;
  onSelect?: () => void;
};

function getLinkComponent(href: string) {
  return href.startsWith("tel:") || href.startsWith("mailto:") ? "a" : NextLink;
}

export function SelectionCard({
  title,
  body,
  href,
  imageSrc,
  imageAlt = "",
  imageLabel = "Illustration",
  selected = false,
  onSelect,
}: SelectionCardProps) {
  const LinkComponent = getLinkComponent(href);

  return (
    <Card
      variant="outlined"
      elevation={0}
      sx={{
        width: "100%",
        borderColor: selected ? "var(--color-action-primary)" : "var(--color-border)",
        bgcolor: "var(--color-surface)",
      }}
    >
      <CardActionArea
        component={LinkComponent}
        href={href}
        onClick={onSelect}
        sx={{ display: "flex", alignItems: "stretch", justifyContent: "flex-start" }}
      >
        <CardContent sx={{ flex: 1, minWidth: 0, py: "var(--space-card-padding)" }}>
          <Typography variant="h6" component="span">
            {title}
          </Typography>
          {body ? (
            <Typography
              variant="body2"
              component="p"
              sx={{ mt: "var(--space-content-gap)", color: "var(--color-text-secondary)" }}
            >
              {body}
            </Typography>
          ) : null}
        </CardContent>
        <Box
          aria-hidden={imageSrc ? undefined : true}
          sx={{
            width: IMAGE_WIDTH_PX,
            flexShrink: 0,
            alignSelf: "stretch",
            overflow: "hidden",
            bgcolor: imageSrc
              ? "var(--color-surface)"
              : "color-mix(in srgb, var(--color-text-secondary) 12%, var(--color-surface))",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {imageSrc ? (
            <Box
              component="img"
              src={imageSrc}
              alt={imageAlt}
              sx={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          ) : (
            <Typography variant="caption" sx={{ color: "var(--color-text-secondary)", px: 1, textAlign: "center" }}>
              {imageLabel}
            </Typography>
          )}
        </Box>
      </CardActionArea>
    </Card>
  );
}

type SelectionCardGroupProps = {
  children: React.ReactNode;
};

export function SelectionCardGroup({ children }: SelectionCardGroupProps) {
  return (
    <Stack sx={{ gap: "var(--space-component-gap)", width: "100%" }}>
      {children}
    </Stack>
  );
}
