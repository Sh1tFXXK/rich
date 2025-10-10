<template>
  <div data-section-id="blog_footer" data-section-type="common_footer" class="bg-base-200 mt-16">
    <!-- Main Footer Content -->
    <footer class="footer footer-horizontal p-10 text-base-content">
        <!-- Blog Info -->
        <aside>
          <div class="flex items-center gap-2 mb-4">
            <div class="tech-border-gradient">
              <div class="p-2">
                <span class="iconify text-primary" data-icon="heroicons:code-bracket" data-width="32"></span>
              </div>
            </div>
            <span class="text-xl font-bold text-primary">TechBlog</span>
          </div>
          <p class="text-sm text-base-content/70 max-w-xs">
            分享前端技术、编程心得和科技趋势，<br>
            用代码创造美好世界。
          </p>
          <div class="flex gap-4 mt-4">
            <a href="https://github.com/Sh1tFXXK" target="_blank" rel="noopener noreferrer" class="text-base-content hover:text-primary smooth-transition cursor-pointer" title="GitHub">
              <span class="iconify" data-icon="mdi:github" data-width="24"></span>
            </a>
            <a class="text-base-content hover:text-primary smooth-transition cursor-pointer" title="微博">
              <span class="iconify" data-icon="mdi:sina-weibo" data-width="24"></span>
            </a>
            <a class="text-base-content hover:text-primary smooth-transition cursor-pointer" title="知乎">
              <span class="iconify" data-icon="simple-icons:zhihu" data-width="24"></span>
            </a>
            <a class="text-base-content hover:text-primary smooth-transition cursor-pointer" title="掘金">
              <span class="iconify" data-icon="simple-icons:juejin" data-width="24"></span>
            </a>
          </div>
        </aside>
    
        <!-- Quick Links -->
        <nav>
          <header class="footer-title text-base-content font-semibold">快速导航</header>
          <a onclick="navigateTo('home_page')" class="link link-hover cursor-pointer">首页</a>
          <router-link to="/article" class="link link-hover cursor-pointer">最新文章</router-link>
          <a onclick="navigateTo('category_list_page')" class="link link-hover cursor-pointer">文章分类</a>
          <a onclick="navigateTo('tag_list_page')" class="link link-hover cursor-pointer">标签云</a>
          <a onclick="navigateTo('search_results_page')" class="link link-hover cursor-pointer">站内搜索</a>
        </nav>
    
        <!-- Categories -->
        <nav>
          <header class="footer-title text-base-content font-semibold">热门分类</header>
          <a onclick="BlogUtils.filterByCategory('前端开发')" class="link link-hover cursor-pointer">前端开发</a>
          <a onclick="BlogUtils.filterByCategory('JavaScript')" class="link link-hover cursor-pointer">JavaScript</a>
          <a onclick="BlogUtils.filterByCategory('Vue.js')" class="link link-hover cursor-pointer">Vue.js</a>
          <a onclick="BlogUtils.filterByCategory('Node.js')" class="link link-hover cursor-pointer">Node.js</a>
          <a onclick="BlogUtils.filt  erByCategory('技术分享')" class="link link-hover cursor-pointer">技术分享</a>
        </nav>
    
        <!-- Contact &amp; About -->
        <nav>
          <header class="footer-title text-base-content font-semibold">关于博客</header>
          <router-link to="/about" class="link link-hover cursor-pointer">关于我</router-link>
          <a onclick="navigateTo('contact_me_page')" class="link link-hover cursor-pointer">联系我</a>
          <a onclick="navigateTo('admin_dashboard_page')" class="link link-hover cursor-pointer">管理后台</a>
          <a href="https://beian.miit.gov.cn/" target="_blank" class="link link-hover cursor-pointer">备案信息</a>
          <a class="link link-hover cursor-pointer">隐私政策</a>
        </nav>
    </footer>
    <!-- Bottom Copyright Section -->
    <footer class="footer footer-center p-6 bg-base-300 text-base-content border-t border-base-200">
      <aside>
        <p class="text-sm">
          © {{ currentYear }} TechBlog. 用 ❤️ 和 
          <span class="text-primary font-semibold">Vue.js</span> 构建 | 
          <span class="text-primary cursor-pointer hover:underline">ICP备案号</span> | 
          <span class="text-primary cursor-pointer hover:underline">站点地图</span>
        </p>
        <div class="flex items-center gap-2 mt-2 text-xs text-base-content/60">
          <span class="iconify" data-icon="heroicons:heart" data-width="14"></span>
          <span>感谢您的访问，欢迎常来逛逛！</span>
        </div>
      </aside>
    </footer>
  </div>
</template>

<script setup>
import { computed } from 'vue';
const currentYear = computed(() => new Date().getFullYear());
</script>

<style scoped>
.footer-title {
  margin-bottom: 1rem;
}
.link-hover:hover {
  color: var(--color-primary);
  text-decoration: none;
}
nav a {
  display: block;
  margin-bottom: 0.5rem;
}
.tech-border-gradient {
  background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
}
</style>