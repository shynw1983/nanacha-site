import type { Metadata } from "next";
import { instagramUrl, uberEatsUrl } from "../../links";

export const metadata: Metadata = {
  title: "店舗情報 | 福岡市中央区清川",
  description:
    "福岡市中央区清川のミルクティースタンド nanacha の店舗情報。住所は福岡市中央区清川2-9-6、営業時間は12:00-0:30です。",
  alternates: {
    canonical: "/shop",
  },
};

export default function ShopPage() {
  return (
    <main>
      <section className="page-hero">
        <p className="eyebrow">SHOP</p>
        <h1>店舗情報</h1>
        <p className="lead">
          福岡市中央区清川2-9-6。昼から夜遅くまで、
          ミルクティーとタピオカをテイクアウトで楽しめます。
        </p>
      </section>
      <section className="section">
        <div className="split">
          <div>
            <h2>福岡本店</h2>
            <p className="body-copy">
              清川・渡辺通・住吉エリアで、昼のドリンクにも夜の食後の一杯にも
              選びやすいテイクアウトスタンドです。
            </p>
          </div>
          <dl className="info-list">
            <div className="info-row">
              <dt>住所</dt>
              <dd>福岡県福岡市中央区清川2-9-6</dd>
            </div>
            <div className="info-row">
              <dt>アクセス</dt>
              <dd>清川・渡辺通・住吉エリア</dd>
            </div>
            <div className="info-row">
              <dt>営業時間</dt>
              <dd>12:00 - 0:30</dd>
            </div>
            <div className="info-row">
              <dt>定休日</dt>
              <dd>不定休</dd>
            </div>
            <div className="info-row">
              <dt>注文方法</dt>
              <dd>店頭、モバイルオーダー、LINE、Uber Eats</dd>
            </div>
          </dl>
        </div>
      </section>
      <section className="section alt">
        <div className="order-band">
          <div>
            <p className="eyebrow">ORDER</p>
            <h2>事前注文で、受け取りをスムーズに。</h2>
          </div>
          <div className="actions">
            <a className="button primary" href="#" aria-disabled="true">
              モバイルオーダー
            </a>
            <a className="button soft" href="#" aria-disabled="true">
              LINEで注文
            </a>
            <a
              className="button ghost"
              href={instagramUrl}
              rel="noreferrer"
              target="_blank"
            >
              Instagram
            </a>
            <a
              className="button ghost"
              href={uberEatsUrl}
              rel="noreferrer"
              target="_blank"
            >
              Uber Eats
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
