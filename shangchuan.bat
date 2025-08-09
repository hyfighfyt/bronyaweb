@echo off
set PROXY_PORT=7899

set HTTP_PROXY=http://127.0.0.1:%PROXY_PORT%
set HTTPS_PROXY=http://127.0.0.1:%PROXY_PORT%

git add .

git commit -m "自动提交网站文件"

git branch -M main

git -c http.proxy=http://127.0.0.1:%PROXY_PORT% -c https.proxy=http://127.0.0.1:%PROXY_PORT% push -u origin main

pause
