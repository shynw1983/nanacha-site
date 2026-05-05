# nanacha

福岡で6年続くミルクティースタンド `nanacha` の公式サイト用 Next.js プロジェクトです。

## 構成

- `/` ホーム
- `/menu` メニュー
- `/shop` 店舗情報
- `/seasonal` 季節限定
- `/about` ブランド紹介
- `/sitemap.xml` サイトマップ
- `/robots.txt` robots 設定

## 開発

```bash
npm install
npm run dev
```

## Vercel

Vercel にこのリポジトリを接続すると、Next.js として自動検出されます。

公開前に差し替える項目:

- `app/layout.tsx` と `app/sitemap.ts` の `https://nanacha.jp`
- `app/page.tsx` と `app/shop/page.tsx` の住所、営業時間、注文リンク
- `app/data.ts` の実メニューと価格
- `app/globals.css` のヒーロー画像 URL
