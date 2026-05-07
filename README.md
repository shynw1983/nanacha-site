# nanacha

福岡で6年続くミルクティースタンド `nanacha` の公式サイト用 Next.js プロジェクトです。

## 構成

- `/` ホーム
- `/menu` メニュー
- `/shop` 店舗情報
- `/seasonal` 季節限定
- `/about` ブランド紹介
- `/studio` Sanity Studio 管理画面
- `/sitemap.xml` サイトマップ
- `/robots.txt` robots 設定

## 開発

```bash
npm install
npm run dev
```

## Sanity CMS

メニューは Sanity Studio から編集できます。Sanity を使わない場合は `app/data.ts` の仮データが表示されます。

1. Sanity でプロジェクトを作成
2. `.env.example` を参考に `.env.local` を作成
3. Vercel の Environment Variables に同じ値を追加
4. `/studio` にアクセスして `メニュー` を編集

必要な環境変数:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2026-05-07
```

Sanity Studio のメニュー項目:

- 商品名
- 説明文
- カテゴリ
- 価格
- 商品画像
- サイト表示 / 売り切れ / ホーム表示 / 季節限定
- 表示順

## Vercel

Vercel にこのリポジトリを接続すると、Next.js として自動検出されます。

公開前に差し替える項目:

- `app/layout.tsx` と `app/sitemap.ts` の `https://nanacha.jp`
- `app/(site)/page.tsx` と `app/(site)/shop/page.tsx` の住所、営業時間、注文リンク
- Sanity Studio の実メニューと価格
- `app/globals.css` のヒーロー画像 URL
