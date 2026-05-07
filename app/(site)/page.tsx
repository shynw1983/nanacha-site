import Link from "next/link";
import { instagramUrl, uberEatsUrl } from "../links";
import { getFeaturedDrinks, getSeasonalDrinks } from "../lib/menu";

const shopJsonLd = {
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  name: "nanacha",
  description:
    "福岡市中央区清川のミルクティーとタピオカのテイクアウトスタンド。",
  address: {
    "@type": "PostalAddress",
    addressLocality: "福岡市",
    addressRegion: "福岡県",
    addressCountry: "JP",
    streetAddress: "中央区清川2-9-6",
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
  openingHours: "Mo-Su 12:00-00:30",
};

const reasons = [
  {
    title: "清川の一杯",
    text: "福岡市中央区清川で、街の流れに寄り添うミルクティーとタピオカをつくっています。",
  },
  {
    title: "甘さ控えめ",
    text: "ミルクの重さを抑え、お茶の香りと後味の軽さを大切に。毎日飲みやすいバランスに整えます。",
  },
  {
    title: "夜遅くまで",
    text: "12:00から0:30まで。昼の一杯にも、食後や夜のテイクアウトにも選びやすい営業時間です。",
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
      "はい。nanachaは福岡市中央区清川のテイクアウト向けミルクティースタンドです。店頭受け取りのほか、モバイルオーダー、LINE、Uber Eatsへの導線を用意しています。",
  },
  {
    question: "甘さ控えめにできますか？",
    answer:
      "できます。日本茶の香りを生かすため、甘さ控えめでも飲みやすいバランスを大切にしています。",
  },
  {
    question: "夜遅くでも利用できますか？",
    answer:
      "営業時間は12:00から0:30までです。昼のドリンクにも、夜の食後の一杯にも利用しやすい時間帯で営業しています。",
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
        <figure className="hero-visual" aria-label="nanachaのミルクティーとタピオカ" />
        <div className="hero-copy">
          <p className="eyebrow">FUKUOKA MILK TEA / TAPIOCA</p>
          <h1 className="hero-logo">
            <img src="/images/nanacha-logo.png" alt="nanacha tapioca & more" />
          </h1>
          <p className="lead">
            清川で、昼から夜まで。日本茶ミルクティーとタピオカ。
          </p>
          <div className="hero-meta" aria-label="ブランド情報">
            <span>Kiyokawa, Fukuoka</span>
            <span>12:00-0:30</span>
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
            <a
              className="button ghost"
              href={instagramUrl}
              rel="noreferrer"
              target="_blank"
            >
              Instagram
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <div>
            <p className="eyebrow">REASON</p>
            <h2>
              清川で、昼にも夜にも選べる一杯。
              <img className="title-icon" src="/images/icons/icon-dog.png" alt="" />
            </h2>
          </div>
          <p>
            清川の街に合う、軽さと香り。
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
            <h2>
              ミルクティー、タピオカ、日本茶。
              <img className="title-icon pearls" src="/images/icons/icon-pearls.png" alt="" />
            </h2>
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
            <h2>
              はじめてでも、いつもの一杯でも。
              <img className="title-icon cup" src="/images/icons/icon-cup.png" alt="" />
            </h2>
          </div>
          <p>
            お茶、甘さ、氷、トッピングを選んで。
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
          <a
            className="button ghost"
            href={uberEatsUrl}
            rel="noreferrer"
            target="_blank"
          >
            Uber Eats
          </a>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <div>
            <p className="eyebrow">SEASONAL</p>
            <h2>
              季節の余白を、一杯に。
              <img className="title-icon sparkle" src="/images/icons/icon-sparkle.png" alt="" />
            </h2>
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
            <h2>
              よくある質問。
              <img className="title-icon heart" src="/images/icons/icon-heart.png" alt="" />
            </h2>
          </div>
          <p>
            来店前に知っておきたいこと。
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
            <h2>
              福岡市中央区清川。夜まで開いているテイクアウトスタンド。
              <img className="title-icon wave" src="/images/icons/icon-wave.png" alt="" />
            </h2>
          </div>
          <dl className="info-list">
            <div className="info-row">
              <dt>住所</dt>
              <dd>福岡県福岡市中央区清川2-9-6</dd>
            </div>
            <div className="info-row">
              <dt>エリア</dt>
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
          </dl>
        </div>
      </section>
    </main>
  );
}
