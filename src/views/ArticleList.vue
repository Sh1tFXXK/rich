<template>
  <main class="flex-1 w-full">
    <section
      id="ArticleBannerSection"
      class="relative h-80 bg-base-300 flex items-center justify-center text-center overflow-hidden"
    >
      <video
        autoplay
        muted
        loop
        playsinline
        crossorigin="anonymous"
        class="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source :src="previewVideo" type="video/mp4" />
        <img
          :src="heroBgImage"
          alt="Background"
          class="absolute inset-0 w-full h-full object-cover"
        />
      </video>

      <div class="relative z-20 px-4 text-white">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">博客文章</h1>
        <p class="text-lg md:text-xl text-base-content/80 max-w-2xl mx-auto animate-fade-in-up">
          记录技术成长，分享开发经验
        </p>
      </div>
    </section>

    <div class="container mx-auto px-4 lg:px-8 py-12">
      <section
        id="ArticleFilterAndSortSection"
        class="bg-base-200 p-4 rounded-box mb-8 sticky top-[80px] z-40 shadow-lg"
      >
        <div class="flex flex-col md:flex-row items-center justify-between gap-4">
          <div class="text-sm text-base-content/70">
            共 <span class="font-semibold text-primary">24</span> 篇文章
          </div>

          <div class="dropdown">
            <button tabindex="0" role="button" class="btn btn-ghost">
              <span class="iconify" data-icon="heroicons:arrows-up-down" data-width="20"></span>
              <span>按最新发布</span>
              <span class="iconify" data-icon="heroicons:chevron-down" data-width="16"></span>
            </button>
            <ul
              tabindex="0"
              class="dropdown-content z-[1] menu p-2 shadow bg-base-300 rounded-box w-52"
            >
              <li><a>按最新发布</a></li>
              <li><a>按阅读最多</a></li>
            </ul>
          </div>
        </div>
      </section>

      <section id="ArticleListSection">
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          <!-- Repeatable Article Card -->
          <div
            v-for="i in 6"
            :key="i"
            data-repeatable="true"
            class="card bg-base-200 shadow-lg smooth-transition hover:shadow-primary/20 hover:-translate-y-1 cursor-pointer"
          >
            <figure>
              <img
                alt="文章封面"
                class="aspect-video object-cover"
                :src="heroBgImage"
              />
            </figure>
            <div class="card-body p-6">
              <h4 class="card-title text-base-content">探索人工智能的未来趋势</h4>
              <p class="text-base-content/70 text-sm line-clamp-2 mt-2">
                本文深入探讨了当前人工智能领域的前沿技术，并对未来的发展方向进行了预测分析。
              </p>
              <div class="flex flex-wrap gap-2 mt-4">
                <div class="badge badge-outline badge-primary badge-sm">人工智能</div>
                <div class="badge badge-outline badge-secondary badge-sm">科技</div>
              </div>
              <div class="divider my-4"></div>
              <div class="flex justify-between items-center text-xs text-base-content/60">
                <div class="flex items-center gap-1">
                  <span class="iconify" data-icon="heroicons:calendar-days" data-width="14"></span>
                  <span>2025年1月{{ 10 + i }}日</span>
                </div>
                <div class="flex items-center gap-1">
                  <span class="iconify" data-icon="heroicons:eye" data-width="14"></span>
                  <span>{{ 1.2 + i * 0.3 }}k 阅读</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="PaginationSection" class="flex justify-center mt-12">
        <div class="join">
          <button class="join-item btn">
            <span class="iconify" data-icon="heroicons:chevron-left" data-width="16"></span>
            <span>上一页</span>
          </button>
          <button class="join-item btn">1</button>
          <button class="join-item btn btn-primary">2</button>
          <button class="join-item btn">3</button>
          <button class="join-item btn btn-disabled">...</button>
          <button class="join-item btn">10</button>
          <button class="join-item btn">
            <span>下一页</span>
            <span class="iconify" data-icon="heroicons:chevron-right" data-width="16"></span>
          </button>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup>
import { onMounted } from 'vue'

// Import images using Vite's asset handling
import heroBgImage from '/assets/images/hero-bg.jpg'
import previewVideo from '/assets/video/97ba6b60662ab4f31ef06cdf5a5f8e94_preview.mp4'

onMounted(() => {
  const filterBar = document.getElementById('ArticleFilterAndSortSection')
  if (filterBar) {
    const observer = new IntersectionObserver(
      ([e]) => e.target.classList.toggle('shadow-2xl', e.intersectionRatio < 1),
      { threshold: [1] },
    )
    observer.observe(filterBar)
  }
})
</script>

<style scoped>
.animate-fade-in-down {
  animation: fade-in-down 0.6s ease-out forwards;
}
.animate-fade-in-up {
  animation: fade-in-up 0.6s ease-out 0.3s forwards;
  opacity: 0;
}
#ArticleFilterAndSortSection {
  transition: box-shadow 0.3s ease;
}
</style>
