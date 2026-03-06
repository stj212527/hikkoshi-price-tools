# stj-tools

stjLab Tools — 家賃相場診断・引越し費用計算

## ファイル構成

```
stj-tools/
├── src/
│   └── index.js          ← Cloudflare Worker 本体
├── public/
│   ├── index.html         ← /tools/ トップページ
│   ├── rent/
│   │   └── index.html     ← /tools/rent/ 家賃相場診断
│   └── moving/
│       └── index.html     ← /tools/moving/ 引越し費用計算
├── wrangler.toml          ← Cloudflare 設定
├── package.json
└── .gitignore
```

## デプロイ手順

### 1. GitHubリポジトリを作成

1. https://github.com/new を開く
2. Repository name: `stj-tools`
3. Public または Private（どちらでもOK）
4. 「Create repository」

### 2. ローカルでGitを初期化してpush

```cmd
cd stj-tools フォルダの場所
git init
git add .
git commit -m "feat: 初回コミット"
git branch -M main
git remote add origin https://github.com/あなたのユーザー名/stj-tools.git
git push -u origin main
```

### 3. Cloudflare Pages/WorkersとGitHubを連携

1. https://dash.cloudflare.com を開く
2. 左メニュー「Workers & Pages」→「作成」
3. 「Pages」タブ→「Gitに接続」
4. GitHubを選択 → `stj-tools` リポジトリを選択
5. ビルド設定：
   - フレームワーク: なし（None）
   - ビルドコマンド: `npm install && npm run deploy`
   - 出力ディレクトリ: （空欄）
6. 「保存してデプロイ」

### 4. Cloudflareのルート設定

1. Cloudflare ダッシュボード
2. 「Workers & Pages」→ stj-tools を選択
3. 「設定」→「トリガー」→「カスタムドメインを追加」
4. `stjkulab.com/tools/*` を追加

これで `https://stjkulab.com/tools/` でアクセスできます。

## URL一覧

| URL | ページ |
|---|---|
| stjkulab.com/tools/ | ツール一覧（トップ） |
| stjkulab.com/tools/rent/ | 家賃相場診断 |
| stjkulab.com/tools/moving/ | 引越し費用計算 |
