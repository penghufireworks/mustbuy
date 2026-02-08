# 澎湖特產電商平台 - 打包內容說明

## 📦 打包檔案內容

### 主要檔案
- `penghu-ecommerce.zip` - 完整專案壓縮檔

### 包含檔案清單

#### 📁 原始碼檔案
- `src/` - React 應用程式原始碼
  - `pages/` - 頁面元件（首頁、購物車、結帳等）
  - `components/` - 可重複使用元件
  - `store/` - 狀態管理
  - `services/` - API 服務與模擬資料
  - `types/` - TypeScript 型別定義

#### 📁 設定檔案
- `package.json` - 專案設定與相依套件
- `vite.config.ts` - Vite 建構工具設定
- `tsconfig.json` - TypeScript 設定
- `tailwind.config.js` - Tailwind CSS 設定

#### 📁 部署相關
- `README.md` - 專案說明文件
- `DEPLOYMENT_GUIDE.md` - 詳細部署說明書
- `start-server.js` - 自訂啟動腳本
- `vercel.json` - Vercel 部署設定

#### 📁 靜態資源
- `public/` - 靜態檔案（圖示等）

## 🚀 快速開始

### 1. 解壓縮檔案
```bash
unzip penghu-ecommerce.zip
cd penghu-ecommerce
```

### 2. 安裝相依套件
```bash
npm install
```

### 3. 啟動開發伺服器
```bash
npm run start
# 或使用自訂腳本
node start-server.js
```

### 4. 建構生產版本
```bash
npm run build
```

## 📋 功能特色

✅ **完整電商功能**
- 商品瀏覽與購物車
- 多種取貨方式（機場、港口、超商、宅配）
- 結帳流程與訂單管理

✅ **響應式設計**
- 手機、平板、電腦適配
- 現代化 UI 設計

✅ **TypeScript 支援**
- 完整型別定義
- 更好的開發體驗

✅ **部署友善**
- 支援 Vercel、Netlify、GitHub Pages
- 詳細部署說明文件

## 🔧 技術堆疊

- **前端**: React 18 + TypeScript
- **建構工具**: Vite
- **樣式**: Tailwind CSS
- **狀態管理**: Zustand
- **路由**: React Router DOM

## 📞 支援

如需協助，請參考：
- `README.md` - 專案基本說明
- `DEPLOYMENT_GUIDE.md` - 詳細部署步驟

## ⚠️ 重要提醒

- 本專案目前使用模擬資料
- 電話號碼已移除預設值，需自行填寫
- 建議部署前測試所有功能

---

**檔案建立時間**: $(date)
**版本**: 1.0.0