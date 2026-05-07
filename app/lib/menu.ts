import {
  featuredDrinks,
  seasonalDrinks,
  type MenuItem,
  type SeasonalItem,
} from "../data";
import { hasSanityConfig, sanityClient } from "./sanity";

type SanityMenuItem = {
  nameJa?: string;
  descriptionJa?: string;
  category?: string;
  price?: number;
  isFeatured?: boolean;
  isSeasonal?: boolean;
  isSoldOut?: boolean;
  imageUrl?: string;
};

const menuQuery = `*[_type == "menuItem" && isActive != false] | order(sortOrder asc, nameJa asc) {
  nameJa,
  descriptionJa,
  category,
  price,
  isFeatured,
  isSeasonal,
  isSoldOut,
  "imageUrl": image.asset->url
}`;

const featuredQuery = `*[_type == "menuItem" && isActive != false && isFeatured == true] | order(sortOrder asc, nameJa asc)[0...6] {
  nameJa,
  descriptionJa,
  category,
  price,
  isSoldOut,
  "imageUrl": image.asset->url
}`;

const seasonalQuery = `*[_type == "menuItem" && isActive != false && isSeasonal == true] | order(sortOrder asc, nameJa asc) {
  nameJa,
  descriptionJa,
  category,
  price,
  isSoldOut,
  "imageUrl": image.asset->url
}`;

const formatPrice = (price?: number) =>
  typeof price === "number" ? `¥${price.toLocaleString("ja-JP")}` : "TBD";

const categoryLabels: Record<string, string> = {
  milkTea: "ミルクティー",
  tapioca: "タピオカ",
  japaneseTea: "日本茶",
  fruitTea: "フルーツティー",
  seasonal: "季節限定",
  topping: "トッピング",
  other: "Other",
};

const normalizeMenuItem = (item: SanityMenuItem): MenuItem => ({
  name: item.nameJa || "名称未設定",
  tag: item.category ? categoryLabels[item.category] || item.category : "Menu",
  description: item.descriptionJa || "説明文は準備中です。",
  price: formatPrice(item.price),
  category: item.category,
  imageUrl: item.imageUrl,
  isSoldOut: item.isSoldOut,
});

const normalizeSeasonalItem = (item: SanityMenuItem): SeasonalItem => ({
  name: item.nameJa || "名称未設定",
  description: item.descriptionJa || "説明文は準備中です。",
  tag: item.category ? categoryLabels[item.category] || item.category : "Limited",
  price: formatPrice(item.price),
  imageUrl: item.imageUrl,
  isSoldOut: item.isSoldOut,
});

const fetchFromSanity = async <T>(query: string): Promise<T[]> => {
  if (!hasSanityConfig) {
    return [];
  }

  try {
    return await sanityClient.fetch<T[]>(query, {}, {
      next: { revalidate: 60 },
    });
  } catch {
    return [];
  }
};

export async function getFeaturedDrinks(): Promise<MenuItem[]> {
  const items = await fetchFromSanity<SanityMenuItem>(featuredQuery);
  return items.length > 0 ? items.map(normalizeMenuItem) : featuredDrinks;
}

export async function getMenuItems(): Promise<MenuItem[]> {
  const items = await fetchFromSanity<SanityMenuItem>(menuQuery);
  return items.length > 0 ? items.map(normalizeMenuItem) : featuredDrinks;
}

export async function getSeasonalDrinks(): Promise<SeasonalItem[]> {
  const items = await fetchFromSanity<SanityMenuItem>(seasonalQuery);
  return items.length > 0 ? items.map(normalizeSeasonalItem) : seasonalDrinks;
}

export function groupMenuItems(items: MenuItem[]) {
  return items.reduce<Record<string, MenuItem[]>>((groups, item) => {
    const key = item.tag || "Menu";
    groups[key] = groups[key] || [];
    groups[key].push(item);
    return groups;
  }, {});
}
