import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "nanachaについて",
  description:
    "福岡で6年続くnanachaのブランド紹介。日本茶、甘さ控えめ、店内仕込みの考え方。",
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
          nanachaは、福岡で6年続くミルクティースタンドです。
          日本茶の香りと、日常で飲み続けられる軽さを大切にしています。
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
            <h3>福岡の日常へ</h3>
            <p>
              駅近で受け取りやすく、仕事や学校の前後に自然と立ち寄れるお店でありたい。
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
