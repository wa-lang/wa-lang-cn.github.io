<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useRoute } from "vitepress";

const checkDark = () => document.documentElement.classList.contains('dark');
const isDark = ref(checkDark());
const route = useRoute();

const observer = new MutationObserver(() => {
  isDark.value = checkDark();
});
observer.observe(document.documentElement, {
  attributes: true,
  attributeFilter: ['class'],
});

onMounted(() => { import('giscus'); });

onBeforeUnmount(() => {
  observer.disconnect();
});
</script>

<template>
  <div class="comments">
    <giscus-widget
      repo="wa-lang/wa-lang.github.io"
      repoId="MDEwOlJlcG9zaXRvcnkxNjI5NDU2MDU="
      category="General"
      categoryId="DIC_kwDOCbZaRc4CQYyU"
      mapping="specifics"
      :term="route.path"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      lang="zh-CN"
      loading="lazy"
      :theme="isDark ? 'transparent_dark' : 'light'"
    />
  </div>
</template>

<style scoped>
.comments {
  margin-top: 2em
}
</style>
