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
  "福岡で6年続くミルクティーとタピオカのテイクアウトスタンド。日本茶の香り、甘さ控えめ、駅近で受け取りやすい一杯を。";

export const metadata: Metadata = {
  metadataBase: new URL("https://nanacha.jp"),
  title: {
    default: `${siteName} | 福岡のミルクティー・タピオカ専門店`,
    template: `%s | ${siteName}`,
  },
  description,
  keywords: [
    "nanacha",
    "福岡 ミルクティー",
    "福岡 タピオカ",
    "福岡 テイクアウト",
    "福岡 奶茶",
    "福岡 バブルティー",
    "福岡 カフェ",
    "ミルクティー 専門店",
    "タピオカ テイクアウト",
    "黒糖タピオカ",
    "抹茶ミルク",
    "ほうじ茶ミルク",
    "日本茶 ミルクティー",
  ],
  openGraph: {
    title: `${siteName} | 福岡のミルクティー・タピオカ専門店`,
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
