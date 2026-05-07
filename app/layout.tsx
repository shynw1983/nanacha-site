import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-jp",
});

const siteName = "nanacha";
const description =
  "福岡で6年続く、日本茶とミルクティーのテイクアウトスタンド。駅近で、日常に寄り添う一杯を。";

export const metadata: Metadata = {
  metadataBase: new URL("https://nanacha.jp"),
  title: {
    default: `${siteName} | 福岡のミルクティースタンド`,
    template: `%s | ${siteName}`,
  },
  description,
  keywords: [
    "nanacha",
    "福岡 ミルクティー",
    "福岡 タピオカ",
    "福岡 テイクアウト",
    "黒糖タピオカ",
    "日本茶 ミルクティー",
  ],
  openGraph: {
    title: `${siteName} | 福岡のミルクティースタンド`,
    description,
    url: "https://nanacha.jp",
    siteName,
    locale: "ja_JP",
    type: "website",
  },
  alternates: {
    canonical: "/",
    languages: {
      ja: "/",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${inter.variable} ${notoSansJp.variable}`}>
        {children}
      </body>
    </html>
  );
}
