# 澎湖特產電商平台

## 🚀 快速開始

### 安裝相依套件
```bash
npm install
```

### 啟動開發伺服器
```bash
npm run dev
```

### 建構生產版本
```bash
npm run build
```

### 預覽建構結果
```bash
npm run preview
```

## 📦 部署到 GitHub Pages

### 1. 推送到 GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

### 2. 設定 GitHub Pages
1. 前往 GitHub 儲存庫設定
2. 找到 "Pages" 選項
3. 選擇部署來源為 "GitHub Actions"

### 3. 建立 GitHub Actions 工作流程
在 `.github/workflows/deploy.yml` 加入：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Setup Pages
        uses: actions/configure-pages@v4
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'
      
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

## 📝 專案特色

- ✅ 完整電商功能（商品瀏覽、購物車、結帳）
- ✅ 多種取貨方式（機場、港口、超商、宅配）
- ✅ 響應式設計，支援手機平板
- ✅ TypeScript 支援，完整型別定義
- ✅ 模擬資料，無需後端即可運行

## 🔧 技術堆疊

- **前端**: React 18 + TypeScript
- **建構工具**: Vite
- **樣式**: Tailwind CSS
- **狀態管理**: Zustand
- **路由**: React Router DOM

## 📁 專案結構

```
OK/
├── src/
│   ├── components/     # 可重複使用元件
│   ├── pages/         # 頁面元件
│   ├── store/         # 狀態管理
│   ├── services/      # API 服務
│   └── types/         # TypeScript 型別
├── public/            # 靜態資源
├── package.json       # 專案設定
├── vite.config.ts     # Vite 設定
└── README.md         # 專案說明
```

## 🌐 線上示範

部署後可透過 `https://[your-username].github.io/[repo-name]` 存取

## 📞 支援

如有問題，請參考 `DEPLOYMENT_GUIDE.md` 或建立 Issue