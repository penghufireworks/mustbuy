# 澎湖特產電商平台

一個專為澎湖特產設計的電商平台，支援機場取貨、港口取貨、超商取貨等多種取貨方式。

## 功能特色

- 🛍️ **商品瀏覽與購物車**
  - 瀏覽澎湖特色產品
  - 加入購物車與數量調整
  - 商品分類與搜尋

- 📦 **多元取貨方式**
  - ✈️ 機場取貨（需提前12小時預訂）
  - 🚢 港口取貨（需提前12小時預訂）
  - 🏪 超商取貨
  - 🏠 宅配到府

- 💳 **安全結帳流程**
  - 多種付款方式支援
  - SMS簡訊驗證
  - 訂單追蹤與管理

- 📱 **響應式設計**
  - 手機、平板、電腦完美適配
  - 直覺的操作介面

## 技術架構

- **前端框架**: React 18 + TypeScript
- **建構工具**: Vite
- **樣式框架**: Tailwind CSS
- **狀態管理**: Zustand
- **路由**: React Router DOM
- **後端**: Node.js + Express (開發中)

## 快速開始

### 環境需求
- Node.js 18+ 
- npm 或 yarn

### 安裝與執行

```bash
# 安裝相依套件
npm install

# 啟動開發伺服器
npm run start

# 或使用自訂啟動腳本
node start-server.js
```

### 其他指令

```bash
# 建構生產版本
npm run build

# 預覽生產版本
npm run preview

# 執行 ESLint 檢查
npm run lint

# TypeScript 型別檢查
npm run check
```

## 專案結構

```
src/
├── components/          # React 元件
│   ├── checkout/       # 結帳相關元件
│   ├── layout/         # 版面配置元件
│   └── ui/             # 通用 UI 元件
├── pages/              # 頁面元件
├── store/              # 狀態管理
├── services/           # API 服務與模擬資料
├── types/              # TypeScript 型別定義
└── hooks/              # 自訂 React Hooks
```

## 部署說明

### Vercel 部署（推薦）
1. Fork 此專案到您的 GitHub
2. 連接 GitHub 到 Vercel
3. 設定環境變數（如有需要）
4. 自動部署

### 其他平台部署
1. 執行 `npm run build` 建構專案
2. 將 `dist/` 資料夾部署到您的靜態網站托管服務
3. 設定適當的重新導向規則

## 注意事項

- 本專案目前使用模擬資料，未連接真實後端
- 電話號碼和地址欄位已移除預設值，需自行填寫
- 機場/港口取貨需提前12小時預訂

## 授權

MIT License

## 聯絡資訊

請填寫您的聯絡資訊