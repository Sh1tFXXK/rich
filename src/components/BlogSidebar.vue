<template>
  <div data-section-id="blog_sidebar" data-section-type="common_sidebar" class="w-80 bg-base-100 border-r border-base-300 hidden lg:flex flex-col h-screen sticky top-0 overflow-y-auto">
    <!-- Sidebar Header -->
    <div class="p-6 border-b border-base-300">
      <div class="flex items-center gap-3">
        <div class="avatar placeholder inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-content">
          <span class="iconify text-lg" data-icon="heroicons:user" data-width="20"></span>
        </div>
        <div>
          <h3 class="font-semibold text-base-content">技术博主</h3>
          <p class="text-sm text-base-content/70">全栈开发者</p>
        </div>
      </div>
    </div>
    <!-- Quick Stats -->
    <div class="p-6 border-b border-base-300">
        <div class="grid grid-cols-2 gap-4">
            <div class="text-center">
                <div class="text-2xl font-bold text-primary">128</div>
                <div class="text-xs text-base-content/70">文章总数</div>
            </div>
            <div class="text-center">
                <div class="text-2xl font-bold text-secondary">1.2K</div>
                <div class="text-xs text-base-content/70">总阅读量</div>
            </div>
            <div class="text-center">
                <div class="text-2xl font-bold text-accent">15</div>
                <div class="text-xs text-base-content/70">分类数量</div>
            </div>
            <div class="text-center">
                <div class="text-2xl font-bold text-info">45</div>
                <div class="text-xs text-base-content/70">标签数量</div>
            </div>
        </div>
    </div>
    <!-- ... Rest of the sidebar HTML (Recent, Tags, Categories, Links) ... -->
    <!-- (The content is identical across pages, so copy it here once) -->
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