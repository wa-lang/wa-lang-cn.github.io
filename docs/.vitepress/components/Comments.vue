<script setup lang="ts">
import { onMounted } from 'vue';
onMounted(() => {
  import('giscus');
});
</script>

<template>
  <div class="comments">
    <giscus-widget
      repo="wa-lang/wa-lang.github.io"
      repoId="MDEwOlJlcG9zaXRvcnkxNjI5NDU2MDU="
      category="General"
      categoryId="DIC_kwDOCbZaRc4CQYyU"
      mapping="pathname"
      term="Welcome to wa!"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme="preferred_color_scheme"
      lang="zh-CN"
      loading="lazy"
    />
  </div>
</template>

<style>
.comments {
  margin-top: 2em
}
</style>
