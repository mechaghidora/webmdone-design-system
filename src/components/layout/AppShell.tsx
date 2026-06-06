import Box from "@mui/material/Box";

import { AppBar } from "@/components/app-bar";
import { Footer } from "@/components/footer";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <AppBar position="sticky" />
      <Box
        component="main"
        sx={{
          flex: 1,
          width: "100%",
          maxWidth: "var(--page-max-width)",
          mx: "auto",
        }}
      >
        {children}
      </Box>
      <Footer />
    </Box>
  );
}
