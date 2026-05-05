import type { Metadata } from "next";
import { featuredDrinks } from "../data";

export const metadata: Metadata = {
  title: "メニュー",
  description:
    "nanachaのミルクティー、黒糖タピオカ、抹茶ミルク、ほうじ茶ミルクなどのメニュー一覧。",
  alternates: {
    canonical: "/menu",
  },
};

export default function MenuPage() {
  return (
    <main>
      <section className="page-hero">
        <p className="eyebrow">MENU</p>
        <h1>メニュー</h1>
        <p className="lead">
          日本茶の香りを生かしたミルクティーと、福岡の日常で選びやすいタピオカドリンク。
          価格と詳細は正式公開前の仮内容です。
        </p>
      </section>
      <section className="section">
        <div className="menu-list">
          {featuredDrinks.map((drink) => (
            <article className="menu-row" key={drink.name}>
              <div>
                <span className="tag">{drink.tag}</span>
                <h3>{drink.name}</h3>
              </div>
              <p>{drink.description}</p>
              <span className="price">{drink.price}</span>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
