import type { Metadata } from "next";
import { getMenuItems, groupMenuItems } from "../../lib/menu";

export const metadata: Metadata = {
  title: "メニュー | 清川のミルクティー・タピオカ",
  description:
    "福岡市中央区清川のnanachaメニュー。ミルクティー、黒糖タピオカ、抹茶ミルク、ほうじ茶ミルク、季節限定ドリンクを掲載しています。",
  alternates: {
    canonical: "/menu",
  },
};

export default async function MenuPage() {
  const menuItems = await getMenuItems();
  const groupedMenu = groupMenuItems(menuItems);
  const menuJsonLd = {
    "@context": "https://schema.org",
    "@type": "Menu",
    name: "nanacha メニュー",
    hasMenuSection: Object.entries(groupedMenu).map(([category, drinks]) => ({
      "@type": "MenuSection",
      name: category,
      hasMenuItem: drinks.map((drink) => ({
        "@type": "MenuItem",
        name: drink.name,
        description: drink.description,
        offers: {
          "@type": "Offer",
          price: drink.price.replace("¥", ""),
          priceCurrency: "JPY",
          availability: drink.isSoldOut
            ? "https://schema.org/SoldOut"
            : "https://schema.org/InStock",
        },
      })),
    })),
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(menuJsonLd) }}
      />
      <section className="page-hero">
        <p className="eyebrow">MENU</p>
        <h1>清川のミルクティーとタピオカ。</h1>
        <p className="lead">
          nanachaのメニュー一覧。ミルクティー、黒糖タピオカ、抹茶ミルク、
          ほうじ茶ミルク、季節限定ドリンクを、昼にも夜にも気分に合わせて選べます。
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
