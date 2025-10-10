<template>
  <div data-section-id="blog_header" data-section-type="common_header" class="navbar bg-base-100/95 backdrop-blur-sm border-b border-base-300 sticky top-0 z-50" style="height: 80px;">
    <!-- Logo Section -->
    <div class="navbar-start">
      <div class="dropdown lg:hidden">
        <div tabindex="0" role="button" class="btn btn-ghost btn-circle" onclick="BlogUtils.toggleMobileMenu()">
          <span class="iconify" data-icon="heroicons:bars-3" data-width="24"></span>
        </div>
        <ul id="mobile-menu" tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 hidden">
          <li><router-link to="/">首页</router-link></li>
          <li><router-link to="/article">文章</router-link></li>
          <li><router-link to="/category">分类</router-link></li>
          <li><router-link to="/tag">标签</router-link></li>
          <li><router-link to='/about'>关于我</router-link></li>
          <li><a onclick="navigateTo('contact_me_page')">联系我</a></li>
        </ul>
      </div>
      
      <router-link to="/" class="btn btn-ghost text-xl font-bold cursor-pointer flex items-center gap-2">
        <div class="tech-border-gradient">
          <div class="p-2">
            <span class="iconify text-primary" data-icon="heroicons:code-bracket" data-width="28"></span>
          </div>
        </div>
        <span class="text-primary">TechBlog</span>
      </router-link>
    </div>

    <!-- Center Navigation -->
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1 text-base gap-1">
        <li><router-link to="/" class="hover:text-primary smooth-transition">首页</router-link></li>
        <li><router-link to="/article" class="hover:text-primary smooth-transition">文章</router-link></li>
        <li><router-link to="/category" class="hover:text-primary smooth-transition">分类</router-link></li>
        <li><router-link to="/tag" class="hover:text-primary smooth-transition">标签</router-link></li>
        <li><router-link to="/about" class="hover:text-primary smooth-transition">关于我</router-link></li>
        <li><a onclick="navigateTo('contact_me_page')" class="hover:text-primary smooth-transition">联系我</a></li>
      </ul>
    </div>

    <!-- Right Section -->
    <div class="navbar-end gap-3">
      <div class="form-control hidden sm:block">
        <form onsubmit="return BlogUtils.handleSearch(this)" class="join">
          <input type="text" name="query" placeholder="搜索文章..." class="input input-bordered input-sm join-item w-48">
          <button type="submit" class="btn btn-sm btn-primary join-item">
            <span class="iconify" data-icon="heroicons:magnifying-glass" data-width="16"></span>
          </button>
        </form>
      </div>
      <button class="btn btn-ghost btn-circle btn-sm" onclick="BlogUtils.toggleTheme()" title="切换主题">
        <span class="iconify" data-icon="heroicons:sun" data-width="20"></span>
      </button>
      <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn btn-ghost btn-circle btn-sm">
          <span class="iconify" data-icon="heroicons:cog-6-tooth" data-width="20"></span>
        </div>
        <ul tabindex="0" class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
          <li><a onclick="navigateTo('admin_dashboard_page')">管理后台</a></li>
          <li><a onclick="navigateTo('create_edit_article_page')">写文章</a></li>
          <li><a onclick="navigateTo('personal_settings_page')">设置</a></li>
          <li class="border-t border-base-200 mt-1 pt-1">
            <a onclick="navigateTo('login_page')">登录</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

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