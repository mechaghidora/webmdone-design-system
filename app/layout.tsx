import "@fontsource/lato/300.css";
import "@fontsource/lato/400.css";
import "@fontsource/lato/700.css";

import { AppShell } from "@/components/layout";
import { Providers } from "@/app/providers";

import "@/styles/tokens.css";

export const metadata = {
  title: "WebMD Project Template",
  description: "Slim starter with AppBar + Footer shell and design tokens",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        <Providers>
          <AppShell>{children}</AppShell>
        </Providers>
      </body>
    </html>
  );
}
