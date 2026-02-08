# 部署說明書

## 專案概述
這是一個澎湖特產電商平台，使用 React + TypeScript + Vite 開發，支援多種取貨方式。

## 部署前準備

### 1. 環境需求
- Node.js 18.0 或更高版本
- npm 或 yarn 套件管理器

### 2. 專案檔案結構
```
penghu-ecommerce/
├── src/                    # 主要程式碼
├── public/                 # 靜態資源
├── dist/                   # 建構後的檔案（執行 npm run build 後產生）
├── package.json            # 專案設定與相依套件
├── vite.config.ts          # Vite 設定檔
├── tsconfig.json           # TypeScript 設定檔
├── tailwind.config.js      # Tailwind CSS 設定檔
├── README.md               # 專案說明文件
└── start-server.js         # 自訂啟動腳本
```

## 部署步驟

### 步驟 1：安裝相依套件
```bash
npm install
```

### 步驟 2：建構生產版本
```bash
npm run build
```

### 步驟 3：部署選項

#### 選項 A：Vercel 部署（推薦）
1. 將專案上傳到 GitHub
2. 前往 [Vercel](https://vercel.com) 並登入
3. 點擊 "New Project"
4. 選擇您的 GitHub 儲存庫
5. Vercel 會自動偵測設定並部署
6. 部署完成後會獲得網址

#### 選項 B：Netlify 部署
1. 將專案上傳到 GitHub
2. 前往 [Netlify](https://netlify.com) 並登入
3. 點擊 "Add new site" → "Import an existing project"
4. 選擇 GitHub 並授權
5. 選擇您的儲存庫
6. 建構設定：
   - Build command: `npm run build`
   - Publish directory: `dist`
7. 點擊 "Deploy site"

#### 選項 C：GitHub Pages 部署
1. 在 GitHub 建立新的儲存庫
2. 將程式碼推送到儲存庫
3. 在儲存庫設定中啟用 GitHub Pages
4. 選擇來源分支（通常是 main）
5. 等待部署完成

#### 選項 D：其他靜態網站托管
1. 執行 `npm run build` 產生 `dist/` 資料夾
2. 將 `dist/` 資料夾內的所有檔案上傳到您的網站空間
3. 確保網頁伺服器設定正確的 MIME 類型

## 環境變數設定（選用）

如果需要環境變數，請在部署平台設定：

```env
VITE_API_URL=您的API網址
VITE_SUPABASE_URL=您的Supabase網址
VITE_SUPABASE_ANON_KEY=您的Supabase金鑰
```

## 常見問題

### Q: 部署後頁面空白？
A: 檢查建構是否成功，確認所有相依套件已正確安裝。

### Q: 圖片無法顯示？
A: 確認圖片路徑正確，檢查靜態資源是否正確上傳。

### Q: 路由無法正常運作？
A: 確保您的托管服務支援 SPA 路由，可能需要設定重新導向規則。

## 維護與更新

### 更新程式碼
1. 修改程式碼後執行 `npm run build`
2. 重新部署到您的平台

### 監控
- 定期檢查網站是否正常運作
- 監控錯誤日誌
- 保持相依套件更新

## 聯絡支援

如有部署問題，請參考：
- [Vite 官方文件](https://vitejs.dev/)
- [React 官方文件](https://react.dev/)
- [Vercel 文件](https://vercel.com/docs)
- [Netlify 文件](https://docs.netlify.com/)

## 版本資訊
- 專案版本：1.0.0
- 建立日期：2024年
- 最後更新：參考 Git 提交記錄