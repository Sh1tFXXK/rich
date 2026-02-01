<template>
  <main class="flex-1 p-4 md:p-8 overflow-y-auto">
    <div class="space-y-12">
      <!-- Portfolio Hero Section -->
      <section id="PortfolioHeroSection" class="relative overflow-hidden rounded-box">
        <div class="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 opacity-50"></div>
        <div class="tech-border-gradient">
          <div class="p-6 md:p-8 bg-base-100 text-center">
            <h1 class="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-2">
              作品集
            </h1>
            <p class="text-base text-base-content/70 max-w-xl mx-auto">
              精选项目展示
            </p>
          </div>
        </div>
      </section>

      <!-- Portfolio Filter -->
      <section id="PortfolioFilter" class="container mx-auto px-4">
        <div class="flex flex-wrap justify-center gap-3 mb-8">
          <button 
            v-for="category in categories" 
            :key="category.id"
            @click="activeFilter = category.id"
            :class="['btn btn-sm', activeFilter === category.id ? 'btn-primary' : 'btn-outline']"
          >
            <span class="iconify mr-2" :data-icon="category.icon" data-width="16"></span>
            {{ category.name }}
          </button>
        </div>
      </section>

      <!-- Projects Grid -->
      <section id="ProjectsGrid" class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article 
            v-for="project in filteredProjects" 
            :key="project.id"
            class="group relative overflow-hidden rounded-2xl bg-base-200/50 hover:bg-base-200 transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer"
            @click="openProject(project)"
          >
            <!-- Project Image -->
            <div class="relative h-56 overflow-hidden">
              <img 
                :src="project.image" 
                :alt="project.title"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-base-100 via-transparent to-transparent opacity-60"></div>
              <!-- Overlay on hover -->
              <div class="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span class="text-white text-lg font-semibold flex items-center gap-2">
                  <span class="iconify" data-icon="heroicons:eye" data-width="24"></span>
                  查看详情
                </span>
              </div>
            </div>
            
            <!-- Project Info -->
            <div class="p-6">
              <div class="flex items-center gap-2 mb-3">
                <span class="badge badge-primary badge-sm">{{ project.category }}</span>
                <span class="text-sm text-base-content/60">{{ project.year }}</span>
              </div>
              <h3 class="text-xl font-bold text-base-content mb-2 group-hover:text-primary transition-colors">
                {{ project.title }}
              </h3>
              <p class="text-base-content/70 text-sm line-clamp-2 mb-4">
                {{ project.description }}
              </p>
              <!-- Tech Stack -->
              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="tech in project.techStack" 
                  :key="tech"
                  class="badge badge-outline badge-sm"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </article>
        </div>
      </section>

      <!-- Skills Section -->
      <section id="SkillsSection" class="container mx-auto px-4">
        <div class="text-center mb-8">
          <h2 class="text-2xl md:text-3xl font-bold mb-2">技术栈</h2>
          <p class="text-sm text-base-content/70">熟练掌握多种前沿技术</p>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <div 
            v-for="skill in skills" 
            :key="skill.name"
            class="group p-4 bg-base-200/50 rounded-xl text-center hover:bg-base-200 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <div class="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
              <span class="iconify text-white text-2xl" :data-icon="skill.icon" data-width="24"></span>
            </div>
            <h4 class="font-semibold text-sm text-base-content">{{ skill.name }}</h4>
            <div class="mt-2 w-full bg-base-300 rounded-full h-1.5">
              <div 
                class="bg-gradient-to-r from-primary to-secondary h-1.5 rounded-full transition-all duration-1000"
                :style="{ width: skill.level + '%' }"
              ></div>
            </div>
          </div>
        </div>
      </section>

      <!-- Experience Timeline -->
      <section id="ExperienceSection" class="container mx-auto px-4">
        <div class="text-center mb-8">
          <h2 class="text-2xl md:text-3xl font-bold mb-2">工作经历</h2>
          <p class="text-sm text-base-content/70">职业生涯发展历程</p>
        </div>
        <div class="max-w-3xl mx-auto">
          <div class="relative">
            <!-- Timeline Line -->
            <div class="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary transform md:-translate-x-1/2"></div>
            
            <!-- Timeline Items -->
            <div 
              v-for="(exp, index) in experiences" 
              :key="exp.id"
              class="relative flex items-start mb-12 last:mb-0"
              :class="index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'"
            >
              <!-- Timeline Dot -->
              <div class="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-base-100 transform -translate-x-1/2 z-10"></div>
              
              <!-- Content -->
              <div class="ml-12 md:ml-0 md:w-1/2" :class="index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'">
                <div class="bg-base-200/50 p-6 rounded-xl hover:bg-base-200 transition-colors">
                  <span class="badge badge-primary mb-2">{{ exp.period }}</span>
                  <h3 class="text-xl font-bold text-base-content mb-1">{{ exp.title }}</h3>
                  <p class="text-primary font-medium mb-2">{{ exp.company }}</p>
                  <p class="text-base-content/70 text-sm">{{ exp.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact CTA -->
      <section id="ContactCTA" class="container mx-auto px-4 pb-12">
        <div class="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary via-secondary to-accent p-8 text-center">
          <div class="absolute inset-0 bg-black/10"></div>
          <div class="relative z-10">
            <h2 class="text-2xl md:text-3xl font-bold text-white mb-3">有项目想法？</h2>
            <p class="text-white/90 text-base mb-6 max-w-xl mx-auto">
              无论是网站开发、应用设计还是技术咨询，我都很乐意与您合作
            </p>
            <a href="mailto:contact@example.com" class="btn btn-md bg-white text-primary hover:bg-white/90 border-0">
              <span class="iconify mr-2" data-icon="heroicons:envelope" data-width="18"></span>
              联系我
            </a>
          </div>
        </div>
      </section>
    </div>

    <!-- Project Detail Modal -->
    <dialog id="project-modal" class="modal" :open="selectedProject !== null">
      <div class="modal-box max-w-4xl" v-if="selectedProject">
        <form method="dialog">
          <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" @click="selectedProject = null">✕</button>
        </form>
        <img :src="selectedProject.image" :alt="selectedProject.title" class="w-full h-64 object-cover rounded-lg mb-6" />
        <h3 class="text-3xl font-bold mb-2">{{ selectedProject.title }}</h3>
        <div class="flex items-center gap-4 mb-4">
          <span class="badge badge-primary">{{ selectedProject.category }}</span>
          <span class="text-base-content/60">{{ selectedProject.year }}</span>
        </div>
        <p class="text-base-content/80 mb-6">{{ selectedProject.fullDescription }}</p>
        <div class="mb-6">
          <h4 class="font-semibold mb-2">技术栈</h4>
          <div class="flex flex-wrap gap-2">
            <span v-for="tech in selectedProject.techStack" :key="tech" class="badge badge-outline">{{ tech }}</span>
          </div>
        </div>
        <div class="flex gap-4">
          <a v-if="selectedProject.demoUrl" :href="selectedProject.demoUrl" target="_blank" class="btn btn-primary">
            <span class="iconify mr-2" data-icon="heroicons:globe-alt" data-width="20"></span>
            在线演示
          </a>
          <a v-if="selectedProject.githubUrl" :href="selectedProject.githubUrl" target="_blank" class="btn btn-outline">
            <span class="iconify mr-2" data-icon="heroicons:code-bracket" data-width="20"></span>
            查看代码
          </a>
        </div>
      </div>
      <form method="dialog" class="modal-backdrop">
        <button @click="selectedProject = null">close</button>
      </form>
    </dialog>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue'

// Import images using Vite's asset handling
import handbookImage from '/assets/images/handbook.jpeg'
import ai2moneyImage from '/assets/images/ai2money.jpeg'
import carousel1Image from '/assets/images/carousel-1.jpg'
import carousel2Image from '/assets/images/carousel-2.jpg'
import carousel3Image from '/assets/images/carousel-3.jpg'
import heroBgImage from '/assets/images/hero-bg.jpg'
import previewImage from '/assets/images/preview.jpg'

const activeFilter = ref('all')
const selectedProject = ref(null)

const categories = [
  { id: 'all', name: '全部', icon: 'heroicons:squares-2x2' },
  { id: 'frontend', name: '前端开发', icon: 'heroicons:computer-desktop' },
  { id: 'backend', name: '后端架构', icon: 'heroicons:server' },
  { id: 'mobile', name: '移动应用', icon: 'heroicons:device-phone-mobile' },
  { id: 'fullstack', name: '全栈项目', icon: 'heroicons:layers' },
]

const projects = [
  {
    id: 1,
    title: '图鉴博物馆',
    category: '前端开发',
    categoryId: 'frontend',
    year: '2025',
    image: handbookImage,
    description: '精美的图鉴收藏展示平台，汇集各类技术图解和可视化教程',
    fullDescription: '一个精心设计的图鉴博物馆，收集和展示各类技术图解、可视化教程和知识图谱。通过直观的图形化方式帮助用户理解复杂的技术概念。项目采用响应式设计，支持多种展示模式，提供优雅的浏览体验。',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'React','Responsive Design', 'GitHub Pages'],
    demoUrl: 'https://sh1tfxxk.github.io/Illustrated-Handbook-Museum/',
    githubUrl: 'https://github.com/Sh1tFXXK/Illustrated-Handbook-Museum'
  },
  {
    id: 2,
    title: '2026 AI变现全景报告',
    category: '前端开发',
    categoryId: 'frontend',
    year: '2026',
    image: ai2moneyImage,
    description: 'AI 变现趋势分析与商业模式研究报告，可视化展示 AI 行业变现路径',
    fullDescription: '一个全面的 AI 变现全景报告项目，深入分析 2026 年 AI 行业的商业模式和变现路径。通过数据可视化和交互式界面，展示 AI 技术在各个领域的应用和盈利模式。项目采用现代前端技术栈，提供流畅的用户体验和直观的数据展示。',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'Data Visualization', 'GitHub Pages'],
    demoUrl: 'https://sh1tfxxk.github.io/ai2money/',
    githubUrl: 'https://github.com/Sh1tFXXK/ai2money'
  },
  {
    id: 3,
    title: '网络拓扑训练器',
    category: '前端开发',
    categoryId: 'frontend',
    year: '2025',
    image: previewImage,
    description: '交互式网络拓扑学习工具，帮助学习和理解计算机网络拓扑结构',
    fullDescription: '一个交互式的网络拓扑训练器，专为学习计算机网络设计。用户可以通过可视化界面学习和练习各种网络拓扑结构，包括星型、环型、总线型、网状等。项目采用现代前端技术栈，提供流畅的交互体验和直观的学习界面。',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'Canvas API', 'GitHub Pages'],
    demoUrl: 'https://sh1tfxxk.github.io/network-topology-trainer/',
    githubUrl: 'https://github.com/Sh1tFXXK/network-topology-trainer'
  },
  {
    id: 4,
    title: '电商平台前端重构',
    category: '前端开发',
    categoryId: 'frontend',
    year: '2024',
    image: carousel1Image,
    description: '使用 Vue 3 + TypeScript 重构大型电商平台前端，提升性能 40%',
    fullDescription: '这是一个大型电商平台的前端重构项目。我负责将原有的 jQuery 项目迁移到 Vue 3 生态系统，采用 Composition API 和 TypeScript 提升代码质量。通过代码分割、懒加载和缓存优化，首屏加载时间减少了 40%，用户转化率提升了 15%。',
    techStack: ['Vue 3', 'TypeScript', 'Pinia', 'Vite', 'Tailwind CSS'],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com'
  },
  {
    id: 5,
    title: '微服务API网关',
    category: '后端架构',
    categoryId: 'backend',
    year: '2024',
    image: carousel2Image,
    description: '基于 Node.js 的高性能 API 网关，支持百万级并发',
    fullDescription: '设计并实现了一个企业级 API 网关，支持服务发现、负载均衡、熔断降级、限流等功能。使用 Redis 集群实现分布式限流，采用 JWT 实现统一认证授权。经过压测，单节点可支持 10万+ QPS，整体系统可支持百万级并发。',
    techStack: ['Node.js', 'Express', 'Redis', 'Docker', 'Kubernetes'],
    demoUrl: null,
    githubUrl: 'https://github.com'
  },
  {
    id: 6,
    title: '跨平台移动应用',
    category: '移动应用',
    categoryId: 'mobile',
    year: '2023',
    image: carousel3Image,
    description: '使用 React Native 开发的社交应用，iOS 和 Android 双端',
    fullDescription: '一款面向年轻人的社交应用，支持即时通讯、动态发布、位置分享等功能。采用 React Native 实现跨平台开发，一套代码同时支持 iOS 和 Android。集成了推送通知、地图定位、相机拍照等原生功能，用户体验流畅。',
    techStack: ['React Native', 'Redux', 'Firebase', 'Socket.io'],
    demoUrl: 'https://example.com',
    githubUrl: null
  },
  {
    id: 7,
    title: '企业级管理系统',
    category: '全栈项目',
    categoryId: 'fullstack',
    year: '2023',
    image: heroBgImage,
    description: '为制造企业定制的 ERP 系统，涵盖生产、库存、财务模块',
    fullDescription: '一个完整的企业资源规划系统，包含生产计划、库存管理、采购销售、财务核算等核心模块。前端使用 Vue 3 + Element Plus，后端使用 Spring Boot + MySQL，采用微服务架构，支持多租户部署。',
    techStack: ['Vue 3', 'Spring Boot', 'MySQL', 'Redis', 'RabbitMQ'],
    demoUrl: 'https://example.com',
    githubUrl: null
  },
  {
    id: 8,
    title: '数据可视化大屏',
    category: '前端开发',
    categoryId: 'frontend',
    year: '2024',
    image: previewImage,
    description: '实时数据监控大屏，支持多种图表类型和动态数据更新',
    fullDescription: '为智慧城市项目开发的数据可视化大屏，展示交通、环境、能源等多维度数据。使用 ECharts 和 D3.js 实现丰富的图表效果，通过 WebSocket 实现实时数据推送。支持响应式布局，适配各种屏幕尺寸。',
    techStack: ['Vue 3', 'ECharts', 'D3.js', 'WebSocket', 'Sass'],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com'
  },
  {
    id: 9,
    title: 'AI 智能客服系统',
    category: '全栈项目',
    categoryId: 'fullstack',
    year: '2024',
    image: carousel1Image,
    description: '基于大语言模型的智能客服系统，支持多轮对话',
    fullDescription: '集成 GPT-4 的智能客服系统，支持自然语言理解、多轮对话、知识库检索等功能。前端使用 React，后端使用 Python FastAPI，通过 RAG 技术结合企业知识库，回答准确率达到 90% 以上。',
    techStack: ['React', 'Python', 'FastAPI', 'PostgreSQL', 'OpenAI API'],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com'
  }
]

const filteredProjects = computed(() => {
  if (activeFilter.value === 'all') return projects
  return projects.filter(p => p.categoryId === activeFilter.value)
})

const skills = [
  { name: 'Vue.js', icon: 'heroicons:vue', level: 95 },
  { name: 'React', icon: 'heroicons:react', level: 90 },
  { name: 'TypeScript', icon: 'heroicons:code-bracket', level: 88 },
  { name: 'Node.js', icon: 'heroicons:server', level: 85 },
  { name: 'Python', icon: 'heroicons:command-line', level: 80 },
  { name: 'Docker', icon: 'heroicons:cube', level: 75 },
]

const experiences = [
  {
    id: 1,
    period: '2022 - 至今',
    title: '高级前端工程师',
    company: '某知名互联网公司',
    description: '负责公司核心产品的前端架构设计和开发，带领 5 人团队完成多个重点项目'
  },
  {
    id: 2,
    period: '2020 - 2022',
    title: '全栈开发工程师',
    company: '科技创新企业',
    description: '独立负责多个全栈项目，从前端到后端到部署运维的全流程开发'
  },
  {
    id: 3,
    period: '2018 - 2020',
    title: '前端开发工程师',
    company: '软件开发公司',
    description: '参与多个企业级 Web 应用开发，积累了丰富的 Vue 和 React 开发经验'
  }
]

const openProject = (project) => {
  selectedProject.value = project
}
</script>

<style scoped>
/* Portfolio specific styles */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
