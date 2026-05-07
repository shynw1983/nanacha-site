import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "nanachaについて",
  description:
    "福岡市中央区清川のnanachaのブランド紹介。日本茶、甘さ控えめ、夜まで楽しめるミルクティーとタピオカ。",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <main>
      <section className="page-hero">
        <p className="eyebrow">ABOUT</p>
        <h1>nanachaについて</h1>
        <p className="lead">
          nanachaは、福岡市中央区清川のミルクティースタンドです。
          日本茶の香りと、昼にも夜にも飲みやすい軽さを大切にしています。
        </p>
      </section>
      <section className="section">
        <div className="grid">
          <article className="item">
            <span className="tag">Tea</span>
            <h3>日本茶の香り</h3>
            <p>
              抹茶、ほうじ茶、和紅茶など、お茶の個性がきちんと感じられる味づくり。
            </p>
          </article>
          <article className="item">
            <span className="tag">Light</span>
            <h3>甘さ控えめ</h3>
            <p>
              毎日でも選びやすいように、重すぎない甘さとすっきりした後味を目指します。
            </p>
          </article>
          <article className="item">
            <span className="tag">Local</span>
            <h3>清川の街へ</h3>
            <p>
              清川・渡辺通・住吉エリアで、昼の休憩にも夜の食後にも自然と立ち寄れるお店でありたい。
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
