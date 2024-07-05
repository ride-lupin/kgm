import Provider from "@helper/provider";

import type { Metadata } from "next";

import { bodyStyle } from "./style.css";

import "@assets/styles/reset.css";

export const metadata: Metadata = {
  title: "KGM",
  description: "KGM",
  icons: {
    icon: "/kgm.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Provider>
        <body className={bodyStyle}>
          <main>{children}</main>
        </body>
      </Provider>
    </html>
  );
}
