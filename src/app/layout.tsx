import type { Metadata } from "next";

import "./globals.css";

import Menu from "@/components/Menu";

export const metadata: Metadata = {
  title: "Widget Météo",
  description: "Application de widget météo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <Menu />
        <main className="h-screen p-6">
          <h1 className="text-3xl text-center text-white">Widget Météo</h1>
          <div>{children}</div>
        </main>
      </body>
    </html>
  );
}
