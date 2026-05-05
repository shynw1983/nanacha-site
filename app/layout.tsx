import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import Link from "next/link";
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

const navItems = [
  { href: "/menu", label: "メニュー" },
  { href: "/shop", label: "店舗情報" },
  { href: "/seasonal", label: "季節限定" },
  { href: "/about", label: "nanachaについて" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${inter.variable} ${notoSansJp.variable}`}>
        <header className="site-header">
          <Link className="brand" href="/" aria-label="nanacha ホーム">
            nanacha
          </Link>
          <nav className="nav" aria-label="メインナビゲーション">
            {navItems.map((item) => (
              <Link href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </header>
        {children}
        <footer className="footer">
          <div>
            <p className="footer-brand">nanacha</p>
            <p>福岡の毎日に、軽やかな日本茶ミルクティーを。</p>
          </div>
          <div className="footer-links">
            <Link href="/menu">メニュー</Link>
            <Link href="/shop">店舗情報</Link>
            <Link href="/about">ブランド</Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
