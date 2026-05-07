import Link from "next/link";
import type { ReactNode } from "react";
import { instagramUrl, uberEatsUrl } from "../links";

const navItems = [
  { href: "/menu", label: "メニュー" },
  { href: "/shop", label: "店舗情報" },
  { href: "/#order", label: "注文方法" },
  { href: "/seasonal", label: "季節限定" },
  { href: "/about", label: "nanachaについて" },
];

export default function SiteLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <header className="site-header">
        <Link className="brand" href="/" aria-label="nanacha ホーム">
          <img src="/images/nanacha-logo.png" alt="nanacha" />
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
          <p className="footer-brand">
            <img src="/images/nanacha-logo.png" alt="nanacha" />
          </p>
          <p>福岡の毎日に、軽やかな日本茶ミルクティーを。</p>
        </div>
        <div className="footer-links">
          <Link href="/menu">メニュー</Link>
          <Link href="/shop">店舗情報</Link>
          <Link href="/about">ブランド</Link>
          <a href={instagramUrl} rel="noreferrer" target="_blank">
            Instagram
          </a>
          <a href={uberEatsUrl} rel="noreferrer" target="_blank">
            Uber Eats
          </a>
        </div>
      </footer>
    </>
  );
}
