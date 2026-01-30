<template>
  <div data-section-id="blog_header" data-section-type="common_header" class="navbar bg-base-100/95 backdrop-blur-sm border-b border-base-300 sticky top-0 z-50 relative overflow-hidden" style="height: 80px;">
    <!-- SVG Background Decoration -->
    <svg class="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" viewBox="0 0 1200 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
      <path d="M0,40 Q300,0 600,40 T1200,40 L1200,80 L0,80 Z" fill="url(#headerWaveGradient)"/>
      <circle cx="100" cy="40" r="60" stroke="var(--color-primary)" stroke-width="0.5" fill="none" opacity="0.3"/>
      <circle cx="1100" cy="40" r="80" stroke="var(--color-secondary)" stroke-width="0.5" fill="none" opacity="0.2"/>
      <defs>
        <linearGradient id="headerWaveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:var(--color-primary);stop-opacity:0.3" />
          <stop offset="50%" style="stop-color:var(--color-secondary);stop-opacity:0.2" />
          <stop offset="100%" style="stop-color:var(--color-accent);stop-opacity:0.3" />
        </linearGradient>
      </defs>
    </svg>
    <!-- SVG Corner Decoration -->
    <svg class="absolute -top-4 -right-4 w-24 h-24 opacity-10 pointer-events-none" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polygon points="50,10 90,90 10,90" stroke="var(--color-primary)" stroke-width="1" fill="none"/>
      <polygon points="50,25 75,75 25,75" stroke="var(--color-secondary)" stroke-width="0.8" fill="none" opacity="0.6"/>
    </svg>
    <!-- Logo Section -->
    <div class="navbar-start relative z-10">
      <div class="dropdown lg:hidden">
        <div tabindex="0" role="button" class="btn btn-ghost btn-circle" @click="toggleMobileMenu">
          <span class="iconify" data-icon="heroicons:bars-3" data-width="24"></span>
        </div>
        <ul id="mobile-menu" tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52" :class="{ 'hidden': !mobileMenuOpen }">
          <li>
            <router-link to="/" @click="closeMobileMenu" class="flex items-center gap-2">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
                <polyline points="9 22 9 12 15 12 15 22" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              首页
            </router-link>
          </li>
          <li>
            <router-link to="/portfolio" @click="closeMobileMenu" class="flex items-center gap-2">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="currentColor" stroke-width="2" fill="none"/>
                <line x1="8" y1="21" x2="16" y2="21" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                <line x1="12" y1="17" x2="12" y2="21" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
              作品集
            </router-link>
          </li>
          <li>
            <router-link to="/blog" @click="closeMobileMenu" class="flex items-center gap-2">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
                <polyline points="14 2 14 8 20 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                <line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                <polyline points="10 9 9 9 8 9" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
              博客
            </router-link>
          </li>
          <li>
            <router-link to="/about" @click="closeMobileMenu" class="flex items-center gap-2">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
                <circle cx="12" cy="7" r="4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
              </svg>
              关于我
            </router-link>
          </li>
        </ul>
      </div>
      
      <router-link to="/" class="btn btn-ghost text-xl font-bold cursor-pointer flex items-center gap-2">
        <div class="tech-border-gradient">
          <div class="p-2">
            <span class="iconify text-primary" data-icon="heroicons:code-bracket" data-width="28"></span>
          </div>
        </div>
        <span class="text-primary">WangChuang</span>
      </router-link>
    </div>

    <!-- Center Navigation -->
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1 text-base gap-1">
        <li>
          <router-link to="/" class="hover:text-primary smooth-transition flex items-center gap-2">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
              <polyline points="9 22 9 12 15 12 15 22" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            首页
          </router-link>
        </li>
        <li>
          <router-link to="/portfolio" class="hover:text-primary smooth-transition flex items-center gap-2">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="currentColor" stroke-width="2" fill="none"/>
              <line x1="8" y1="21" x2="16" y2="21" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              <line x1="12" y1="17" x2="12" y2="21" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
            作品集
          </router-link>
        </li>
        <li>
          <router-link to="/blog" class="hover:text-primary smooth-transition flex items-center gap-2">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
              <polyline points="14 2 14 8 20 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              <line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              <polyline points="10 9 9 9 8 9" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
            博客
          </router-link>
        </li>
        <li>
          <router-link to="/about" class="hover:text-primary smooth-transition flex items-center gap-2">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
              <circle cx="12" cy="7" r="4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
            </svg>
            关于我
          </router-link>
        </li>
      </ul>
    </div>

    <!-- Right Section -->
    <div class="navbar-end gap-3">
      <button class="btn btn-ghost btn-circle btn-sm" @click="toggleTheme" title="切换主题">
        <span class="iconify" data-icon="heroicons:sun" data-width="20"></span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

const toggleTheme = () => {
  const html = document.documentElement
  const currentTheme = html.getAttribute('data-theme')
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark'
  html.setAttribute('data-theme', newTheme)
  localStorage.setItem('theme', newTheme)
}
</script>

<style scoped>
/* Scoped styles ensure these only apply to the header */
.navbar {
  padding-left: 1rem;
  padding-right: 1rem;
}
.menu a:hover {
  background-color: transparent;
}
.dropdown-content {
  margin-top: 0.5rem;
}
.tech-border-gradient {
  background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
}
</style>