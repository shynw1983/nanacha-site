import Link from "next/link";
import { getFeaturedDrinks, getSeasonalDrinks } from "../lib/menu";

const shopJsonLd = {
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  name: "nanacha",
  description:
    "福岡で6年続く、ミルクティーとタピオカのテイクアウトスタンド。",
  address: {
    "@type": "PostalAddress",
    addressLocality: "福岡市",
    addressRegion: "福岡県",
    addressCountry: "JP",
    streetAddress: "住所未設定",
  },
  servesCuisine: [
    "ミルクティー",
    "タピオカ",
    "日本茶",
    "黒糖タピオカ",
    "抹茶ミルク",
  ],
  url: "https://nanacha.jp",
  priceRange: "¥¥",
};

const reasons = [
  {
    title: "福岡で6年",
    text: "観光地の特別な一杯ではなく、通勤、通学、買い物の途中で選ばれる日常のミルクティーを続けてきました。",
  },
  {
    title: "甘さ控えめ",
    text: "ミルクの重さを抑え、お茶の香りと後味の軽さを大切に。毎日飲みやすいバランスに整えます。",
  },
  {
    title: "テイクアウト中心",
    text: "駅近で受け取りやすく、店頭、モバイルオーダー、LINE、デリバリーへ迷わず進める導線を用意しています。",
  },
];

const orderSteps = [
  "ベースのお茶を選ぶ",
  "甘さと氷の量を調整する",
  "タピオカやトッピングを追加する",
  "店頭または事前注文で受け取る",
];

const faqs = [
  {
    question: "福岡でタピオカやミルクティーをテイクアウトできますか？",
    answer:
      "はい。nanachaは福岡のテイクアウト向けミルクティースタンドです。店頭受け取りのほか、モバイルオーダー、LINE、Uber Eatsへの導線を用意しています。",
  },
  {
    question: "甘さ控えめにできますか？",
    answer:
      "できます。日本茶の香りを生かすため、甘さ控えめでも飲みやすいバランスを大切にしています。",
  },
  {
    question: "季節限定メニューはありますか？",
    answer:
      "あります。抹茶、ほうじ茶、果実を使った季節限定ドリンクを、時期に合わせて更新しています。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">FUKUOKA MILK TEA / TAPIOCA</p>
          <h1>nanacha</h1>
          <p className="lead">
            福岡で6年。日本茶の香りを生かしたミルクティーと、
            もちもちのタピオカを、駅近のテイクアウトで。
          </p>
          <div className="hero-meta" aria-label="ブランド情報">
            <span>Since 2018</span>
            <span>Fukuoka</span>
            <span>Milk Tea</span>
            <span>Tapioca</span>
          </div>
          <div className="actions">
            <Link className="button primary" href="/menu">
              メニューを見る
            </Link>
            <Link className="button ghost" href="/shop">
              店舗情報
            </Link>
            <Link className="button ghost" href="#order">
              注文方法
            </Link>
          </div>
        </div>
        <figure className="hero-visual" aria-label="冷たいミルクティー">
          <span className="image-caption">Milk tea, made light.</span>
        </figure>
      </section>

      <section className="section">
        <div className="section-head">
          <div>
            <p className="eyebrow">REASON</p>
            <h2>福岡で、日常の一杯として選ばれる理由。</h2>
          </div>
          <p>
            大きなチェーンにはない距離感で、福岡の毎日に合う味と受け取りやすさを
            ひとつずつ整えています。
          </p>
        </div>
        <div className="grid">
          {reasons.map((reason, index) => (
            <article className="item" key={reason.title}>
              <span className="tag">0{index + 1}</span>
              <h3>{reason.title}</h3>
              <p>{reason.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <div>
            <p className="eyebrow">MENU</p>
            <h2>ミルクティー、タピオカ、日本茶。</h2>
          </div>
          <Link className="button ghost" href="/menu">
            すべてのメニュー
          </Link>
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

      <section className="section" id="order">
        <div className="section-head">
          <div>
            <p className="eyebrow">HOW TO ORDER</p>
            <h2>はじめてでも、いつもの一杯でも。</h2>
          </div>
          <p>
            ベースのお茶、甘さ、氷、トッピングを選んで、自分にちょうどいい
            ミルクティーへ。迷ったら定番メニューからどうぞ。
          </p>
        </div>
        <ol className="steps">
          {orderSteps.map((step, index) => (
            <li key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {step}
            </li>
          ))}
        </ol>
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
            <h2>季節の余白を、一杯に。</h2>
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

      <section className="section">
        <div className="section-head">
          <div>
            <p className="eyebrow">FAQ</p>
            <h2>よくある質問。</h2>
          </div>
          <p>
            福岡でミルクティーやタピオカを探している方に、来店前に知っておきたいことをまとめました。
          </p>
        </div>
        <div className="faq-list">
          {faqs.map((faq) => (
            <details className="faq-item" key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="split">
          <div>
            <p className="eyebrow">SHOP</p>
            <h2>福岡で6年。駅近のテイクアウトスタンド。</h2>
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
