import type { Metadata } from "next";
import { seasonalDrinks } from "../data";

export const metadata: Metadata = {
  title: "季節限定",
  description:
    "nanachaの季節限定ドリンク。抹茶、柚子、ほうじ茶など、旬に合わせた福岡のテイクアウトドリンク。",
  alternates: {
    canonical: "/seasonal",
  },
};

export default function SeasonalPage() {
  return (
    <main>
      <section className="page-hero">
        <p className="eyebrow">SEASONAL</p>
        <h1>季節限定</h1>
        <p className="lead">
          旬の素材と日本茶を合わせて、福岡の季節に合う軽やかな一杯をつくります。
        </p>
      </section>
      <section className="section">
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
    </main>
  );
}
