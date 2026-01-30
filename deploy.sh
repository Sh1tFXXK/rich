#!/usr/bin/env sh

# 发生错误时终止
set -e

# 构建
echo "🔨 Building..."
npm run build

# 进入构建文件夹
cd dist

# 如果你要部署到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果你要部署到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git main:gh-pages
git push -f git@github.com:Sh1tFXXK/rich.git main:gh-pages

cd -

echo "✅ Deploy complete!"
echo "🌐 Visit: https://sh1tfxxk.github.io/rich/"
