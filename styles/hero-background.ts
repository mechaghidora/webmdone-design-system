import type { SxProps, Theme } from "@mui/material/styles";

/** Safe CSS url() for asset paths that may contain spaces or quotes. */
export function cssBackgroundUrl(src: string): string {
  return `url("${src.replace(/"/g, "%22")}")`;
}

/** Desktop hero shell background illustration (md+). */
export function heroDesktopBackgroundSx(src: string): SxProps<Theme> {
  return {
    backgroundImage: { md: cssBackgroundUrl(src) },
    backgroundRepeat: "no-repeat",
    backgroundPosition: { md: "right center" },
    backgroundSize: { md: "contain" },
    minHeight: { md: 321 },
  };
}
