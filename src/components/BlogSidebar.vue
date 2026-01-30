<template>
  <div data-section-id="blog_sidebar" data-section-type="common_sidebar" class="w-80 bg-base-100 border-r border-base-300 hidden lg:flex flex-col h-screen sticky top-0 overflow-y-auto">
    <!-- Sidebar Header -->
    <div class="p-6 border-b border-base-300">
      <div class="flex items-center gap-3">
        <div class="avatar placeholder inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-content">
          <span class="iconify text-lg" data-icon="heroicons:user" data-width="20"></span>
        </div>
        <div>
          <h3 class="font-semibold text-base-content">WangChuang</h3>
          <p class="text-sm text-base-content/70">全栈开发者</p>
        </div>
      </div>
    </div>

    <!-- Quick Navigation -->
    <div class="p-6 border-b border-base-300">
      <h3 class="font-semibold text-base-content mb-4 flex items-center gap-2">
        <span class="iconify" data-icon="heroicons:squares-2x2" data-width="20"></span>
        快速导航
      </h3>
      <div class="space-y-2">
        <router-link to="/" class="flex items-center gap-3 p-3 rounded-lg hover:bg-base-200 transition-colors">
          <span class="iconify text-primary" data-icon="heroicons:home" data-width="20"></span>
          <span>首页</span>
        </router-link>
        <router-link to="/portfolio" class="flex items-center gap-3 p-3 rounded-lg hover:bg-base-200 transition-colors">
          <span class="iconify text-secondary" data-icon="heroicons:briefcase" data-width="20"></span>
          <span>作品集</span>
        </router-link>
        <router-link to="/blog" class="flex items-center gap-3 p-3 rounded-lg hover:bg-base-200 transition-colors">
          <span class="iconify text-accent" data-icon="heroicons:document-text" data-width="20"></span>
          <span>博客</span>
        </router-link>
        <router-link to="/about" class="flex items-center gap-3 p-3 rounded-lg hover:bg-base-200 transition-colors">
          <span class="iconify text-info" data-icon="heroicons:user-circle" data-width="20"></span>
          <span>关于我</span>
        </router-link>
      </div>
    </div>

    <!-- Tech Stack -->
    <div class="p-6 border-b border-base-300">
      <h3 class="font-semibold text-base-content mb-4 flex items-center gap-2">
        <span class="iconify" data-icon="heroicons:code-bracket" data-width="20"></span>
        技术栈
      </h3>
      <div class="flex flex-wrap gap-2">
        <span class="badge badge-outline hover:badge-primary cursor-pointer smooth-transition">Vue.js</span>
        <span class="badge badge-outline hover:badge-primary cursor-pointer smooth-transition">React</span>
        <span class="badge badge-outline hover:badge-primary cursor-pointer smooth-transition">TypeScript</span>
        <span class="badge badge-outline hover:badge-primary cursor-pointer smooth-transition">Node.js</span>
        <span class="badge badge-outline hover:badge-primary cursor-pointer smooth-transition">Python</span>
        <span class="badge badge-outline hover:badge-primary cursor-pointer smooth-transition">Docker</span>
      </div>
    </div>

    <!-- Social Links -->
    <div class="p-6">
      <h3 class="font-semibold text-base-content mb-4 flex items-center gap-2">
        <span class="iconify" data-icon="heroicons:link" data-width="20"></span>
        社交媒体
      </h3>
      <div class="space-y-2">
        <a href="https://github.com/Sh1tFXXK" target="_blank" rel="noopener noreferrer" class="flex items-center gap-3 p-2 rounded-lg hover:bg-base-200 transition-colors">
          <span class="iconify" data-icon="mdi:github" data-width="20"></span>
          <span class="text-sm">GitHub</span>
        </a>
        <a href="https://twitter.com/your_username" target="_blank" rel="noopener noreferrer" class="flex items-center gap-3 p-2 rounded-lg hover:bg-base-200 transition-colors">
          <span class="iconify" data-icon="mdi:twitter" data-width="20"></span>
          <span class="text-sm">Twitter/X</span>
        </a>
        <a class="flex items-center gap-3 p-2 rounded-lg hover:bg-base-200 transition-colors cursor-pointer">
          <span class="iconify" data-icon="mdi:sina-weibo" data-width="20"></span>
          <span class="text-sm">微博</span>
        </a>
        <a class="flex items-center gap-3 p-2 rounded-lg hover:bg-base-200 transition-colors cursor-pointer">
          <span class="iconify" data-icon="simple-icons:zhihu" data-width="20"></span>
          <span class="text-sm">知乎</span>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
div::-webkit-scrollbar {
  width: 4px;
}
div::-webkit-scrollbar-track {
  background: var(--color-base-200);
}
div::-webkit-scrollbar-thumb {
  background: var(--color-base-300);
  border-radius: 2px;
}
div::-webkit-scrollbar-thumb:hover {
  background: var(--color-primary);
}
</style>