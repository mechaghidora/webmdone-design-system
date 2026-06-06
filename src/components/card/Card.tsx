import Box from "@mui/material/Box";
import MuiButton from "@mui/material/Button";
import MuiCard from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import Link from "next/link";

const VERTICAL_IMAGE_WIDTH_PX = 154;

const cardSurfaceSx = {
  bgcolor: "var(--color-surface)",
  boxShadow: "var(--shadow-card)",
  border: "none",
} as const;

export type CardProps = {
  title?: string;
  body?: string;
  showFooter?: boolean;
  secondaryLabel?: string;
  primaryLabel?: string;
  /** Single primary text action in footer (alias for primaryLabel when showFooter). */
  ctaLabel?: string;
  emphasizedTitle?: boolean;
  bodySecondary?: boolean;
  /** Right-edge image column, full card height, no padding on image sides. */
  withVerticalImage?: boolean;
  imageLabel?: string;
  imageSrc?: string;
  imageAlt?: string;
  /** Fill grid column width (drops fixed maxWidth). */
  fullWidth?: boolean;
  /** When set, primary action navigates via Next.js Link. */
  primaryHref?: string;
};

function CardTextColumn({
  title,
  body,
  showFooter,
  secondaryLabel,
  primaryLabel,
  ctaLabel,
  emphasizedTitle,
  bodySecondary,
  fillHeight,
  primaryHref,
}: Required<Pick<CardProps, "title" | "body" | "showFooter" | "primaryLabel">> &
  Pick<
    CardProps,
    "secondaryLabel" | "ctaLabel" | "emphasizedTitle" | "bodySecondary" | "primaryHref"
  > & { fillHeight?: boolean }) {
  const titleVariant = emphasizedTitle ? "subtitleEmphasis" : "h6";
  const bodyVariant = bodySecondary ? "body1" : "body2";

  return (
    <>
      <CardHeader
        sx={{ pb: 0 }}
        title={
          <Typography variant={titleVariant} component="span">
            {title}
          </Typography>
        }
      />
      <CardContent
        sx={{
          pt: "var(--space-content-gap)",
          ...(fillHeight
            ? {
                flex: 1,
                display: "flex",
                flexDirection: "column",
                "&:last-child": { pb: 2 },
              }
            : {}),
        }}
      >
        <Typography
          variant={bodyVariant}
          sx={bodySecondary ? { color: "var(--color-text-secondary)" } : undefined}
        >
          {body}
        </Typography>
      </CardContent>
      {showFooter || ctaLabel ? (
        <CardActions
          sx={{
            justifyContent: "flex-end",
            gap: 1,
            px: 2,
            pb: 2,
            ...(fillHeight ? { mt: "auto" } : {}),
          }}
        >
          {secondaryLabel ? (
            <MuiButton variant="text" color="secondary">
              {secondaryLabel}
            </MuiButton>
          ) : null}
          <MuiButton
            variant="text"
            color="primary"
            {...(primaryHref ? { component: Link, href: primaryHref } : {})}
          >
            {ctaLabel ?? primaryLabel}
          </MuiButton>
        </CardActions>
      ) : null}
    </>
  );
}

function CardVerticalImage({ label, src, alt }: { label: string; src?: string; alt?: string }) {
  return (
    <Box
      aria-hidden={src ? undefined : true}
      sx={{
        width: VERTICAL_IMAGE_WIDTH_PX,
        flexShrink: 0,
        alignSelf: "stretch",
        overflow: "hidden",
        bgcolor: src
          ? "var(--color-surface)"
          : "color-mix(in srgb, var(--color-text-secondary) 12%, var(--color-surface))",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {src ? (
        <Box
          component="img"
          src={src}
          alt={alt ?? ""}
          aria-hidden={alt ? undefined : true}
          sx={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      ) : (
        <Typography variant="caption" sx={{ color: "var(--color-text-secondary)", textAlign: "center" }}>
          {label}
        </Typography>
      )}
    </Box>
  );
}

export function Card({
  title = "Card header",
  body = "This is body2 content inside the card. It uses the body2 typography variant from the shared theme.",
  showFooter = true,
  secondaryLabel,
  primaryLabel = "Primary",
  withVerticalImage = false,
  imageLabel = "Placeholder image",
  imageSrc,
  imageAlt,
  ctaLabel,
  emphasizedTitle = false,
  bodySecondary = false,
  fullWidth = false,
  primaryHref,
}: CardProps) {
  if (withVerticalImage) {
    return (
      <MuiCard
        elevation={0}
        sx={{
          ...cardSurfaceSx,
          width: fullWidth ? "100%" : undefined,
          maxWidth: fullWidth ? "none" : 400 + VERTICAL_IMAGE_WIDTH_PX,
          display: "flex",
          flexDirection: "row",
          alignItems: "stretch",
          overflow: "hidden",
          p: 0,
        }}
      >
        <Box sx={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column" }}>
          <CardTextColumn
            title={title}
            body={body}
            showFooter={showFooter || !!ctaLabel}
            secondaryLabel={secondaryLabel}
            primaryLabel={primaryLabel}
            ctaLabel={ctaLabel}
            emphasizedTitle={emphasizedTitle}
            bodySecondary={bodySecondary}
            fillHeight
            primaryHref={primaryHref}
          />
        </Box>
        <CardVerticalImage label={imageLabel} src={imageSrc} alt={imageAlt} />
      </MuiCard>
    );
  }

  return (
    <MuiCard
      elevation={0}
      sx={{ ...cardSurfaceSx, maxWidth: fullWidth ? "none" : 400, width: fullWidth ? "100%" : undefined }}
    >
      <CardTextColumn
        title={title}
        body={body}
        showFooter={showFooter || !!ctaLabel}
        secondaryLabel={secondaryLabel}
        primaryLabel={primaryLabel}
        ctaLabel={ctaLabel}
        emphasizedTitle={emphasizedTitle}
        bodySecondary={bodySecondary}
        primaryHref={primaryHref}
      />
    </MuiCard>
  );
}
