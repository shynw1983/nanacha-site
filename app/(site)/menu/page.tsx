import type { Metadata } from "next";
import { getMenuItems, groupMenuItems } from "../../lib/menu";

export const metadata: Metadata = {
  title: "メニュー",
  description:
    "nanachaのミルクティー、黒糖タピオカ、抹茶ミルク、ほうじ茶ミルクなどのメニュー一覧。",
  alternates: {
    canonical: "/menu",
  },
};

export default async function MenuPage() {
  const menuItems = await getMenuItems();
  const groupedMenu = groupMenuItems(menuItems);

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
        {Object.entries(groupedMenu).map(([category, drinks]) => (
          <div className="menu-category" key={category}>
            <div className="menu-category-head">
              <p className="eyebrow">CATEGORY</p>
              <h2>{category}</h2>
            </div>
            <div className="menu-list">
              {drinks.map((drink) => (
                <article className="menu-row" key={drink.name}>
                  <div>
                    <span className="tag">
                      {drink.isSoldOut ? "Sold Out" : drink.tag}
                    </span>
                    <h3>{drink.name}</h3>
                  </div>
                  <p>{drink.description}</p>
                  <span className="price">
                    {drink.isSoldOut ? "売り切れ" : drink.price}
                  </span>
                </article>
              ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
