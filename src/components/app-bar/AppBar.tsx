import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import MuiAppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";

export type AppBarProps = {
  logoSrc?: string;
  logoAlt?: string;
  position?: "sticky" | "static";
  /** When set, wires the menu button click (e.g. open nav drawer on mobile). */
  onMenuClick?: () => void;
};

export function AppBar({
  logoSrc = "/better-yourself-logo.png",
  logoAlt = "Better Yourself",
  position = "static",
  onMenuClick,
}: AppBarProps) {
  return (
    <MuiAppBar
      position={position}
      elevation={0}
      sx={{
        bgcolor: "var(--color-surface)",
        color: "var(--color-text-primary)",
        backgroundImage: "none",
        borderBottom: "1px solid var(--color-border)",
      }}
    >
      <Toolbar
        sx={{
          position: "relative",
          minHeight: 56,
          justifyContent: "flex-end",
        }}
      >
        <Box
          component="img"
          src={logoSrc}
          alt={logoAlt}
          sx={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            maxHeight: 48,
            width: "auto",
            display: { xs: "none", sm: "block" },
            pointerEvents: "none",
          }}
        />
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <IconButton color="inherit" aria-label="mail">
            <MailOutlinedIcon />
          </IconButton>
          <IconButton
            color="inherit"
            aria-label={onMenuClick ? "Open navigation menu" : "menu"}
            onClick={onMenuClick}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </MuiAppBar>
  );
}
