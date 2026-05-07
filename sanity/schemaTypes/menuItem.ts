import { defineField, defineType } from "sanity";

export const menuItem = defineType({
  name: "menuItem",
  title: "メニュー",
  type: "document",
  fields: [
    defineField({
      name: "nameJa",
      title: "商品名",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "descriptionJa",
      title: "説明文",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "category",
      title: "カテゴリ",
      type: "string",
      initialValue: "milkTea",
      options: {
        layout: "dropdown",
        list: [
          { title: "ミルクティー", value: "milkTea" },
          { title: "タピオカ", value: "tapioca" },
          { title: "日本茶", value: "japaneseTea" },
          { title: "フルーツティー", value: "fruitTea" },
          { title: "季節限定", value: "seasonal" },
          { title: "トッピング", value: "topping" },
          { title: "その他", value: "other" },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "price",
      title: "価格",
      type: "number",
      description: "税込価格を数字だけで入力します。例: 650",
      validation: (rule) => rule.min(0),
    }),
    defineField({
      name: "image",
      title: "商品画像",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "isActive",
      title: "サイトに表示する",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "isSoldOut",
      title: "売り切れ",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "isFeatured",
      title: "ホームに表示する",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "isSeasonal",
      title: "季節限定に表示する",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "sortOrder",
      title: "表示順",
      type: "number",
      description: "小さい数字ほど上に表示されます。",
      initialValue: 100,
    }),
  ],
  preview: {
    select: {
      title: "nameJa",
      subtitle: "category",
      media: "image",
    },
  },
});
