# GitHub Pages 白屏问题 - 快速修复总结

## 🔧 已修复的问题

### 1. ✅ Vite 配置 - 添加 base 路径
**文件**: `vite.config.ts`
```typescript
base: process.env.NODE_ENV === 'production' ? '/rich/' : '/'
```

### 2. ✅ 路由模式 - 改为 Hash 模式
**文件**: `src/router/index.ts`
```typescript
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: routes,
})
```

**为什么使用 Hash 模式？**
- ✅ 避免刷新页面 404 错误
- ✅ 不需要服务器配置
- ✅ GitHub Pages 完美支持
- ⚠️ URL 会有 `#` 符号（如：`/rich/#/about`）

### 3. ✅ 自动部署 - GitHub Actions
**文件**: `.github/workflows/deploy.yml`
- 自动构建和部署
- 推送代码即可触发

### 4. ✅ 手动部署脚本
**文件**: `deploy.sh`
```bash
npm run deploy
```

## 🚀 现在如何部署？

### 方法 1: 自动部署（推荐）

1. **启用 GitHub Pages**
   - 进入仓库 Settings > Pages
   - Source 选择 "GitHub Actions"

2. **推送代码**
   ```bash
   git add .
   git commit -m "修复 GitHub Pages 部署"
   git push
   ```

3. **等待部署**
   - 查看 Actions 标签页
   - 部署完成后访问：`https://sh1tfxxk.github.io/rich/`

### 方法 2: 手动部署

```bash
npm run deploy
```

## 📝 重要说明

### 仓库名称
当前配置假设你的仓库名是 `rich`。

**如果仓库名不同**，需要修改 `vite.config.ts`：
```typescript
base: process.env.NODE_ENV === 'production' ? '/你的仓库名/' : '/'
```

### 访问地址
部署后的访问地址格式：
```
https://你的用户名.github.io/仓库名/
```

例如：
```
https://sh1tfxxk.github.io/rich/
```

### URL 格式变化
使用 Hash 模式后，URL 会变成：
- 首页: `https://sh1tfxxk.github.io/rich/#/`
- 关于: `https://sh1tfxxk.github.io/rich/#/about`
- 作品集: `https://sh1tfxxk.github.io/rich/#/portfolio`
- 博客: `https://sh1tfxxk.github.io/rich/#/blog`

## 🧪 本地测试

在部署前先本地测试：

```bash
# 构建
npm run build

# 预览（会在 http://localhost:4173/rich/ 运行）
npm run preview
```

## ❓ 如果还是白屏？

### 检查清单：

1. **确认仓库名称**
   - 检查 GitHub 仓库名是否为 `rich`
   - 如果不是，修改 `vite.config.ts` 中的 base 路径

2. **检查 GitHub Pages 设置**
   - Settings > Pages
   - Source 应该是 "GitHub Actions" 或 "gh-pages branch"

3. **查看浏览器控制台**
   - 按 F12 打开开发者工具
   - 查看 Console 和 Network 标签
   - 检查是否有 404 或其他错误

4. **检查 Actions 日志**
   - 进入 Actions 标签页
   - 查看最新的部署日志
   - 确认构建成功

5. **清除缓存**
   - 按 Ctrl+Shift+R 强制刷新
   - 或在隐私模式下访问

## 🎯 下一步

1. 推送代码到 GitHub
2. 等待自动部署完成（约 2-3 分钟）
3. 访问 `https://sh1tfxxk.github.io/rich/`
4. 如果成功，你应该能看到你的网站！

## 📚 相关文档

- `DEPLOY_TO_GITHUB_PAGES.md` - 详细部署指南
- `.github/workflows/deploy.yml` - 自动部署配置
- `deploy.sh` - 手动部署脚本

## 💡 提示

如果你想要更美观的 URL（没有 `#`），可以：
1. 使用自定义域名
2. 或者部署到支持 SPA 的托管服务（如 Vercel、Netlify）

但对于 GitHub Pages，Hash 模式是最简单可靠的方案！
