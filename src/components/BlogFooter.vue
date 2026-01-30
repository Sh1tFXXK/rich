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
            <span class="text-xl font-bold text-primary">WangChuang</span>
          </div>
          <p class="text-sm text-base-content/70 max-w-xs">
            分享技术、记录成长<br>
            用代码创造价值
          </p>
          <div class="flex gap-4 mt-4">
            <a href="https://github.com/Sh1tFXXK" target="_blank" rel="noopener noreferrer" class="text-base-content hover:text-primary smooth-transition cursor-pointer" title="GitHub">
              <span class="iconify" data-icon="mdi:github" data-width="24"></span>
            </a>
            <a href="https://twitter.com/your_username" target="_blank" rel="noopener noreferrer" class="text-base-content hover:text-primary smooth-transition cursor-pointer" title="Twitter/X">
              <span class="iconify" data-icon="mdi:twitter" data-width="24"></span>
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
          <router-link to="/" class="link link-hover cursor-pointer">首页</router-link>
          <router-link to="/portfolio" class="link link-hover cursor-pointer">作品集</router-link>
          <router-link to="/blog" class="link link-hover cursor-pointer">博客</router-link>
          <router-link to="/about" class="link link-hover cursor-pointer">关于我</router-link>
        </nav>
    
        <!-- Tech Stack -->
        <nav>
          <header class="footer-title text-base-content font-semibold">技术栈</header>
          <a class="link link-hover cursor-pointer">Vue.js</a>
          <a class="link link-hover cursor-pointer">React</a>
          <a class="link link-hover cursor-pointer">TypeScript</a>
          <a class="link link-hover cursor-pointer">Node.js</a>
          <a class="link link-hover cursor-pointer">Python</a>
        </nav>
    
        <!-- Contact -->
        <nav>
          <header class="footer-title text-base-content font-semibold">联系方式</header>
          <a class="link link-hover cursor-pointer">Email: contact@example.com</a>
          <a href="https://beian.miit.gov.cn/" target="_blank" class="link link-hover cursor-pointer">备案信息</a>
          <a class="link link-hover cursor-pointer">隐私政策</a>
        </nav>
    </footer>
    <!-- Bottom Copyright Section -->
    <footer class="footer footer-center p-6 bg-base-300 text-base-content border-t border-base-200">
      <aside>
        <p class="text-sm">
          © {{ currentYear }} WangChuang. 用 ❤️ 和 
          <span class="text-primary font-semibold">Vue.js</span> 构建
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