@echo off
echo ===================================================
echo       澎湖特產電商平台 - 自動部署小幫手
echo ===================================================
echo.
echo 正在準備部署...
echo.

REM 檢查是否安裝了 gh-pages
if not exist "node_modules\gh-pages" (
    echo 正在安裝部署工具 (gh-pages)...
    call npm install gh-pages --save-dev
)

echo.
echo 1. 正在建構網站 (Build)...
call npm run build

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo [錯誤] 建構失敗，請檢查錯誤訊息。
    pause
    exit /b
)

echo.
echo 2. 正在上傳到 GitHub Pages...
echo    (這可能需要一點時間，請耐心等待)
call npm run deploy

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo [錯誤] 部署失敗。請確認：
    echo    1. 你有設定好 git remote
    echo    2. 你有權限推送到這個儲存庫
    pause
    exit /b
)

echo.
echo ===================================================
echo [成功] 網站已部署！
echo 請等待約 2-3 分鐘後，訪問： https://penghu.shop
echo ===================================================
pause
