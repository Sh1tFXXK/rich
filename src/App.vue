<template>
  <div class="flex flex-col min-h-screen bg-base-100 text-base-content">
    <BlogHeader />

    <div class="flex flex-1">
      <BlogSidebar v-if="showSidebar" />
      
      <!-- Vue Router will render the current page component here -->
      <router-view />
    </div>

    <BlogFooter />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import BlogHeader from './components/BlogHeader.vue';
import BlogSidebar from './components/BlogSidebar.vue';
import BlogFooter from './components/BlogFooter.vue';

const route = useRoute();

// Only show sidebar on pages that are not the homepage
const showSidebar = computed(() => route.name !== 'Home');
</script>