import type * as React from "react";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    brandBarTitle: React.CSSProperties;
    stat: React.CSSProperties;
    subtitleEmphasis: React.CSSProperties;
    drawerSection: React.CSSProperties;
    sectionHeading: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    brandBarTitle?: React.CSSProperties;
    stat?: React.CSSProperties;
    subtitleEmphasis?: React.CSSProperties;
    drawerSection?: React.CSSProperties;
    sectionHeading?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    brandBarTitle: true;
    stat: true;
    subtitleEmphasis: true;
    drawerSection: true;
    sectionHeading: true;
  }
}

export {};
