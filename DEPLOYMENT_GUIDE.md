# 澎湖特產電商平台 - 完整部署指南

## 🎯 目標
將澎湖特產電商平台部署到自定義網域 `https://penghu.shop/`

## 📋 打包內容說明

### 主要檔案
- `OK/` 資料夾 - 完整專案檔案，可直接上傳到 GitHub

### 關鍵配置已優化
- ✅ **GitHub Actions 工作流程** - 自動建構和部署
- ✅ **Vite 配置** - 相對路徑和 GitHub Pages 相容性
- ✅ **TypeScript 配置** - 完整型別支援
- ✅ **自定義網域支援** - 自動創建 CNAME 檔案

## 🚀 部署步驟

### 步驟 1：上傳到 GitHub
1. 將 `OK/` 資料夾內的所有檔案上傳到新的 GitHub 儲存庫
2. 確保檔案結構完整（包含所有設定檔）

### 步驟 2：GitHub Pages 設定
1. 進入儲存庫的 Settings → Pages
2. Source 選擇 "GitHub Actions"
3. 儲存設定

### 步驟 3：DNS 設定（重要！）
在你的網域註冊商設定這些 A 記錄：
```
Type: A
Name: @
Value: 185.199.108.153

Type: A
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153
```

### 步驟 4：等待部署
- GitHub Actions 會自動觸發建構和部署
- DNS 生效需要 24-48 小時
- 訪問 `https://penghu.shop/` 確認

## 🔧 技術細節

### MIME 類型錯誤解決方案
**問題**：`main.tsx:1 Failed to load module script: Expected a JavaScript-or-Wasm module script but the server responded with a MIME type of "application/octet-stream"`

**原因**：GitHub Pages 無法直接提供 TypeScript 檔案

**解決**：GitHub Actions 自動建構流程
```yaml
- name: Build
  run: npm run build  # TypeScript → JavaScript
- name: Create CNAME file
  run: echo "penghu.shop" > dist/CNAME
```

### 檔案結構優化
```
OK/
├── src/                    # React 原始碼（TypeScript）
├── .github/workflows/      # 自動部署流程
├── dist/                   # 建構輸出（JavaScript）
├── favicon.svg            # 網站圖示
├── index.html             # 主頁面
└── *.config.js            # 各種設定檔
```

### 關鍵配置檔案

#### package.json
```json
{
  "homepage": "https://penghu.shop",
  "scripts": {
    "build": "tsc -b && vite build",
    "deploy": "gh-pages -d dist"
  }
}
```

#### vite.config.ts
```typescript
export default defineConfig({
  base: './',  // 相對路徑，GitHub Pages 相容
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})
```

#### GitHub Actions (.github/workflows/deploy.yml)
```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [ main ]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
      - run: npm ci
      - run: npm run build
      - run: echo "penghu.shop" > dist/CNAME
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist
  deploy:
    needs: build
    runs-on: ubuntu-latest
    steps:
      - uses: actions/deploy-pages@v4
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

✅ **GitHub Pages 優化**
- 相對路徑修復
- 自動部署配置
- SPA 路由支援
- 自定義網域支援

## 🎯 已解決的問題

✅ **MIME 類型錯誤** → GitHub Actions 自動建構 TypeScript → JavaScript
✅ **favicon.svg 404** → 創建澎湖主題 favicon.svg 檔案
✅ **相對路徑問題** → 所有資源使用 `./` 相對路徑
✅ **自定義網域** → 自動創建 CNAME 檔案指向 penghu.shop

## ⚠️ 重要提醒

- **建構流程**：GitHub Actions 會自動處理 TypeScript → JavaScript 轉換
- **檔案上傳**：確保上傳完整的 `OK/` 資料夾內容
- **DNS 設定**：必須正確設定 A 記錄
- **等待時間**：DNS 生效需要 24-48 小時
- **部署狀態**：可在 GitHub 儲存庫的 Actions 標籤查看部署進度

## 📞 技術支援

如果遇到問題：
1. 檢查 GitHub Actions 日誌
2. 確認 DNS 設定正確
3. 確保所有檔案完整上傳
4. 等待 DNS 生效（最多 48 小時）

---

**版本**: 1.0.0  
**更新日期**: 2026年2月9日  
**部署狀態**: ✅ 已優化，支援自定義網域