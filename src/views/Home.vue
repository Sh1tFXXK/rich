<template>
  <!--
    主内容区域。flex-1 让它能自动填充 Header 和 Footer 之间的所有可用空间。
    Header, Footer 都已在 App.vue 中被抽离为公共组件。
    这个 main 标签内是所有仅属于首页的内容。
  -->
  <main class="flex-1">
    <!-- Hero Section -->
    <!-- Hero Section -->
    <section id="hero-section" class="hero min-h-screen relative overflow-hidden">
      <!-- Video Background -->
      <video
        autoplay
        muted
        loop
        playsinline
        class="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/assets/video/moutainFreevideoonPixabay.mp4" type="video/mp4" />
        <!-- Fallback image if video fails to load -->
        <img
          src="/assets/images/hero-bg.jpg"
          alt="Background"
          class="absolute inset-0 w-full h-full object-cover"
        />
      </video>
      <!-- SVG Decorative Wave -->
      <svg class="absolute bottom-0 left-0 w-full h-32 opacity-20 z-10" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,80 1440,60 L1440,120 L0,120 Z" fill="url(#homeWaveGradient1)"/>
        <path d="M0,80 C240,40 480,100 720,60 C960,20 1200,80 1440,40 L1440,120 L0,120 Z" fill="url(#homeWaveGradient2)" opacity="0.6"/>
        <defs>
          <linearGradient id="homeWaveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color:#06b6d4;stop-opacity:0.8" />
            <stop offset="50%" style="stop-color:#3b82f6;stop-opacity:0.6" />
            <stop offset="100%" style="stop-color:#a855f7;stop-opacity:0.8" />
          </linearGradient>
          <linearGradient id="homeWaveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color:#a855f7;stop-opacity:0.5" />
            <stop offset="100%" style="stop-color:#06b6d4;stop-opacity:0.3" />
          </linearGradient>
        </defs>
      </svg>
      <!-- SVG Geometric Decorations -->
      <svg class="absolute top-20 left-10 w-24 h-24 opacity-15 z-10" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="45" stroke="url(#homeCircleGrad)" stroke-width="2" fill="none"/>
        <circle cx="50" cy="50" r="35" stroke="url(#homeCircleGrad)" stroke-width="1.5" fill="none" opacity="0.6"/>
        <circle cx="50" cy="50" r="25" fill="url(#homeCircleGrad)" opacity="0.2"/>
        <defs>
          <linearGradient id="homeCircleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#06b6d4" />
            <stop offset="100%" style="stop-color:#a855f7" />
          </linearGradient>
        </defs>
      </svg>
      <svg class="absolute top-32 right-16 w-20 h-20 opacity-15 z-10" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="50,5 95,50 50,95 5,50" stroke="url(#homeDiamondGrad)" stroke-width="2" fill="none"/>
        <polygon points="50,20 80,50 50,80 20,50" stroke="url(#homeDiamondGrad)" stroke-width="1.5" fill="none" opacity="0.6"/>
        <defs>
          <linearGradient id="homeDiamondGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#3b82f6" />
            <stop offset="100%" style="stop-color:#06b6d4" />
          </linearGradient>
        </defs>
      </svg>
      <!-- Overlay -->
      <div class="hero-content text-center text-base-content relative z-20">
        <div class="max-w-4xl">
          <h1
            class="mb-8 text-8xl font-black bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent italic tracking-wider drop-shadow-[0_0_30px_rgba(59,130,246,0.8)] hover:drop-shadow-[0_0_50px_rgba(168,85,247,0.9)] transition-all duration-500 hover:scale-110 cursor-default"
            style="font-family: 'Times New Roman', Georgia, serif; text-shadow: 0 0 40px rgba(99,102,241,0.6), 0 0 80px rgba(168,85,247,0.4);"
          >
            WangChuang
          </h1>
          <p class="mb-8 text-xl text-base-content/80 max-w-2xl mx-auto">
            最新技术洞察、编程实践与深度解析
          </p>
          <!-- Search Bar -->
          <div class="join mb-8 max-w-lg mx-auto tech-glow">
            <form class="join w-full" onsubmit="return BlogUtils.handleSearch(this)">
              <input
                type="text"
                name="query"
                placeholder="搜索文章、技术、话题..."
                class="input input-bordered join-item flex-1 bg-base-100/90 backdrop-blur-sm border-primary/30 focus:border-primary focus:outline-none"
              />
              <button type="submit" class="btn btn-primary join-item">
                <span class="iconify" data-icon="heroicons:magnifying-glass" data-width="20"></span>
                搜索
              </button>
            </form>
          </div>
        </div>
      </div>
      <!-- Animated Stars -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none z-15">
        <div class="star star-1"></div>
        <div class="star star-2"></div>
        <div class="star star-3"></div>
        <div class="star star-4"></div>
        <div class="star star-5"></div>
      </div>
    </section>

    <!-- Latest Articles and Sidebar -->
    <section id="latest-articles-sidebar" class="py-16 bg-base-100">
      <div class="container mx-auto px-8">
        <div class="flex flex-col lg:flex-row gap-8">
          <!-- Main Content - Latest Articles -->
          <div class="flex-1 lg:w-2/3">
            <div class="flex items-center gap-4 mb-8">
              <h2 class="text-3xl font-bold text-base-content">最新文章</h2>
              <div class="h-px bg-gradient-to-r from-primary to-transparent flex-1"></div>
            </div>
            <!-- Article Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <!-- Article Card 1 -->
              <article
                data-repeatable="true"
                class="blog-card p-6 smooth-transition hover:tech-glow cursor-pointer"
                onclick="navigateTo('article_detail_page')"
              >
                <figure class="mb-4">
                  <img
                    alt="Vue.js 3 Composition API深度解析"
                    class="w-full h-48 object-cover rounded-lg"
                    src="/assets/images/carousel-1.jpg"
                  />
                </figure>
                <div class="space-y-3">
                  <div class="flex items-center gap-2">
                    <span class="badge badge-primary badge-sm">前端开发</span
                    ><span class="text-sm text-base-content/60">2025年1月15日</span>
                  </div>
                  <h3
                    class="text-xl font-semibold text-base-content hover:text-primary smooth-transition"
                  >
                    Vue.js 3 Composition API深度解析
                  </h3>
                  <p class="text-base-content/70 line-clamp-3">
                    深入探讨Vue.js 3中Composition
                    API的设计理念、使用方法和最佳实践，帮助开发者更好地理解和应用这一强大的新特性...
                  </p>
                  <div class="flex items-center justify-between text-sm text-base-content/60">
                    <span class="flex items-center gap-1"
                      ><span class="iconify" data-icon="heroicons:eye" data-width="16"></span> 1,234
                      阅读 </span
                    ><span>8 分钟阅读</span>
                  </div>
                </div>
              </article>
              <!-- Article Card 2 -->
              <article
                data-repeatable="true"
                class="blog-card p-6 smooth-transition hover:tech-glow cursor-pointer"
                onclick="navigateTo('article_detail_page')"
              >
                <figure class="mb-4">
                  <img
                    alt="Node.js性能优化实战指南"
                    class="w-full h-48 object-cover rounded-lg"
                    src="/assets/images/carousel-1.jpg"
                  />
                </figure>
                <div class="space-y-3">
                  <div class="flex items-center gap-2">
                    <span class="badge badge-secondary badge-sm">后端开发</span
                    ><span class="text-sm text-base-content/60">2025年1月12日</span>
                  </div>
                  <h3
                    class="text-xl font-semibold text-base-content hover:text-primary smooth-transition"
                  >
                    Node.js性能优化实战指南
                  </h3>
                  <p class="text-base-content/70 line-clamp-3">
                    从内存管理到异步处理，全面解析Node.js应用性能优化的关键技术和实践方法，提升应用响应速度和并发处理能力...
                  </p>
                  <div class="flex items-center justify-between text-sm text-base-content/60">
                    <span class="flex items-center gap-1"
                      ><span class="iconify" data-icon="heroicons:eye" data-width="16"></span> 987
                      阅读 </span
                    ><span>12 分钟阅读</span>
                  </div>
                </div>
              </article>
              <!-- Article Card 3 -->
              <article
                data-repeatable="true"
                class="blog-card p-6 smooth-transition hover:tech-glow cursor-pointer"
                onclick="navigateTo('article_detail_page')"
              >
                <figure class="mb-4">
                  <img
                    alt="React Hooks最佳实践"
                    class="w-full h-48 object-cover rounded-lg"
                    src="/assets/images/carousel-1.jpg"
                  />
                </figure>
                <div class="space-y-3">
                  <div class="flex items-center gap-2">
                    <span class="badge badge-accent badge-sm">React</span
                    ><span class="text-sm text-base-content/60">2025年1月10日</span>
                  </div>
                  <h3
                    class="text-xl font-semibold text-base-content hover:text-primary smooth-transition"
                  >
                    React Hooks最佳实践
                  </h3>
                  <p class="text-base-content/70 line-clamp-3">
                    掌握React
                    Hooks的核心概念和高级用法，避免常见陷阱，构建更加优雅和高效的React应用程序...
                  </p>
                  <div class="flex items-center justify-between text-sm text-base-content/60">
                    <span class="flex items-center gap-1"
                      ><span class="iconify" data-icon="heroicons:eye" data-width="16"></span> 1,567
                      阅读 </span
                    ><span>10 分钟阅读</span>
                  </div>
                </div>
              </article>
              <!-- Article Card 4 -->
              <article
                data-repeatable="true"
                class="blog-card p-6 smooth-transition hover:tech-glow cursor-pointer"
                onclick="navigateTo('article_detail_page')"
              >
                <figure class="mb-4">
                  <img
                    alt="TypeScript高级类型系统"
                    class="w-full h-48 object-cover rounded-lg"
                    src="/assets/images/carousel-1.jpg"
                  />
                </figure>
                <div class="space-y-3">
                  <div class="flex items-center gap-2">
                    <span class="badge badge-info badge-sm">TypeScript</span
                    ><span class="text-sm text-base-content/60">2025年1月8日</span>
                  </div>
                  <h3
                    class="text-xl font-semibold text-base-content hover:text-primary smooth-transition"
                  >
                    TypeScript高级类型系统
                  </h3>
                  <p class="text-base-content/70 line-clamp-3">
                    深入理解TypeScript的高级类型特性，包括条件类型、映射类型和模板字面量类型，提升代码的类型安全性...
                  </p>
                  <div class="flex items-center justify-between text-sm text-base-content/60">
                    <span class="flex items-center gap-1"
                      ><span class="iconify" data-icon="heroicons:eye" data-width="16"></span> 892
                      阅读 </span
                    ><span>15 分钟阅读</span>
                  </div>
                </div>
              </article>
            </div>
          </div>
          <!-- Sidebar -->
          <aside class="lg:w-1/3">
            <div class="space-y-8">
              <!-- Author Info -->
              <div class="blog-card p-6">
                <div class="flex items-center gap-4 mb-4">
                  <div
                    class="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-content text-xl font-bold"
                  >
                    王子牙
                  </div>
                  <div>
                    <h3 class="font-semibold text-base-content">TechBlogger</h3>
                    <p class="text-sm text-base-content/60">全栈开发工程师</p>
                  </div>
                </div>
                <p class="text-sm text-base-content/70 mb-4">
                  专注于现代Web技术栈，分享实用的开发经验和技术洞察。
                </p>
                <button class="btn btn-primary btn-sm w-full" @click="$router.push('/about')">
                  了解更多
                </button>
              </div>
              <!-- Recent Articles -->
              <div class="blog-card p-6">
                <h3 class="font-semibold text-base-content mb-4 flex items-center gap-2">
                  <span class="iconify" data-icon="heroicons:clock" data-width="20"></span>
                  最近文章
                </h3>
                <div class="space-y-3">
                  <div
                    class="flex gap-3 cursor-pointer hover:bg-base-200/50 p-2 rounded smooth-transition"
                    onclick="navigateTo('article_detail_page')"
                  >
                    <img
                      alt="JavaScript异步编程"
                      class="w-12 h-12 rounded object-cover"
                      src="/assets/images/preview.jpg"
                    />
                    <div class="flex-1">
                      <h4 class="text-sm font-medium text-base-content line-clamp-2">
                        JavaScript异步编程深度解析
                      </h4>
                      <p class="text-xs text-base-content/60">1月5日</p>
                    </div>
                  </div>
                  <div
                    class="flex gap-3 cursor-pointer hover:bg-base-200/50 p-2 rounded smooth-transition"
                    onclick="navigateTo('article_detail_page')"
                  >
                    <img
                      alt="CSS Grid布局"
                      class="w-12 h-12 rounded object-cover"
                      src="/assets/images/preview.jpg"
                    />
                    <div class="flex-1">
                      <h4 class="text-sm font-medium text-base-content line-clamp-2">
                        CSS Grid布局完全指南
                      </h4>
                      <p class="text-xs text-base-content/60">1月3日</p>
                    </div>
                  </div>
                  <div
                    class="flex gap-3 cursor-pointer hover:bg-base-200/50 p-2 rounded smooth-transition"
                    onclick="navigateTo('article_detail_page')"
                  >
                    <img
                      alt="RESTful API设计"
                      class="w-12 h-12 rounded object-cover"
                      src="/assets/images/preview.jpg"
                    />
                    <div class="flex-1">
                      <h4 class="text-sm font-medium text-base-content line-clamp-2">
                        RESTful API设计最佳实践
                      </h4>
                      <p class="text-xs text-base-content/60">12月30日</p>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Popular Tags -->
              <div class="blog-card p-6">
                <h3 class="font-semibold text-base-content mb-4 flex items-center gap-2">
                  <span class="iconify" data-icon="heroicons:hashtag" data-width="20"></span>
                  热门标签
                </h3>
                <div class="flex flex-wrap gap-2">
                  <span
                    class="badge badge-outline hover:badge-primary cursor-pointer smooth-transition"
                    onclick="navigateTo('tag_list_page')"
                    >JavaScript</span
                  ><span
                    class="badge badge-outline hover:badge-primary cursor-pointer smooth-transition"
                    onclick="navigateTo('tag_list_page')"
                    >Vue.js</span
                  ><span
                    class="badge badge-outline hover:badge-primary cursor-pointer smooth-transition"
                    onclick="navigateTo('tag_list_page')"
                    >React</span
                  ><span
                    class="badge badge-outline hover:badge-primary cursor-pointer smooth-transition"
                    onclick="navigateTo('tag_list_page')"
                    >Node.js</span
                  ><span
                    class="badge badge-outline hover:badge-primary cursor-pointer smooth-transition"
                    onclick="navigateTo('tag_list_page')"
                    >TypeScript</span
                  ><span
                    class="badge badge-outline hover:badge-primary cursor-pointer smooth-transition"
                    onclick="navigateTo('tag_list_page')"
                    >CSS</span
                  ><span
                    class="badge badge-outline hover:badge-primary cursor-pointer smooth-transition"
                    onclick="navigateTo('tag_list_page')"
                    >前端框架</span
                  ><span
                    class="badge badge-outline hover:badge-primary cursor-pointer smooth-transition"
                    onclick="navigateTo('tag_list_page')"
                    >性能优化</span
                  >
                </div>
              </div>
              <!-- Categories -->
              <div class="blog-card p-6">
                <h3 class="font-semibold text-base-content mb-4 flex items-center gap-2">
                  <span class="iconify" data-icon="heroicons:folder" data-width="20"></span>
                  文章分类
                </h3>
                <div class="space-y-2">
                  <div
                    class="flex items-center justify-between cursor-pointer hover:text-primary smooth-transition"
                    onclick="navigateTo('category_list_page')"
                  >
                    <span class="text-sm">前端开发</span><span class="badge badge-sm">24</span>
                  </div>
                  <div
                    class="flex items-center justify-between cursor-pointer hover:text-primary smooth-transition"
                    onclick="navigateTo('category_list_page')"
                  >
                    <span class="text-sm">后端开发</span><span class="badge badge-sm">18</span>
                  </div>
                  <div
                    class="flex items-center justify-between cursor-pointer hover:text-primary smooth-transition"
                    onclick="navigateTo('category_list_page')"
                  >
                    <span class="text-sm">技术分享</span><span class="badge badge-sm">12</span>
                  </div>
                  <div
                    class="flex items-center justify-between cursor-pointer hover:text-primary smooth-transition"
                    onclick="navigateTo('category_list_page')"
                  >
                    <span class="text-sm">工具推荐</span><span class="badge badge-sm">8</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>

    <!-- Portfolio Preview Section -->
    <section id="portfolio-preview" class="py-16 bg-base-200">
      <div class="container mx-auto px-8">
        <div class="flex items-center justify-between mb-8">
          <div class="flex items-center gap-4">
            <h2 class="text-3xl font-bold text-base-content">精选作品</h2>
            <div class="h-px bg-gradient-to-r from-primary to-transparent flex-1 w-32"></div>
          </div>
          <router-link to="/portfolio" class="btn btn-outline btn-primary">
            查看全部
            <span class="iconify ml-2" data-icon="heroicons:arrow-right" data-width="20"></span>
          </router-link>
        </div>
        <!-- Portfolio Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Portfolio Item 1 -->
          <article class="group relative overflow-hidden rounded-2xl bg-base-100 hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer" onclick="navigateTo('portfolio')">
            <div class="relative h-48 overflow-hidden">
              <img src="/assets/images/carousel-1.jpg" alt="电商平台" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div class="absolute inset-0 bg-gradient-to-t from-base-100 via-transparent to-transparent opacity-60"></div>
              <div class="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span class="text-white text-lg font-semibold flex items-center gap-2">
                  <span class="iconify" data-icon="heroicons:eye" data-width="24"></span>
                  查看详情
                </span>
              </div>
            </div>
            <div class="p-6">
              <span class="badge badge-primary badge-sm mb-2">前端开发</span>
              <h3 class="text-xl font-bold text-base-content mb-2 group-hover:text-primary transition-colors">电商平台前端重构</h3>
              <p class="text-base-content/70 text-sm line-clamp-2">使用 Vue 3 + TypeScript 重构大型电商平台前端，提升性能 40%</p>
            </div>
          </article>
          <!-- Portfolio Item 2 -->
          <article class="group relative overflow-hidden rounded-2xl bg-base-100 hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer" onclick="navigateTo('portfolio')">
            <div class="relative h-48 overflow-hidden">
              <img src="/assets/images/carousel-2.jpg" alt="API网关" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div class="absolute inset-0 bg-gradient-to-t from-base-100 via-transparent to-transparent opacity-60"></div>
              <div class="absolute inset-0 bg-secondary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span class="text-white text-lg font-semibold flex items-center gap-2">
                  <span class="iconify" data-icon="heroicons:eye" data-width="24"></span>
                  查看详情
                </span>
              </div>
            </div>
            <div class="p-6">
              <span class="badge badge-secondary badge-sm mb-2">后端架构</span>
              <h3 class="text-xl font-bold text-base-content mb-2 group-hover:text-secondary transition-colors">微服务API网关</h3>
              <p class="text-base-content/70 text-sm line-clamp-2">基于 Node.js 的高性能 API 网关，支持百万级并发</p>
            </div>
          </article>
          <!-- Portfolio Item 3 -->
          <article class="group relative overflow-hidden rounded-2xl bg-base-100 hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer" onclick="navigateTo('portfolio')">
            <div class="relative h-48 overflow-hidden">
              <img src="/assets/images/carousel-3.jpg" alt="移动应用" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div class="absolute inset-0 bg-gradient-to-t from-base-100 via-transparent to-transparent opacity-60"></div>
              <div class="absolute inset-0 bg-accent/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span class="text-white text-lg font-semibold flex items-center gap-2">
                  <span class="iconify" data-icon="heroicons:eye" data-width="24"></span>
                  查看详情
                </span>
              </div>
            </div>
            <div class="p-6">
              <span class="badge badge-accent badge-sm mb-2">移动应用</span>
              <h3 class="text-xl font-bold text-base-content mb-2 group-hover:text-accent transition-colors">跨平台移动应用</h3>
              <p class="text-base-content/70 text-sm line-clamp-2">使用 React Native 开发的社交应用，iOS 和 Android 双端</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Featured Articles -->
    <section id="featured-articles" class="py-16 bg-base-100">
      <div class="container mx-auto px-8">
        <div class="flex items-center gap-4 mb-8">
          <h2 class="text-3xl font-bold text-base-content">热门文章</h2>
          <div class="h-px bg-gradient-to-r from-secondary to-transparent flex-1"></div>
        </div>
        <!-- Featured Articles Horizontal Scroll -->
        <div class="relative">
          <div id="featured-scroll" class="flex gap-6 overflow-x-auto pb-4 scroll-smooth">
            <!-- Featured Article 1 -->
            <article
              data-repeatable="true"
              class="flex-none w-80 tech-border-gradient cursor-pointer smooth-transition hover:scale-105"
              onclick="navigateTo('article_detail_page')"
            >
              <div class="p-6 h-full">
                <figure class="mb-4">
                  <img
                    alt="现代JavaScript框架对比"
                    class="w-full h-40 object-cover rounded-lg"
                    src="/assets/images/carousel-2.jpg"
                  />
                </figure>
                <div class="space-y-3">
                  <div class="flex items-center gap-2">
                    <span class="badge badge-primary badge-sm">框架对比</span
                    ><span class="flex items-center gap-1 text-sm text-base-content/60"
                      ><span class="iconify" data-icon="heroicons:fire" data-width="16"></span>
                      热门
                    </span>
                  </div>
                  <h3 class="text-lg font-semibold text-base-content">
                    现代JavaScript框架深度对比：Vue vs React vs Angular
                  </h3>
                  <p class="text-sm text-base-content/70 line-clamp-2">
                    全面分析三大主流前端框架的特点、性能和适用场景，帮助开发者做出最佳选择。
                  </p>
                </div>
              </div>
            </article>
            <!-- Featured Article 2 -->
            <article
              data-repeatable="true"
              class="flex-none w-80 tech-border-gradient cursor-pointer smooth-transition hover:scale-105"
              onclick="navigateTo('article_detail_page')"
            >
              <div class="p-6 h-full">
                <figure class="mb-4">
                  <img
                    alt="Web性能优化终极指南"
                    class="w-full h-40 object-cover rounded-lg"
                    src="/assets/images/carousel-2.jpg"
                  />
                </figure>
                <div class="space-y-3">
                  <div class="flex items-center gap-2">
                    <span class="badge badge-secondary badge-sm">性能优化</span
                    ><span class="flex items-center gap-1 text-sm text-base-content/60"
                      ><span class="iconify" data-icon="heroicons:fire" data-width="16"></span>
                      热门
                    </span>
                  </div>
                  <h3 class="text-lg font-semibold text-base-content">
                    Web性能优化终极指南：从0到100的完整方案
                  </h3>
                  <p class="text-sm text-base-content/70 line-clamp-2">
                    涵盖前端性能优化的所有方面，从代码分割到缓存策略，全面提升用户体验。
                  </p>
                </div>
              </div>
            </article>
            <!-- Featured Article 3 -->
            <article
              data-repeatable="true"
              class="flex-none w-80 tech-border-gradient cursor-pointer smooth-transition hover:scale-105"
              onclick="navigateTo('article_detail_page')"
            >
              <div class="p-6 h-full">
                <figure class="mb-4">
                  <img
                    alt="微服务架构实战"
                    class="w-full h-40 object-cover rounded-lg"
                    src="/assets/images/carousel-2.jpg"
                  />
                </figure>
                <div class="space-y-3">
                  <div class="flex items-center gap-2">
                    <span class="badge badge-accent badge-sm">架构设计</span
                    ><span class="flex items-center gap-1 text-sm text-base-content/60"
                      ><span class="iconify" data-icon="heroicons:fire" data-width="16"></span>
                      热门
                    </span>
                  </div>
                  <h3 class="text-lg font-semibold text-base-content">
                    微服务架构实战：从单体到分布式的演进之路
                  </h3>
                  <p class="text-sm text-base-content/70 line-clamp-2">
                    详解微服务架构的设计原则、实施策略和常见挑战，助力企业数字化转型。
                  </p>
                </div>
              </div>
            </article>
            <!-- Featured Article 4 -->
            <article
              data-repeatable="true"
              class="flex-none w-80 tech-border-gradient cursor-pointer smooth-transition hover:scale-105"
              onclick="navigateTo('article_detail_page')"
            >
              <div class="p-6 h-full">
                <figure class="mb-4">
                  <img
                    alt="AI开发工具集"
                    class="w-full h-40 object-cover rounded-lg"
                    src="/assets/images/carousel-2.jpg"
                  />
                </figure>
                <div class="space-y-3">
                  <div class="flex items-center gap-2">
                    <span class="badge badge-info badge-sm">AI工具</span
                    ><span class="flex items-center gap-1 text-sm text-base-content/60"
                      ><span class="iconify" data-icon="heroicons:fire" data-width="16"></span>
                      热门
                    </span>
                  </div>
                  <h3 class="text-lg font-semibold text-base-content">
                    2025年最值得关注的AI开发工具集合
                  </h3>
                  <p class="text-sm text-base-content/70 line-clamp-2">
                    精选最新最实用的AI开发工具，提升开发效率，拥抱智能化编程时代。
                  </p>
                </div>
              </div>
            </article>
          </div>
          <!-- Scroll Navigation -->
          <button
            class="absolute left-0 top-1/2 -translate-y-1/2 btn btn-circle btn-primary btn-sm"
            onclick="scrollFeatured('left')"
          >
            <span class="iconify" data-icon="heroicons:chevron-left" data-width="20"></span></button
          ><button
            class="absolute right-0 top-1/2 -translate-y-1/2 btn btn-circle btn-primary btn-sm"
            onclick="scrollFeatured('right')"
          >
            <span class="iconify" data-icon="heroicons:chevron-right" data-width="20"></span>
          </button>
        </div>
      </div>
    </section>

    <!-- Article Carousel -->
    <section id="article-carousel" class="py-16 bg-base-100">
      <div class="container mx-auto px-8">
        <div class="flex items-center gap-4 mb-8">
          <h2 class="text-3xl font-bold text-base-content">精选推荐</h2>
          <div class="h-px bg-gradient-to-r from-accent to-transparent flex-1"></div>
        </div>
        <!-- Carousel -->
        <div class="carousel w-full rounded-box tech-shadow-lg">
          <!-- Slide 1 -->
          <div id="slide1" class="carousel-item relative w-full">
            <div
              class="hero min-h-96 w-full"
              style="
                background:
                  linear-gradient(135deg, rgba(59, 130, 246, 0.8) 0%, rgba(139, 92, 246, 0.8) 100%),
                  url('https://placehold.co/1200x400.png?text=Full+Stack+Development+Guide');
                background-size: cover;
                background-position: center;
              "
            >
              <div class="hero-content text-center text-white">
                <div class="max-w-2xl">
                  <h3 class="mb-4 text-4xl font-bold">全栈开发完整指南</h3>
                  <p class="mb-6 text-lg">
                    从前端到后端，从数据库到部署，一站式掌握现代Web开发的完整技术栈。
                  </p>
                  <button
                    class="btn btn-primary btn-lg"
                    onclick="navigateTo('article_detail_page')"
                  >
                    立即阅读
                  </button>
                </div>
              </div>
            </div>
            <div
              class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between"
            >
              <a href="#slide3" class="btn btn-circle btn-primary btn-sm">❮</a
              ><a href="#slide2" class="btn btn-circle btn-primary btn-sm">❯</a>
            </div>
          </div>
          <!-- Slide 2 -->
          <div id="slide2" class="carousel-item relative w-full">
            <div
              class="hero min-h-96 w-full"
              style="
                background:
                  linear-gradient(135deg, rgba(34, 197, 94, 0.8) 0%, rgba(59, 130, 246, 0.8) 100%),
                  url('https://placehold.co/1200x400.png?text=DevOps+Best+Practices');
                background-size: cover;
                background-position: center;
              "
            >
              <div class="hero-content text-center text-white">
                <div class="max-w-2xl">
                  <h3 class="mb-4 text-4xl font-bold">DevOps最佳实践</h3>
                  <p class="mb-6 text-lg">
                    探索现代DevOps工具链和自动化流程，提升开发效率和部署质量。
                  </p>
                  <button
                    class="btn btn-primary btn-lg"
                    onclick="navigateTo('article_detail_page')"
                  >
                    立即阅读
                  </button>
                </div>
              </div>
            </div>
            <div
              class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between"
            >
              <a href="#slide1" class="btn btn-circle btn-primary btn-sm">❮</a
              ><a href="#slide3" class="btn btn-circle btn-primary btn-sm">❯</a>
            </div>
          </div>
          <!-- Slide 3 -->
          <div id="slide3" class="carousel-item relative w-full">
            <div
              class="hero min-h-96 w-full"
              style="
                background:
                  linear-gradient(135deg, rgba(139, 92, 246, 0.8) 0%, rgba(239, 68, 68, 0.8) 100%),
                  url('https://placehold.co/1200x400.png?text=Cloud+Native+Architecture');
                background-size: cover;
                background-position: center;
              "
            >
              <div class="hero-content text-center text-white">
                <div class="max-w-2xl">
                  <h3 class="mb-4 text-4xl font-bold">云原生架构设计</h3>
                  <p class="mb-6 text-lg">
                    深入了解容器化、服务网格和云原生技术，构建可扩展的现代应用。
                  </p>
                  <button
                    class="btn btn-primary btn-lg"
                    onclick="navigateTo('article_detail_page')"
                  >
                    立即阅读
                  </button>
                </div>
              </div>
            </div>
            <div
              class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between"
            >
              <a href="#slide2" class="btn btn-circle btn-primary btn-sm">❮</a
              ><a href="#slide1" class="btn btn-circle btn-primary btn-sm">❯</a>
            </div>
          </div>
        </div>
        <!-- Carousel Indicators -->
        <div class="flex w-full justify-center gap-2 py-4">
          <a href="#slide1" class="btn btn-xs">1</a><a href="#slide2" class="btn btn-xs">2</a
          ><a href="#slide3" class="btn btn-xs">3</a>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
/*
  在这里只放置首页特有的样式。
  全局样式已抽离到 global.css。
*/

/* Hero Section Starfield Animation */
.star {
  position: absolute;
  width: 2px;
  height: 2px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  animation: twinkle 3s infinite;
}
.star-1 {
  top: 20%;
  left: 10%;
  animation-delay: 0s;
}
.star-2 {
  top: 40%;
  left: 80%;
  animation-delay: 1s;
}
.star-3 {
  top: 70%;
  left: 30%;
  animation-delay: 2s;
}
.star-4 {
  top: 15%;
  left: 70%;
  animation-delay: 0.5s;
}
.star-5 {
  top: 85%;
  left: 60%;
  animation-delay: 1.5s;
}

/* Tech Glow Effects & Shadows */
.tech-glow:hover {
  box-shadow: 0 0 30px rgba(59, 130, 246, 0.4);
}
.tech-shadow-lg {
  box-shadow:
    0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

/* Card Hover Effects */
.blog-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
}

/* Featured Articles Scroll Styling */
#featured-scroll {
  scrollbar-width: thin;
  scrollbar-color: var(--color-primary) var(--color-base-200);
}
#featured-scroll::-webkit-scrollbar {
  height: 6px;
}
#featured-scroll::-webkit-scrollbar-track {
  background: var(--color-base-200);
  border-radius: 3px;
}
#featured-scroll::-webkit-scrollbar-thumb {
  background: var(--color-primary);
  border-radius: 3px;
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 3rem;
  }
}
</style>
