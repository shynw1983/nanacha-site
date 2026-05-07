import Link from "next/link";
import { getFeaturedDrinks, getSeasonalDrinks } from "../lib/menu";

const shopJsonLd = {
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  name: "nanacha",
  description:
    "福岡で6年続く、日本茶とミルクティーのテイクアウトスタンド。",
  address: {
    "@type": "PostalAddress",
    addressLocality: "福岡市",
    addressRegion: "福岡県",
    addressCountry: "JP",
    streetAddress: "住所未設定",
  },
  servesCuisine: ["ミルクティー", "タピオカ", "日本茶"],
  url: "https://nanacha.jp",
};

export default async function Home() {
  const [featuredDrinks, seasonalDrinks] = await Promise.all([
    getFeaturedDrinks(),
    getSeasonalDrinks(),
  ]);

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(shopJsonLd) }}
      />
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">FUKUOKA MILK TEA STAND</p>
          <h1>nanacha</h1>
          <p className="lead">
            福岡で6年。駅近で、すぐに受け取れる日本茶ミルクティー。
            甘さ控えめの一杯を、いつもの通学路や仕事帰りに。
          </p>
          <div className="actions">
            <Link className="button primary" href="/menu">
              メニューを見る
            </Link>
            <Link className="button ghost" href="/shop">
              店舗情報
            </Link>
          </div>
        </div>
        <div className="hero-visual" aria-label="冷たいミルクティー" />
      </section>

      <section className="section">
        <div className="section-head">
          <div>
            <p className="eyebrow">DAILY STANDARD</p>
            <h2>毎日に寄り添う、軽い飲み心地。</h2>
          </div>
          <p>
            日本茶の香り、ミルクのまろやかさ、甘さ控えめのバランス。
            nanachaは、福岡の日常で選びやすいテイクアウトドリンクを届けます。
          </p>
        </div>
        <div className="grid">
          {featuredDrinks.slice(0, 3).map((drink) => (
            <article className="item" key={drink.name}>
              <span className="tag">{drink.tag}</span>
              <h3>{drink.name}</h3>
              <p>{drink.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section alt">
        <div className="section-head">
          <div>
            <p className="eyebrow">MOBILE ORDER</p>
            <h2>待ち時間を少なく、帰り道を軽く。</h2>
          </div>
          <p>
            モバイルオーダー、LINE、Uber Eatsへの導線を用意しています。
            現在は公開前のため、リンクは仮設定です。
          </p>
        </div>
        <div className="actions">
          <a className="button primary" href="#" aria-disabled="true">
            モバイルオーダー
          </a>
          <a className="button soft" href="#" aria-disabled="true">
            LINEで注文
          </a>
          <a className="button ghost" href="#" aria-disabled="true">
            Uber Eats
          </a>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <div>
            <p className="eyebrow">SEASONAL</p>
            <h2>季節で変わる、今日の一杯。</h2>
          </div>
          <Link className="button ghost" href="/seasonal">
            季節限定を見る
          </Link>
        </div>
        <div className="grid">
          {seasonalDrinks.map((drink) => (
            <article className="item" key={drink.name}>
              <span className="tag">Limited</span>
              <h3>{drink.name}</h3>
              <p>{drink.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section alt">
        <div className="split">
          <div>
            <p className="eyebrow">SHOP</p>
            <h2>福岡の駅近テイクアウトスタンド。</h2>
          </div>
          <dl className="info-list">
            <div className="info-row">
              <dt>住所</dt>
              <dd>福岡県福岡市 住所未設定</dd>
            </div>
            <div className="info-row">
              <dt>最寄り駅</dt>
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
          </dl>
        </div>
      </section>
    </main>
  );
}
