<template>
  <main class="flex-1 bg-base-100">
      <section id="TagListPageContainer" class="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <!-- Breadcrumbs -->
          <div class="text-sm breadcrumbs mb-6">
              <ul>
                  <li><a onclick="navigateTo('home_page')" class="flex items-center gap-2 text-base-content/70 hover:text-primary smooth-transition"><span class="iconify" data-icon="heroicons:home" data-width="16"></span>首页</a></li>
                  <li><span class="flex items-center gap-2"><span class="iconify" data-icon="heroicons:tag" data-width="16"></span>标签列表</span></li>
              </ul>
          </div>
      
          <div class="text-center mb-12">
              <h1 class="text-4xl font-bold tracking-tight text-base-content">所有标签</h1>
              <p class="mt-4 text-base-content/70 max-w-2xl mx-auto">探索博客中的热门话题与技术关键词，点击任意标签，发现更多相关内容。</p>
          </div>
      
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <!-- Tag Cloud Section -->
              <div class="lg:col-span-2 card bg-base-200/50 shadow-xl relative overflow-hidden min-h-[500px] flex items-center justify-center p-8" style="background-image: url('https://placehold.co/1200x800.png?text=Abstract+Tech+Background')">
                  <div class="absolute inset-0 bg-base-200/80 backdrop-blur-sm"></div>
                  <div id="tag-cloud-container" class="relative z-10 w-full h-full flex justify-center items-center flex-wrap gap-x-4 gap-y-2">
                      <!-- Tags will be dynamically inserted here -->
                      <div class="skeleton h-8 w-24"></div>
                      <div class="skeleton h-12 w-32"></div>
                  </div>
              </div>
      
              <!-- Popular Tags List Section -->
              <div class="lg:col-span-1 card bg-base-200 shadow-xl">
                  <div class="card-body">
                      <h2 class="card-title text-xl mb-4 flex items-center gap-2"><span class="iconify text-primary" data-icon="heroicons:fire-solid" data-width="24"></span>热门标签</h2>
                      <div class="flex items-center justify-between mb-4 border-b border-base-300 pb-2">
                          <span class="text-sm text-base-content/60">排序方式:</span>
                          <div class="join">
                              <button id="sort-by-popularity" class="btn btn-xs join-item btn-active">按热度</button>
                              <button id="sort-by-name" class="btn btn-xs join-item">按名称</button>
                          </div>
                      </div>
                      <div id="popular-tags-list" class="space-y-2">
                          <!-- Skeleton loaders -->
                          <div class="flex items-center justify-between p-2 rounded-lg"><div class="skeleton h-4 w-2/3"></div><div class="skeleton h-4 w-1/4"></div></div>
                          <div class="flex items-center justify-between p-2 rounded-lg"><div class="skeleton h-4 w-1/2"></div><div class="skeleton h-4 w-1/4"></div></div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  </main>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  if (window.setActiveNavigation) {
    window.setActiveNavigation('tag_list_page');
  }

  // Mock tag data from original file
  const mockTags = [
      { name: 'JavaScript', count: 112 }, { name: 'React', count: 98 }, { name: 'Node.js', count: 85 },
      { name: 'CSS', count: 72 }, { name: 'TailwindCSS', count: 65 }, { name: 'Vue.js', count: 58 },
      { name: 'TypeScript', count: 55 }, { name: 'Web性能优化', count: 43 }, { name: 'Docker', count: 39 },
      { name: 'DevOps', count: 35 }, { name: '前端工程化', count: 31 }, { name: 'Webpack', count: 28 },
      { name: 'Next.js', count: 25 }, { name: '数据库', count: 22 }, { name: '算法', count: 19 },
      { name: '设计模式', count: 15 }, { name: 'Python', count: 12 }, { name: '人工智能', count: 9 },
  ];

  const tagCloudContainer = document.getElementById('tag-cloud-container');
  const popularTagsList = document.getElementById('popular-tags-list');
  const sortByPopularityBtn = document.getElementById('sort-by-popularity');
  const sortByNameBtn = document.getElementById('sort-by-name');

  function getTagSizeClass(count) {
      if (count > 100) return 'tag-size-5'; if (count > 70) return 'tag-size-4';
      if (count > 40) return 'tag-size-3'; if (count > 20) return 'tag-size-2';
      return 'tag-size-1';
  }

  function renderTagCloud(tags) {
      if (!tagCloudContainer) return;
      tagCloudContainer.innerHTML = '';
      tags.forEach(tag => {
          const tagEl = document.createElement('a');
          tagEl.onclick = () => navigateTo('article_list_page');
          tagEl.className = `tag-item ${getTagSizeClass(tag.count)} bg-base-300/50 text-base-content/80`;
          tagEl.textContent = `# ${tag.name}`;
          tagEl.style.animationDelay = `${Math.random() * 5}s`;
          tagCloudContainer.appendChild(tagEl);
      });
  }

  function renderPopularTags(tags) {
      if (!popularTagsList) return;
      popularTagsList.innerHTML = '';
      tags.slice(0, 10).forEach(tag => {
          const item = document.createElement('div');
          item.className = 'flex justify-between items-center p-2 rounded-lg hover:bg-base-300/70 smooth-transition';
          item.innerHTML = `<a onclick="navigateTo('article_list_page')" class="text-base-content hover:text-primary cursor-pointer">${tag.name}</a><div class="badge badge-primary badge-outline">${tag.count}</div>`;
          popularTagsList.appendChild(item);
      });
  }
  
  let currentSort = 'popularity';
  function sortAndRender() {
      let sortedTags;
      if (currentSort === 'popularity') {
          sortedTags = [...mockTags].sort((a, b) => b.count - a.count);
          sortByPopularityBtn?.classList.add('btn-active');
          sortByNameBtn?.classList.remove('btn-active');
      } else {
          sortedTags = [...mockTags].sort((a, b) => a.name.localeCompare(b.name, 'zh-CN'));
          sortByNameBtn?.classList.add('btn-active');
          sortByPopularityBtn?.classList.remove('btn-active');
      }
      renderPopularTags(sortedTags);
  }
  
  sortByPopularityBtn?.addEventListener('click', () => { currentSort = 'popularity'; sortAndRender(); });
  sortByNameBtn?.addEventListener('click', () => { currentSort = 'name'; sortAndRender(); });

  setTimeout(() => {
      renderTagCloud(mockTags);
      sortAndRender();
  }, 1000);
});
</script>

<style scoped>
.tag-item {
  display: inline-block;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: var(--radius-field);
  font-weight: 500;
  animation: float 6s ease-in-out infinite;
  transition: transform 0.3s ease, color 0.3s ease, text-shadow 0.3s ease, box-shadow 0.3s ease;
  will-change: transform;
}
.tag-item:hover {
  transform: scale(1.15) translateY(-5px);
  color: var(--color-primary);
  text-shadow: 0 0 15px var(--color-primary);
  box-shadow: 0 0 20px rgba(59, 130, 246, 0.4);
  animation-play-state: paused;
  z-index: 10;
}
.tag-size-1 { font-size: 0.875rem; }
.tag-size-2 { font-size: 1rem; }
.tag-size-3 { font-size: 1.25rem; }
.tag-size-4 { font-size: 1.5rem; }
.tag-size-5 { font-size: 1.875rem; }
</style>