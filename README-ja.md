# KAIZEN LAB — Notion × Vercel サイト

Notionの公開ページを Next.js で表示し、Vercel にデプロイするプロジェクトです。

## 前提

1. Notionで対象ページを **「Webに公開」** していること（`chain-quartz-679.notion.site` など）
2. Node.js 20 以上

## ローカルで確認

```bash
cd /Users/nmr/kaizen-lab-notion-site
npm install
npm run dev
```

ブラウザで http://localhost:3000 を開きます。

## Vercel にデプロイ

### 方法A: Vercel ダッシュボード（おすすめ）

1. [vercel.com](https://vercel.com) にログイン
2. **Add New → Project**
3. このフォルダを GitHub に push したリポジトリを選ぶか、**Import** でフォルダをアップロード
4. Framework: **Next.js**（自動検出）
5. **Deploy**
6. デプロイ後、`site.config.ts` の `domain` を実際の URL（例: `xxx.vercel.app`）に合わせて更新して再デプロイ

### 方法B: CLI

```bash
npm i -g vercel
cd /Users/nmr/kaizen-lab-notion-site
vercel
```

初回はログインとプロジェクト名の入力が必要です。

## Vercel 設定で重要なこと

**Settings → Deployment Protection** で **Vercel Authentication をオフ** にしてください。  
オンだと SNS プレビュー画像 API が 401 になります。

## カスタムドメイン

Vercel の **Settings → Domains** で独自ドメインを追加し、`site.config.ts` の `domain` も同じ値に変更してください。

## Notion ページ ID

現在のルートページ ID: `339abc71e90d80d497afdfc3f3a6d5a6`

Notion URL の末尾 32 文字が ID です。

## トラブルシュート

- **ページが表示されない**: Notion で「Webに公開」が有効か確認
- **埋め込み（iframe）が表示されない**: 埋め込み先サイトが `X-Frame-Options` で拒否している場合があります（onrender.com のデモなどは Notion 上では表示されていても、別ドメインでは制限されることがあります）
