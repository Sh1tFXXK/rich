# 部署到 GitHub Pages 指南

## 问题原因

GitHub Pages 部署后显示白屏的常见原因：

1. ❌ **路径配置错误** - Vite 的 `base` 路径未设置
2. ❌ **路由模式问题** - 使用了 HTML5 History 模式但未配置重定向
3. ❌ **资源路径错误** - CSS/JS 文件路径不正确

## 已修复的问题

✅ 已在 `vite.config.ts` 中添加正确的 base 路径配置：
```typescript
base: process.env.NODE_ENV === 'production' ? '/rich/' : '/'
```

✅ 已创建 GitHub Actions 自动部署工作流

## 部署步骤

### 方法 1: 使用 GitHub Actions（推荐）

#### 1. 启用 GitHub Pages

1. 进入你的 GitHub 仓库
2. 点击 **Settings** > **Pages**
3. 在 **Source** 下选择 **GitHub Actions**

#### 2. 推送代码

```bash
git add .
git commit -m "配置 GitHub Pages 部署"
git push origin main
```

#### 3. 等待部署完成

- 访问 **Actions** 标签页查看部署进度
- 部署成功后，访问：`https://你的用户名.github.io/rich/`

### 方法 2: 手动部署

#### 1. 构建项目

```bash
npm run build
```

#### 2. 部署到 gh-pages 分支

安装 gh-pages：
```bash
npm install -D gh-pages
```

添加部署脚本到 `package.json`：
```json
{
  "scripts": {
    "deploy": "npm run build && gh-pages -d dist"
  }
}
```

执行部署：
```bash
npm run deploy
```

#### 3. 配置 GitHub Pages

1. 进入仓库 **Settings** > **Pages**
2. **Source** 选择 **Deploy from a branch**
3. **Branch** 选择 **gh-pages** 和 **/ (root)**
4. 点击 **Save**

## 验证部署

访问你的网站：
```
https://你的用户名.github.io/rich/
```

例如：
```
https://sh1tfxxk.github.io/rich/
```

## 常见问题解决

### 问题 1: 页面刷新后 404

**原因**: Vue Router 使用 HTML5 History 模式，但 GitHub Pages 不支持服务端路由

**解决方案**: 添加 `public/404.html` 重定向文件

创建 `public/404.html`：
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Redirecting...</title>
    <script>
      const path = window.location.pathname.slice(1);
      if (path) {
        window.location.replace(
          window.location.origin + '/rich/#/' + path
        );
      }
    </script>
  </head>
  <body>
    Redirecting...
  </body>
</html>
```

或者，修改路由模式为 Hash 模式（在 `src/router/index.ts`）：
```typescript
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),  // 使用 Hash 模式
  routes: routes,
})
```

### 问题 2: 图片/资源加载失败

**检查资源路径**：
- ✅ 使用相对路径：`/assets/images/xxx.jpg`
- ❌ 避免绝对路径：`https://localhost:3000/assets/xxx.jpg`

**确保资源在 public 目录**：
```
public/
  assets/
    images/
      carousel-1.jpg
      hero-bg.jpg
```

### 问题 3: CSS 样式丢失

**检查 Tailwind CSS 配置**：

确保 `tailwind.config.js` 包含所有模板文件：
```javascript
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  // ...
}
```

### 问题 4: 控制台报错

打开浏览器开发者工具（F12）查看具体错误信息：
- **404 错误**: 检查资源路径
- **CORS 错误**: 检查 API 请求配置
- **JS 错误**: 检查代码兼容性

## 本地测试生产构建

在部署前，先在本地测试生产构建：

```bash
# 构建
npm run build

# 预览
npm run preview
```

访问 `http://localhost:4173/rich/` 查看效果

## 自定义域名（可选）

如果你有自己的域名：

1. 在 `public` 目录创建 `CNAME` 文件：
   ```
   your-domain.com
   ```

2. 在域名提供商处添加 DNS 记录：
   ```
   Type: CNAME
   Name: www (或 @)
   Value: 你的用户名.github.io
   ```

3. 在 GitHub Pages 设置中输入自定义域名

## 更新 vite.config.ts（如果使用自定义域名）

```typescript
export default defineConfig({
  base: process.env.NODE_ENV === 'production' 
    ? '/'  // 自定义域名使用根路径
    : '/',
  // ...
})
```

## 部署检查清单

- [ ] `vite.config.ts` 中配置了正确的 `base` 路径
- [ ] GitHub Pages 设置正确（Actions 或 gh-pages 分支）
- [ ] 所有资源文件在 `public` 目录
- [ ] 本地测试生产构建正常
- [ ] 推送代码到 GitHub
- [ ] 等待 Actions 部署完成
- [ ] 访问网站验证效果

## 快速命令

```bash
# 开发
npm run dev

# 构建
npm run build

# 预览生产构建
npm run preview

# 部署（如果使用 gh-pages）
npm run deploy

# 推送到 GitHub（触发 Actions）
git add .
git commit -m "更新网站"
git push
```

## 需要帮助？

如果部署后仍然有问题：

1. 检查 GitHub Actions 日志
2. 查看浏览器控制台错误
3. 确认 base 路径配置正确
4. 验证所有资源文件存在

当前配置的访问地址应该是：
```
https://sh1tfxxk.github.io/rich/
```

如果仓库名不是 `rich`，请修改 `vite.config.ts` 中的 base 路径！
