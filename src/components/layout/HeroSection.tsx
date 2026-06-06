import Box, { type BoxProps } from "@mui/material/Box";

import { heroDesktopBackgroundSx } from "../../../styles/hero-background";

const sectionPadding = {
  xs: "var(--space-section-padding-mobile)",
  md: "var(--space-section-padding-desktop)",
} as const;

type HeroSectionRootProps = BoxProps & {
  desktopIllustrationSrc?: string;
  mobileIllustrationSrc?: string;
};

function HeroSectionRoot({
  sx,
  children,
  desktopIllustrationSrc,
  mobileIllustrationSrc,
  ...props
}: HeroSectionRootProps) {
  return (
    <Box
      component="section"
      sx={[
        {
          position: "relative",
          overflow: "hidden",
          bgcolor: "var(--color-surface)",
        },
        desktopIllustrationSrc ? heroDesktopBackgroundSx(desktopIllustrationSrc) : null,
        ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
      ]}
      {...props}
    >
      {mobileIllustrationSrc ? (
        <HeroSectionMobileIllustration src={mobileIllustrationSrc} />
      ) : null}
      {children}
    </Box>
  );
}

function HeroSectionContent({ sx, children, ...props }: BoxProps) {
  return (
    <Box
      sx={{
        position: "relative",
        zIndex: 1,
        p: sectionPadding,
        ...sx,
      }}
      {...props}
    >
      {children}
    </Box>
  );
}

type HeroSectionMobileIllustrationProps = BoxProps & {
  src: string;
  alt?: string;
};

function HeroSectionMobileIllustration({
  src,
  alt = "",
  sx,
  ...props
}: HeroSectionMobileIllustrationProps) {
  return (
    <Box
      sx={{
        display: { xs: "block", md: "none" },
        width: "100%",
        ...sx,
      }}
      {...props}
    >
      <Box
        component="img"
        src={src}
        alt={alt}
        aria-hidden={alt === "" ? true : undefined}
        sx={{
          width: "100%",
          maxHeight: 300,
          height: "auto",
          display: "block",
          objectFit: "contain",
        }}
      />
    </Box>
  );
}

export const HeroSection = Object.assign(HeroSectionRoot, {
  Content: HeroSectionContent,
  MobileIllustration: HeroSectionMobileIllustration,
});
