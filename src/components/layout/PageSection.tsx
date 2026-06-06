import Box, { type BoxProps } from "@mui/material/Box";

export function PageSection({ sx, children, ...props }: BoxProps) {
  return (
    <Box
      component="section"
      sx={{
        p: {
          xs: "var(--space-section-padding-mobile)",
          md: "var(--space-section-padding-desktop)",
        },
        ...sx,
      }}
      {...props}
    >
      {children}
    </Box>
  );
}
