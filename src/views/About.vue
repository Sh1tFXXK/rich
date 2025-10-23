<template>
  <!-- 
    主内容区域。flex-1 让它能自动填充 Header 和 Sidebar/Footer 之间的空间。
    Header, Sidebar, Footer 都已在 App.vue 中被抽离为公共组件。
    这个 main 标签内是所有仅属于 "关于我" 页面的内容。
  -->
  <main class="flex-1 p-4 md:p-8 overflow-y-auto">
    <div class="space-y-24">
      <!-- About Me Hero Section -->
      <section id="AboutMeHeroSection" class="relative overflow-hidden rounded-box">
        <div class="absolute inset-0 bg-base-200/50 opacity-20 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"></div>
        <div class="absolute inset-0 bg-base-200/50 opacity-20 [mask-image:radial-gradient(100%_100%_at_bottom_left,white,transparent)]"></div>
        <div class="tech-border-gradient">
          <div class="p-8 md:p-12 bg-base-100 flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div class="avatar group relative">
              <div class="w-32 h-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img alt="作者头像" src="/assets/images/preview.jpg" class="w-full h-full object-cover rounded-full">
              </div>
              <div class="absolute inset-0 rounded-full bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 smooth-transition">
                <p class="text-white text-sm text-center">
                  保持好奇，<br>不断探索。
                </p>
              </div>
            </div>
            <div class="flex-1 text-center md:text-left">
              <h1 class="text-4xl font-bold">王子牙</h1>
              <p class="text-primary text-lg mt-2">
                全栈开发者 &amp; 技术博主
              </p>
              <p class="mt-4 max-w-xl text-base-content/80">
                热衷于用代码构建优雅、高效的解决方案。我相信技术是推动世界进步的核心动力，并致力于分享知识，与社区共同成长。
              </p>
              <div class="mt-8 flex justify-center md:justify-start gap-4">
                <button class="btn btn-primary">关注我</button><button class="btn btn-outline btn-secondary" onclick="navigateTo('contact_me_page')">
                  联系我
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Profile Section -->
      <section id="ProfileSection">
        <h2 class="text-3xl font-bold mb-8 text-center md:text-left">
          个人简介
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="card bg-base-200/50 p-6 smooth-transition hover:bg-base-200">
            <div class="flex items-center gap-4 mb-4">
              <span class="iconify text-primary" data-icon="heroicons:academic-cap-solid" data-width="24"></span>
              <h3 class="text-xl font-semibold">教育背景</h3>
            </div>
            <ul class="space-y-2 text-base-content/80">
              <li>
                <strong>太原学院</strong> -  信息工程 本科(2022-2026)
              </li>
            </ul>
          </div>
          <div class="card bg-base-200/50 p-6 smooth-transition hover:bg-base-200">
            <div class="flex items-center gap-4 mb-4">
              <span class="iconify text-secondary" data-icon="heroicons:briefcase-solid" data-width="24"></span>
              <h3 class="text-xl font-semibold">工作经历</h3>
            </div>
            <p class="text-base-content/80">
              曾就职于国内一线互联网公司，担任高级软件工程师，负责核心业务系统的架构设计与开发，在高并发、大数据处理方面有丰富的实战经验。
            </p>
          </div>
          <div class="card bg-base-200/50 p-6 smooth-transition hover:bg-base-200">
            <div class="flex items-center gap-4 mb-4">
              <span class="iconify text-accent" data-icon="heroicons:sparkles-solid" data-width="24"></span>
              <h3 class="text-xl font-semibold">兴趣与价值观</h3>
            </div>
            <p class="text-base-content/80">
              业余时间喜欢研究开源技术、参与技术分享。坚信开源精神和持续学习是工程师最重要的品质。喜欢徒步和摄影，从中汲取灵感。
            </p>
          </div>
        </div>
      </section>
      <!-- Skills Section -->
      <section id="SkillsSection">
        <h2 class="text-3xl font-bold mb-8 text-center md:text-left">
          技能栈
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          <div>
            <h3 class="text-xl font-semibold mb-4">前端技术</h3>
            <div class="space-y-4">
              <div data-repeatable="true">
                <p class="flex items-center gap-2 mb-1">
                  <span class="iconify" data-icon="logos:typescript-icon" data-width="18"></span>
                  html,js,TypeScript
                </p>
                <progress value="90" max="100" class="progress progress-primary w-full"></progress>
              </div>
              <div data-repeatable="true">
                <p class="flex items-center gap-2 mb-1">
                  <span class="iconify" data-icon="logos:react" data-width="18"></span>
                  React &amp; Vue
                </p>
                <progress value="95" max="100" class="progress progress-primary w-full"></progress>
              </div>
              <div data-repeatable="true">
                <p class="flex items-center gap-2 mb-1">
                  <span class="iconify" data-icon="logos:tailwindcss-icon" data-width="18"></span>
                  Tailwind CSS
                </p>
                <progress value="85" max="100" class="progress progress-primary w-full"></progress>
              </div>
            </div>
          </div>
          <div>
            <h3 class="text-xl font-semibold mb-4">后端技术</h3>
            <div class="space-y-4">
              <div data-repeatable="true">
                <p class="flex items-center gap-2 mb-1">
                  <span class="iconify" data-icon="logos:nodejs-icon" data-width="18"></span>
                  Node.js &amp; NestJS
                </p>
                <progress value="90" max="100" class="progress progress-secondary w-full"></progress>
              </div>
              <div data-repeatable="true">
                <p class="flex items-center gap-2 mb-1">
                  <span class="iconify" data-icon="logos:go" data-width="18"></span>
                  Golang
                </p>
                <progress value="80" max="100" class="progress progress-secondary w-full"></progress>
              </div>
              <div data-repeatable="true">
                <p class="flex items-center gap-2 mb-1">
                  <span class="iconify" data-icon="logos:postgresql" data-width="18"></span>
                  PostgreSQL &amp; Redis
                </p>
                <progress value="85" max="100" class="progress progress-secondary w-full"></progress>
              </div>
            </div>
          </div>
          <div>
            <h3 class="text-xl font-semibold mb-4">DevOps &amp; 工具</h3>
            <div class="space-y-4">
              <div data-repeatable="true">
                <p class="flex items-center gap-2 mb-1">
                  <span class="iconify" data-icon="logos:docker-icon" data-width="18"></span>
                  Docker &amp; Kubernetes
                </p>
                <progress value="80" max="100" class="progress progress-accent w-full"></progress>
              </div>
              <div data-repeatable="true">
                <p class="flex items-center gap-2 mb-1">
                  <span class="iconify" data-icon="logos:git-icon" data-width="18"></span>
                  Git &amp; GitHub Actions
                </p>
                <progress value="95" max="100" class="progress progress-accent w-full"></progress>
              </div>
              <div data-repeatable="true">
                <p class="flex items-center gap-2 mb-1">
                  <span class="iconify" data-icon="logos:figma" data-width="18"></span>
                  Figma
                </p>
                <progress value="75" max="100" class="progress progress-accent w-full"></progress>
              </div>
            </div>
          </div>
          <div>
            <h3 class="text-xl font-semibold mb-4">其他技能</h3>
            <div class="flex flex-wrap gap-2">
              <div data-repeatable="true" class="badge badge-outline">
                GraphQL
              </div>
              <div data-repeatable="true" class="badge badge-outline">
                WebSockets
              </div>
              <div data-repeatable="true" class="badge badge-outline">
                微服务架构
              </div>
              <div data-repeatable="true" class="badge badge-outline">
                单元测试
              </div>
              <div data-repeatable="true" class="badge badge-outline">
                系统设计
              </div>
              <div data-repeatable="true" class="badge badge-outline">
                性能优化
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Projects Section -->
      <section id="ProjectsSection">
        <h2 class="text-3xl font-bold mb-8 text-center md:text-left">
          项目经验
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div data-repeatable="true" class="card bg-base-200 shadow-lg image-full group">
            <figure>
              <img alt="Project Nova" class="smooth-transition group-hover:scale-105" src="/assets/images/carousel-1.jpg">
            </figure>
            <div class="card-body justify-between">
              <div>
                <h3 class="card-title text-2xl">Project Nova</h3>
                <p>一个面向开发者的实时协作代码编辑器。</p>
              </div>
              <div>
                <div class="flex flex-wrap gap-2 mb-4">
                  <div class="badge badge-primary badge-outline">
                    React
                  </div>
                  <div class="badge badge-secondary badge-outline">
                    WebSockets
                  </div>
                  <div class="badge badge-accent badge-outline">
                    CRDTs
                  </div>
                </div>
                <div class="card-actions justify-end">
                  <a href="#" aria-label="GitHub" class="btn btn-ghost btn-circle"><span class="iconify" data-icon="mdi:github" data-width="24"></span></a><a href="#" aria-label="Live Demo" class="btn btn-ghost btn-circle"><span class="iconify" data-icon="heroicons:globe-alt-solid" data-width="24"></span></a>
                </div>
              </div>
            </div>
          </div>
          <div data-repeatable="true" class="card bg-base-200 shadow-lg image-full group">
            <figure>
              <img alt="Data-Viz Engine" class="smooth-transition group-hover:scale-105" src="/assets/images/carousel-1.jpg">
            </figure>
            <div class="card-body justify-between">
              <div>
                <h3 class="card-title text-2xl">Data-Viz Engine</h3>
                <p>一个高性能、可定制的数据可视化引擎。</p>
              </div>
              <div>
                <div class="flex flex-wrap gap-2 mb-4">
                  <div class="badge badge-primary badge-outline">
                    TypeScript
                  </div>
                  <div class="badge badge-secondary badge-outline">
                    D3.js
                  </div>
                  <div class="badge badge-accent badge-outline">
                    Canvas API
                  </div>
                </div>
                <div class="card-actions justify-end">
                  <a href="#" aria-label="GitHub" class="btn btn-ghost btn-circle"><span class="iconify" data-icon="mdi:github" data-width="24"></span></a><a href="#" aria-label="Live Demo" class="btn btn-ghost btn-circle"><span class="iconify" data-icon="heroicons:globe-alt-solid" data-width="24"></span></a>
                </div>
              </div>
            </div>
          </div>
          <div data-repeatable="true" class="card bg-base-200 shadow-lg image-full group">
            <figure>
              <img alt="Personal Blog" class="smooth-transition group-hover:scale-105" src="/assets/images/carousel-1.jpg">
            </figure>
            <div class="card-body justify-between">
              <div>
                <h3 class="card-title text-2xl">个人博客系统</h3>
                <p>基于 Jamstack 架构的现代化博客平台。</p>
              </div>
              <div>
                <div class="flex flex-wrap gap-2 mb-4">
                  <div class="badge badge-primary badge-outline">
                    Next.js
                  </div>
                  <div class="badge badge-secondary badge-outline">
                    MDX
                  </div>
                  <div class="badge badge-accent badge-outline">
                    Vercel
                  </div>
                </div>
                <div class="card-actions justify-end">
                  <a href="#" aria-label="GitHub" class="btn btn-ghost btn-circle"><span class="iconify" data-icon="mdi:github" data-width="24"></span></a><a href="#" aria-label="Live Demo" class="btn btn-ghost btn-circle"><span class="iconify" data-icon="heroicons:globe-alt-solid" data-width="24"></span></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Timeline Section -->
      <section id="TimelineSection">
        <h2 class="text-3xl font-bold mb-12 text-center md:text-left">
          技术时间线
        </h2>
        <ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          <li data-repeatable="true">
            <div class="timeline-middle">
              <span class="iconify text-primary" data-icon="heroicons:rocket-launch-solid" data-width="20"></span>
            </div>
            <div class="timeline-start md:text-end mb-10">
              <time class="font-mono italic">2022</time>
              <div class="text-lg font-black">开启编程之旅</div>
              <p>
                进入大学，第一次接触 C 语言，写下 "Hello,
                World!"，从此踏入代码的奇妙世界。
              </p>
            </div>
            <hr>
          </li>
          <li data-repeatable="true">
            <hr>
            <div class="timeline-middle">
              <span class="iconify text-secondary" data-icon="heroicons:beaker-solid" data-width="20"></span>
            </div>
            <div class="timeline-end mb-10">
              <time class="font-mono italic">2019</time>
              <div class="text-lg font-black">第一个全栈项目</div>
              <div class="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" checked="checked">
                <div class="collapse-title text-md font-medium">
                  使用 Vue 和 Express
                  独立完成了一个校园二手交易平台，首次体验到产品从 0 到 1
                  的完整过程。
                </div>
                <div class="collapse-content">
                  <p>
                    这个项目让我对前后端交互、数据库设计和用户认证有了系统性的认识，也点燃了我对全栈开发的极大热情。
                  </p>
                </div>
              </div>
            </div>
            <hr>
          </li>
          <li data-repeatable="true">
            <hr>
            <div class="timeline-middle">
              <span class="iconify text-accent" data-icon="heroicons:cloud-solid" data-width="20"></span>
            </div>
            <div class="timeline-start md:text-end mb-10">
              <time class="font-mono italic">2021</time>
              <div class="text-lg font-black">拥抱云原生</div>
              <p>
                在实习中首次接触 Docker 和
                Kubernetes，开始探索云原生技术生态，对 DevOps
                产生了浓厚兴趣。
              </p>
            </div>
            <hr>
          </li>
          <li data-repeatable="true">
            <hr>
            <div class="timeline-middle">
              <span class="iconify text-info" data-icon="heroicons:book-open-solid" data-width="20"></span>
            </div>
            <div class="timeline-end mb-10">
              <time class="font-mono italic">2023</time>
              <div class="text-lg font-black">创建技术博客</div>
              <p>
                开始撰写技术博客，希望通过文字记录学习过程，沉淀知识体系，并与更多技术爱好者交流分享。
              </p>
            </div>
          </li>
        </ul>
      </section>
      <!-- Recommendations Section -->
      <section id="RecommendationsSection">
        <h2 class="text-3xl font-bold mb-8 text-center md:text-left">
          他人推荐
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div data-repeatable="true" class="card border border-base-300 p-6 tech-shadow">
            <figure class="mb-4">
              <q class="text-base-content/80 italic">张伟是我见过的最具激情和学习能力的工程师之一。他对复杂问题有独到的见解，总能提出创新性的解决方案，是团队中不可或缺的核心成员。</q>
            </figure>
            <div class="flex items-center gap-4 mt-4">
              <div class="avatar">
                <div class="w-12 rounded-full">
                  <img alt="推荐人头像" src="/assets/images/preview.jpg">
                </div>
              </div>
              <div>
                <p class="font-semibold">李伟</p>
                <p class="text-sm text-base-content/60">前团队技术总监</p>
              </div>
            </div>
          </div>
          <div data-repeatable="true" class="card border border-base-300 p-6 tech-shadow">
            <figure class="mb-4">
              <q class="text-base-content/80 italic">与张伟合作项目非常愉快。他不仅技术扎实，沟通能力也极强，能够清晰地阐述技术方案，并耐心帮助同事解决问题。他的博客文章也对我启发很大。</q>
            </figure>
            <div class="flex items-center gap-4 mt-4">
              <div class="avatar">
                <div class="w-12 rounded-full">
                  <img alt="推荐人头像" src="/assets/images/preview.jpg">
                </div>
              </div>
              <div>
                <p class="font-semibold">王丽</p>
                <p class="text-sm text-base-content/60">项目合作同事</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Social Media Section -->
      <section id="SocialMediaSection" class="text-center">
        <h2 class="text-3xl font-bold mb-8">保持联系</h2>
        <div class="flex justify-center items-center gap-6">
          <div data-tip="GitHub" class="tooltip">
            <a href="#" class="btn btn-ghost btn-lg btn-circle text-base-content/70 hover:text-primary smooth-transition"><span class="iconify" data-icon="mdi:github" data-width="32"></span></a>
          </div>
          <div data-tip="LinkedIn" class="tooltip">
            <a href="#" class="btn btn-ghost btn-lg btn-circle text-base-content/70 hover:text-primary smooth-transition"><span class="iconify" data-icon="mdi:linkedin" data-width="32"></span></a>
          </div>
          <div data-tip="微博" class="tooltip">
            <a href="#" class="btn btn-ghost btn-lg btn-circle text-base-content/70 hover:text-primary smooth-transition"><span class="iconify" data-icon="mdi:sina-weibo" data-width="32"></span></a>
          </div>
          <div data-tip="Email" class="tooltip">
            <a href="#" class="btn btn-ghost btn-lg btn-circle text-base-content/70 hover:text-primary smooth-transition"><span class="iconify" data-icon="heroicons:envelope-solid" data-width="32"></span></a>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  // =========================================================
  // == 在这里只放置 "关于我" 页面特有的脚本 ==
  // =========================================================

  // 1. 调用在全局脚本中定义的函数来高亮导航
  if (window.setActiveNavigation) {
    window.setActiveNavigation('about_me_page');
  }

  // 2. 初始化本页面的图片懒加载
  if (window.BlogUtils && typeof window.BlogUtils.initLazyLoading === 'function') {
    window.BlogUtils.initLazyLoading();
  }
  
  // 3. 确保 Holder.js (如果还在使用) 能够渲染本页面的占位图
  if (window.Holder) {
    window.Holder.run({ domain: "placehold.co" });
  }
});
</script>

<style scoped>
/* 
  在这里只放置 "关于我" 页面特有的样式。
  全局样式已抽离到 global.css。
*/
#AboutMeHeroSection {
  background:
    linear-gradient(rgba(31, 41, 55, 0.95), rgba(31, 41, 55, 0.95)),
    repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.01), rgba(255, 255, 255, 0.01) 1px, transparent 1px, transparent 20px),
    repeating-linear-gradient(-45deg, rgba(255, 255, 255, 0.01), rgba(255, 255, 255, 0.01) 1px, transparent 1px, transparent 20px);
}

.timeline-snap-icon > li {
    min-height: 8rem;
}

.tech-border-gradient {
  position: relative;
  background: linear-gradient(135deg, var(--color-primary), var(--color-secondary), var(--color-accent));
  border-radius: var(--radius-box);
  padding: 2px;
}

.tech-border-gradient > div {
  background: var(--color-base-100);
  border-radius: calc(var(--radius-box) - 2px);
  height: 100%;
}
</style>