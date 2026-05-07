export type MenuItem = {
  name: string;
  tag: string;
  description: string;
  price: string;
  category?: string;
  imageUrl?: string;
  isSoldOut?: boolean;
};

export type SeasonalItem = {
  name: string;
  description: string;
  tag?: string;
  price?: string;
  imageUrl?: string;
  isSoldOut?: boolean;
};

export const featuredDrinks: MenuItem[] = [
  {
    name: "nanacha ミルクティー",
    tag: "Signature",
    description:
      "香りのよい茶葉をまろやかなミルクで仕上げた、毎日飲みやすい定番の一杯。",
    price: "TBD",
  },
  {
    name: "黒糖タピオカミルク",
    tag: "Tapioca",
    description:
      "コクのある黒糖ともちもち食感。福岡の帰り道に選びたくなる満足感。",
    price: "TBD",
  },
  {
    name: "抹茶ミルク",
    tag: "Japanese Tea",
    description:
      "抹茶のほろ苦さとミルクの甘みを、すっきり軽い後味に整えました。",
    price: "TBD",
  },
  {
    name: "ほうじ茶ミルク",
    tag: "Roasted",
    description:
      "焙じた茶葉の香ばしさが広がる、甘さ控えめで落ち着いた味わい。",
    price: "TBD",
  },
  {
    name: "季節のフルーツティー",
    tag: "Seasonal",
    description:
      "旬の果実とお茶を合わせた、季節ごとに表情が変わる限定ドリンク。",
    price: "TBD",
  },
  {
    name: "和紅茶ミルクティー",
    tag: "Light",
    description:
      "やさしい香りの和紅茶を使い、甘さ控えめに仕上げた軽やかな一杯。",
    price: "TBD",
  },
];

export const seasonalDrinks = [
  {
    name: "春の抹茶ストロベリー",
    description: "抹茶の深みと苺の明るい酸味を合わせた、春の限定ドリンク。",
  },
  {
    name: "柚子ジャスミンティー",
    description: "すっきりした香りで、外出前にも帰り道にも飲みやすい一杯。",
  },
  {
    name: "ほうじ茶クリームミルク",
    description: "香ばしいほうじ茶にやわらかなクリームを重ねた季節の味。",
  },
];
