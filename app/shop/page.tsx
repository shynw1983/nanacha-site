import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "店舗情報",
  description:
    "福岡のミルクティースタンド nanacha の店舗情報、営業時間、最寄り駅、注文方法。",
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
          福岡で6年続く、駅近のテイクアウトスタンド。
          正式な住所、電話番号、注文リンクは公開前に差し替えます。
        </p>
      </section>
      <section className="section">
        <div className="split">
          <div>
            <h2>福岡本店</h2>
            <p className="body-copy">
              仕事帰り、通学前、買い物の途中に立ち寄りやすい場所で、
              すぐに受け取れる一杯を用意しています。
            </p>
          </div>
          <dl className="info-list">
            <div className="info-row">
              <dt>住所</dt>
              <dd>福岡県福岡市 住所未設定</dd>
            </div>
            <div className="info-row">
              <dt>アクセス</dt>
              <dd>最寄り駅から徒歩約3分</dd>
            </div>
            <div className="info-row">
              <dt>営業時間</dt>
              <dd>11:00 - 20:00</dd>
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
          </div>
        </div>
      </section>
    </main>
  );
}
