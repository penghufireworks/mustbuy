# 澎湖特產電商平台 - 詳細部署說明書

## 🎯 目標
將澎湖特產電商平台部署到自定義網域 `https://penghu.shop/`

## 📋 部署前準備

### 必要條件
1. GitHub 帳號
2. 已購買的網域 `penghu.shop`
3. 將 `OK/` 資料夾內的所有檔案上傳到 GitHub

## 🚀 步驟一：GitHub 設定

### 1. 建立新的 GitHub 儲存庫
- 登入 GitHub
- 點擊 "New repository"
- 命名為 `penghu-ecommerce`（或其他你喜歡的名稱）
- 設定為 Public
- 不要初始化 README

### 2. 上傳檔案到 GitHub
將 `OK/` 資料夾內的所有檔案上傳到新建立的儲存庫：
```bash
git clone https://github.com/[你的用戶名]/[儲存庫名稱].git
cd [儲存庫名稱]
# 將 OK 資料夾內的所有檔案複製到此目錄
git add .
git commit -m "Initial commit"
git push origin main
```

## 🔧 步驟二：GitHub Pages 設定

### 1. 啟用 GitHub Pages
- 進入儲存庫的 Settings
- 滾動到 "Pages" 部分
- Source 選擇 "GitHub Actions"

### 2. 確認工作流程
- 確認 `.github/workflows/deploy.yml` 已存在
- 此檔案會自動創建 CNAME 檔案指向 `penghu.shop`

## 🌐 步驟三：網域設定

### 1. DNS 設定（重要！）
在你的網域註冊商（購買網域的地方）設定 DNS：

#### 方法一：A 記錄（推薦）
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

#### 方法二：CNAME 記錄
```
Type: CNAME
Name: www
Value: [你的用戶名].github.io
```

### 2. 等待 DNS 生效
DNS 變更可能需要 24-48 小時才能完全生效。

## ✅ 步驟四：驗證部署

### 1. 檢查 GitHub Actions
- 進入儲存庫的 "Actions" 標籤
- 確認工作流程執行成功（綠色勾勾）

### 2. 檢查網站
- 訪問 `https://penghu.shop/`
- 確認網站正常載入

## 🔍 常見問題排解

### ❌ main.tsx MIME 類型錯誤
**原因**：GitHub Pages 無法正確提供 TypeScript 檔案  
**解決**：GitHub Actions 會自動建構專案，確保使用編譯後的 JavaScript 檔案

### ❌ favicon.svg 404 錯誤
**原因**：檔案路徑錯誤  
**解決**：已修復為相對路徑 `./favicon.svg`

### ❌ 空白頁面
**原因**：路由或路徑問題  
**解決**：已配置 `base: './'` 和 SPA 路由支援

### ❌ 自定義網域無效
**原因**：DNS 設定錯誤或尚未生效  
**解決**：
1. 確認 DNS 設定正確
2. 等待 24-48 小時
3. 檢查 GitHub Pages 設定中的自訂網域部分

## 📁 重要檔案說明

### GitHub Actions 配置
`.github/workflows/deploy.yml`：
- 自動建構 React 應用程式
- 創建 CNAME 檔案指向 `penghu.shop`
- 部署到 GitHub Pages

### Vite 配置
`vite.config.ts`：
- 設定相對路徑 `base: './'`
- 優化建構輸出

### Package 配置
`package.json`：
- 設定 `homepage: "https://penghu.shop"`
- 包含部署腳本

## 🎉 成功指標

✅ **部署成功確認**：
- GitHub Actions 顯示綠色勾勾
- 訪問 `https://penghu.shop/` 看到網站
- 所有頁面正常載入
- 購物車和結帳功能正常

## 📞 技術支援

如果遇到問題：
1. 檢查 GitHub Actions 日誌
2. 確認 DNS 設定
3. 檢查所有設定檔是否正確
4. 等待 DNS 生效（最多 48 小時）

---

**最後更新**：2026年2月9日  
**版本**：1.0.0