

import { ClerkProvider } from "@clerk/nextjs";

import { Separator } from "@/components/ui/separator";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { ContainerLayout } from "@/components/layout/ContainerLayout";
import { DataLayout } from "@/components/layout/DataLayout";

import "../style/globals.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Header />
            <Separator className="mb-6" />
            <ContainerLayout>
              <DataLayout>{children}</DataLayout>
            </ContainerLayout>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
