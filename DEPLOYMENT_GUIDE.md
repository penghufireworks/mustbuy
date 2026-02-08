# 部署說明書

## 專案概述
這是一個澎湖特產電商平台，使用 React+TypeScript+Vite 開發，支援多種取貨方式。

## 🚀 快速部署到 GitHub Pages

### 步驟 1：建立 GitHub 儲存庫
1. 前往 GitHub 並登入
2. 點擊 "New repository"
3. 命名儲存庫（例如：penghu-ecommerce）
4. 設定為 Public
5. 不要初始化 README（因為我們已有檔案）

### 步驟 2：上傳檔案
將 `OK/` 資料夾內的所有檔案上傳到 GitHub：

```bash
cd OK
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/penghu-ecommerce.git
git push -u origin main
```

### 步驟 3：啟用 GitHub Pages
1. 在儲存庫頁面，點擊 "Settings"
2. 捲動到 "Pages" 部分
3. 在 "Source" 下，選擇 "Deploy from a branch"
4. 選擇 "main" 分支和 "/ (root)" 資料夾
5. 點擊 "Save"

### 步驟 4：建立 GitHub Actions（自動部署）
在儲存庫中建立 `.github/workflows/deploy.yml`：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm install
        
      - name: Build
        run: npm run build
        
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

## 🔧 其他部署選項

### Vercel（推薦）
1. 前往 [vercel.com](https://vercel.com)
2. 使用 GitHub 登入
3. 匯入儲存庫
4. 建構設定：
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`

### Netlify
1. 前往 [netlify.com](https://netlify.com)
2. 拖曳 `dist` 資料夾到部署區域
3. 或連接 GitHub 自動部署

## 📁 檔案結構說明

```
OK/
├── src/                    # React 應用程式原始碼
│   ├── components/         # 可重複使用元件
│   ├── pages/              # 頁面元件
│   ├── store/              # 狀態管理
│   └── types/              # TypeScript 型別
├── public/                 # 靜態資源
├── package.json            # 專案設定
├── vite.config.ts          # Vite 設定（已配置 GitHub Pages）
├── index.html              # 主頁面（已修復路徑）
└── README.md               # 專案說明
```

## ⚠️ 重要設定

### 已修復的 GitHub Pages 相容性問題：
1. **相對路徑**：所有資源使用 `./` 而非 `/`
2. **Vite 設定**：`base: './'` 設定
3. **檔案結構**：優化的建構輸出

### 環境需求：
- Node.js 18+
- npm 或 yarn

## 🌐 部署後網址

- GitHub Pages: `https://[your-username].github.io/[repo-name]`
- Vercel: 自動產生網址
- Netlify: 自動產生網址

## 📞 支援

如有部署問題：
1. 檢查 GitHub Pages 設定
2. 確認檔案已正確上傳
3. 查看 GitHub Actions 日誌（如使用自動部署）
4. 參考 vite.config.ts 中的 base 設定