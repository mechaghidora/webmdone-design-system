import { createTheme } from "@mui/material/styles";

/** MUI palette requires parseable literals (not CSS variables). Values mirror styles/tokens.css. */
const palette = {
  primary: { main: "#3557ff" },
  secondary: { main: "#52616b" },
  text: { primary: "#1f2933", secondary: "#52616b" },
  background: { default: "#fafafa", paper: "#ffffff" },
  divider: "rgba(0, 0, 0, 0.12)",
  success: { main: "#1a6500" },
  warning: { main: "#ffbf3f" },
  error: { main: "#b00020" },
  info: { main: "#0288d1" },
} as const;

const sans = "var(--font-family)";

const typeFromTokens = {
  fontFamily: sans,
  h1: {
    fontSize: "var(--type-h1-size)",
    fontWeight: "var(--type-h1-weight)",
    lineHeight: 1.2,
  },
  h2: {
    fontSize: "var(--type-h2-size)",
    fontWeight: 400,
    lineHeight: 1.2,
  },
  h3: {
    fontSize: "var(--type-h3-size)",
    fontWeight: 400,
    lineHeight: 1.2,
  },
  h4: {
    fontSize: "var(--type-h4-size)",
    fontWeight: 400,
    lineHeight: 1.3,
  },
  h5: {
    fontSize: "var(--type-h5-size)",
    fontWeight: 400,
    lineHeight: 1.4,
  },
  h6: {
    fontSize: "var(--type-h6-size)",
    fontWeight: 400,
    lineHeight: 1.5,
  },
  subtitle1: {
    fontSize: "var(--type-body1-size)",
    fontWeight: 400,
    lineHeight: 1.5,
  },
  subtitle2: {
    fontSize: "var(--type-body2-size)",
    fontWeight: 400,
    lineHeight: 1.57,
  },
  subtitleEmphasis: {
    fontSize: "var(--type-body1-size)",
    fontWeight: 700,
    lineHeight: 1.5,
  },
  body1: {
    fontSize: "var(--type-body1-size)",
    fontWeight: 400,
    lineHeight: 1.5,
  },
  body2: {
    fontSize: "var(--type-body2-size)",
    fontWeight: 400,
    lineHeight: 1.43,
  },
  button: {
    fontFamily: sans,
    fontSize: "var(--type-button-size)",
    fontWeight: "var(--type-button-weight)",
    textTransform: "uppercase",
    lineHeight: 1.75,
  },
  caption: {
    fontSize: "var(--type-caption-size)",
    fontWeight: 400,
    lineHeight: 1.66,
  },
  overline: {
    fontSize: "var(--type-overline-size)",
    fontWeight: 400,
    textTransform: "uppercase",
    lineHeight: 2,
    letterSpacing: "0.08em",
  },
  brandBarTitle: {
    fontFamily: sans,
    fontSize: "var(--type-body1-size)",
    fontWeight: 400,
    lineHeight: 1.5,
  },
  drawerSection: {
    fontFamily: sans,
    fontSize: "var(--type-body2-size)",
    fontWeight: 400,
    lineHeight: 1.57,
  },
  sectionHeading: {
    fontFamily: sans,
    fontSize: "var(--type-h6-size)",
    fontWeight: 700,
    lineHeight: 1.5,
  },
  stat: {
    fontFamily: sans,
    fontSize: "var(--type-h4-size)",
    fontWeight: 400,
    lineHeight: 1.25,
  },
} as const;

/**
 * Light-only MUI theme. Typography sizes/weights pull from styles/tokens.css where defined.
 */
export function createAppTheme() {
  return createTheme({
    palette: {
      mode: "light",
      ...palette,
    },
    typography: typeFromTokens,
    shape: {
      borderRadius: 4,
    },
    components: {
      MuiTabs: {
        styleOverrides: {
          root: {
            width: "100%",
            maxWidth: "100%",
            backgroundColor: "var(--color-surface)",
            borderBottom: "1px solid var(--color-border)",
            paddingLeft: 0,
            paddingRight: 0,
          },
          scroller: {
            width: "100%",
          },
          list: {
            width: "100%",
          },
        },
      },
      MuiTab: {
        styleOverrides: {
          root: ({ theme }) => ({
            ...theme.typography.body2,
            textTransform: "none",
          }),
        },
      },
      MuiListItemButton: {
        styleOverrides: {
          root: {
            "&.Mui-selected .MuiListItemText-primary": {
              fontWeight: 700,
            },
          },
        },
      },
      MuiAvatar: {
        styleOverrides: {
          root: {
            fontSize: "var(--type-body2-size)",
            fontWeight: 700,
          },
        },
      },
    },
  });
}

export const muiTheme = createAppTheme();
