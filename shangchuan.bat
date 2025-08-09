@echo off
REM 配置代理端口，修改下面端口号即可
set PROXY_PORT=7899

REM 配置代理地址
set HTTP_PROXY=http://127.0.0.1:%PROXY_PORT%
set HTTPS_PROXY=http://127.0.0.1:%PROXY_PORT%

REM 配置 Git 使用代理
git config http.proxy %HTTP_PROXY%
git config https.proxy %HTTPS_PROXY%

REM 尝试移除 shangchuan.bat 缓存，忽略错误
git rm --cached shangchuan.bat 2>nul

REM 先暂存所有更改
git add .

REM 自动生成提交信息，时间戳
set TIMESTAMP=%date% %time%
git commit -m "自动更新提交 %TIMESTAMP%"

REM 拉取远程最新代码并合并
git pull origin main --rebase --autostash

REM 强制推送到远程 main 分支
git push -f origin main

echo 更新完成！
pause
