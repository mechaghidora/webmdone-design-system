import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { Link } from "@/components/link";

const FOOTER_STACK_BREAKPOINT = "996px";

const certificationLogos = [
  {
    src: "/ncqa-health-information-product.webp",
    alt: "NCQA Health Information Product certification",
  },
  {
    src: "/ncqa-whp-certification.webp",
    alt: "NCQA Wellness and Health Product certification",
  },
  {
    src: "/URAC_2028_Acreditation_Seal_Web.webp",
    alt: "URAC accreditation seal",
  },
  {
    src: "/soc4so.webp",
    alt: "SOC certification",
  },
] as const;

const captionSx = {
  fontSize: "var(--type-caption-size)",
  fontFamily: "var(--font-family)",
  color: "var(--color-text-secondary)",
  lineHeight: 1.5,
} as const;

export type FooterProps = {
  policiesHref?: string;
  contactHref?: string;
  companyHref?: string;
  additionalInfoHref?: string;
  logoSrc?: string;
  logoAlt?: string;
};

function FooterLinkOrText({
  href,
  children,
}: {
  href?: string;
  children: React.ReactNode;
}) {
  if (href) {
    return (
      <Link href={href} underline="hover" sx={captionSx}>
        {children}
      </Link>
    );
  }
  return (
    <Typography component="span" sx={captionSx}>
      {children}
    </Typography>
  );
}

function CertificationLogos() {
  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{
        alignItems: "flex-start",
        flexShrink: 0,
      }}
    >
      {certificationLogos.map(({ src, alt }) => (
        <Box
          key={src}
          component="img"
          src={src}
          alt={alt}
          sx={{
            height: 52,
            width: "auto",
            objectFit: "contain",
            display: "block",
          }}
        />
      ))}
    </Stack>
  );
}

export function Footer({
  policiesHref,
  contactHref,
  companyHref,
  additionalInfoHref,
  logoSrc = "/WebMD-ONE-footer-logo.svg",
  logoAlt = "WebMD ONE",
}: FooterProps) {
  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        bgcolor: "var(--color-surface)",
        borderTop: "1px solid var(--color-border)",
      }}
    >
      <Box
        sx={{
          maxWidth: "var(--page-max-width)",
          mx: "auto",
          px: {
            xs: "var(--space-section-padding-mobile)",
            md: "var(--space-section-padding-desktop)",
          },
          py: "var(--space-section-padding-desktop)",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: "var(--space-component-gap)",
          [`@media (max-width: ${FOOTER_STACK_BREAKPOINT})`]: {
            flexDirection: "column",
            alignItems: "flex-start",
          },
        }}
      >
        <Stack spacing={1} sx={{ minWidth: 0 }}>
          <Stack
            direction="row"
            spacing={1.5}
            sx={{ alignItems: "center", flexWrap: "wrap" }}
          >
            <Box
              component="img"
              src={logoSrc}
              alt={logoAlt}
              sx={{ height: 24, width: "auto", display: "block" }}
            />
            <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
              <FooterLinkOrText href={policiesHref}>Policies</FooterLinkOrText>
              <Typography component="span" sx={captionSx} aria-hidden>
                |
              </Typography>
              <FooterLinkOrText href={contactHref}>Contact Us</FooterLinkOrText>
            </Stack>
          </Stack>

          <Typography sx={captionSx}>
            © 2026&nbsp;&nbsp;{" "}
            {companyHref ? (
              <Link href={companyHref} underline="hover" sx={captionSx}>
                WebMD Health Services Group, Inc.
              </Link>
            ) : (
              "WebMD Health Services Group, Inc."
            )}
            &nbsp; All rights reserved.
          </Typography>

          <Typography sx={captionSx}>
            WebMD does not provide medical advice, diagnosis or treatment.
          </Typography>

          <FooterLinkOrText href={additionalInfoHref}>
            See additional information.
          </FooterLinkOrText>
        </Stack>

        <CertificationLogos />
      </Box>
    </Box>
  );
}
