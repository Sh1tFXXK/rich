<template>
  <main class="flex-1 min-w-0 p-8">
      <section id="CategoryListMainContent">
          <!-- Breadcrumb Navigation -->
          <div class="text-sm breadcrumbs mb-6">
              <ul>
                  <li><a class="flex items-center gap-2 smooth-transition hover:text-primary" onclick="navigateTo('home_page')"><span class="iconify" data-icon="heroicons:home"></span>首页</a></li>
                  <li><span class="flex items-center gap-2 text-primary"><span class="iconify" data-icon="heroicons:folder-open"></span>文章分类</span></li>
              </ul>
          </div>

          <!-- Page Header and Actions -->
          <div class="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
              <h1 class="text-3xl font-bold text-base-content">文章分类</h1>
              <div class="flex items-center gap-4 w-full md:w-auto">
                  <div class="join w-full md:w-auto">
                      <input class="input input-bordered join-item w-full" placeholder="搜索分类...">
                      <button class="btn btn-primary join-item">
                          <span class="iconify" data-icon="heroicons:magnifying-glass" data-width="20"></span>
                      </button>
                  </div>
                  <div class="dropdown dropdown-end">
                      <div tabindex="0" role="button" class="btn btn-outline">
                          <span>排序方式</span>
                          <span class="iconify" data-icon="heroicons:chevron-down" data-width="16"></span>
                      </div>
                      <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-300 rounded-box w-52 mt-2">
                          <li><a><span class="iconify mr-2" data-icon="heroicons:bars-arrow-down"></span>按名称排序</a></li>
                          <li><a><span class="iconify mr-2" data-icon="heroicons:list-bullet"></span>按文章数量排序</a></li>
                      </ul>
                  </div>
              </div>
          </div>

          <!-- Category Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              <!-- Repeatable Category Cards -->
              <div class="card bg-base-200 shadow-lg hover:shadow-primary/20 hover:scale-[1.03] smooth-transition-long cursor-pointer" onclick="navigateTo('article_list_page')">
                  <div class="card-body flex-row items-center gap-4">
                      <span class="iconify text-primary text-4xl" data-icon="heroicons:rocket-launch"></span>
                      <div class="flex-1">
                          <h2 class="card-title text-base-content">技术动态</h2>
                          <p class="text-sm text-base-content/70">12 篇文章</p>
                      </div>
                  </div>
              </div>
              <!-- ... 其他 7 个分类卡片 ... -->
          </div>
      </section>
  </main>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  if (window.setActiveNavigation) {
    window.setActiveNavigation('category_list_page');
  }

  // Page-specific logic from original file
  const searchInput = document.querySelector('#CategoryListMainContent input[placeholder="搜索分类..."]');
  const searchButton = searchInput?.nextElementSibling;
  const handleSearch = () => {
      const query = searchInput.value.trim();
      if (query) console.log(`Searching for category: ${query}`);
  };
  searchButton?.addEventListener('click', handleSearch);
  searchInput?.addEventListener('keypress', event => { if (event.key === 'Enter') handleSearch(); });

  const sortLinks = document.querySelectorAll('#CategoryListMainContent .dropdown-content a');
  sortLinks.forEach(link => {
      link.addEventListener('click', () => {
          console.log(`Sorting by: ${link.textContent.trim()}`);
          if (document.activeElement) document.activeElement.blur();
      });
  });
});
</script>

<style scoped>
#CategoryListMainContent {
    animation: fadeIn 0.6s ease-out forwards;
}
.card-body {
    padding: 1.5rem;
}
</style>