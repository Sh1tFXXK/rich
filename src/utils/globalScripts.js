// src/utils/globalScripts.js

/**
 * 初始化所有全局函数和事件监听器。
 * 这个函数应该在 Vue 应用挂载 (mounted) 之后被调用一次。
 */
export function initializeGlobalScripts() {

  // =================================================================
  // == 全局命名空间和函数 ==
  // =================================================================

  window.APP_GLOBALS = window.APP_GLOBALS || {};

  // 全局导航函数 (占位符, 最终会被 Vue Router 替代)
  window.navigateTo = function(targetPageId) {
    console.log(`[navigateTo] 正在尝试导航至: ${targetPageId}.html (提示: 应由 Vue Router 处理)`);
    // 在实际的 Vue Router 应用中，您会使用 router.push()
    // 为了让现有 onclick 能工作，暂时保留 console.log
  };

  // 全局博客工具函数对象
  window.BlogUtils = {
    // 格式化日期 (中文)
    formatDate: function(dateString) {
      const date = new Date(dateString);
      return date.toLocaleDateString('zh-CN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    },

    // 格式化阅读时间
    formatReadingTime: function(content) {
      const wordsPerMinute = 200;
      const words = content.length / 2; // 中文近似词数
      const minutes = Math.ceil(words / wordsPerMinute);
      return `${minutes} 分钟阅读`;
    },

    // 处理搜索表单提交
    handleSearch: function(form) {
      const formData = new FormData(form);
      const query = formData.get('query');
      if (query && query.trim()) {
        sessionStorage.setItem('searchQuery', query.trim());
        navigateTo('search_results_page');
      }
      return false; // 阻止表单默认提交
    },

    // 切换移动端菜单
    toggleMobileMenu: function() {
      const menu = document.getElementById('mobile-menu');
      if (menu) {
        menu.classList.toggle('hidden');
      }
    },

    // 按标签筛选
    filterByTag: function(tag) {
      sessionStorage.setItem('filterTag', tag);
      navigateTo('article_list_page');
    },

    // 按分类筛选
    filterByCategory: function(category) {
      sessionStorage.setItem('filterCategory', category);
      navigateTo('article_list_page');
    },

    // 主题切换
    toggleTheme: function() {
      const html = document.documentElement;
      const currentTheme = html.getAttribute('data-theme');
      const newTheme = currentTheme === 'business' ? 'corporate' : 'business';
      html.setAttribute('data-theme', newTheme);
      localStorage.setItem('blogTheme', newTheme);
    },

    // 从 localStorage 初始化主题
    initTheme: function() {
      const savedTheme = localStorage.getItem('blogTheme') || 'business';
      document.documentElement.setAttribute('data-theme', savedTheme);
    },

    // 初始化图片懒加载
    initLazyLoading: function() {
      if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const img = entry.target;
              if (img.dataset.src) {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
              }
            }
          });
        });
        document.querySelectorAll('img[data-src]').forEach(img => {
          imageObserver.observe(img);
        });
      }
    },
  };

  // =================================================================
  // == 全局事件监听器和初始化调用 ==
  // =================================================================

  // 1. 初始化主题
  window.BlogUtils.initTheme();

  // 2. 初始化图片懒加载
  // 注意：这个调用最好在每个页面组件的 onMounted 中单独进行，以确保能捕获到新渲染的图片
  // 但为了保持原始逻辑，我们在这里也调用一次
  window.BlogUtils.initLazyLoading();

  // 3. 为 Header 添加 "点击外部关闭菜单" 的功能
  const navbar = document.querySelector('[data-section-id="blog_header"]');
  if (navbar) {
    document.addEventListener('click', function(event) {
      const mobileMenu = document.getElementById('mobile-menu');
      const menuToggle = navbar.querySelector('.dropdown .btn-ghost.btn-circle');
      if (mobileMenu && menuToggle && !mobileMenu.contains(event.target) && !menuToggle.contains(event.target)) {
        mobileMenu.classList.add('hidden');
      }
    });
  }

  // 4. 定义高亮当前导航项的函数
  window.setActiveNavigation = function(pageId) {
    if (!navbar) return;
    const navLinks = navbar.querySelectorAll('.menu a');
    navLinks.forEach(link => {
      link.classList.remove('text-primary', 'font-semibold');
    });
    const navMap = {
      'home_page': '首页',
      'article_list_page': '文章',
      'category_list_page': '分类',
      'tag_list_page': '标签',
      'about_me_page': '关于我',
      'contact_me_page': '联系我'
    };
    if (navMap[pageId]) {
      const activeLink = Array.from(navLinks).find(link => link.textContent.trim() === navMap[pageId]);
      if (activeLink) {
        activeLink.classList.add('text-primary', 'font-semibold');
      }
    }
  };

  // 5. 确保 Holder.js (如果还在使用) 能够运行
  if (window.Holder) {
    setTimeout(() => {
      window.Holder.run({
        domain: "placehold.co"
      });
    }, 100);
  }
}