<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { useRoute } from 'vitepress'

let checkDark, isDark, observerClass
const route = useRoute()

onMounted(() => {
  import('giscus')
  checkDark = () => document.documentElement.classList.contains('dark')
  isDark = ref(checkDark())
  observerClass = new MutationObserver(() => {
    isDark.value = checkDark()
  })
  observerClass.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['class'],
  })
})

onBeforeUnmount(() => {
  observerClass.disconnect()
})
</script>

<template>
  <ClientOnly>
    <div class="comments">
      <giscus-widget
        repo="wa-lang/wa-lang.github.io"
        repo-id="MDEwOlJlcG9zaXRvcnkxNjI5NDU2MDU="
        category="General"
        category-id="DIC_kwDOCbZaRc4CQYyU"
        mapping="specifics"
        :term="route.path"
        reactions-enabled="1"
        emit-metadata="0"
        input-position="top"
        lang="zh-CN"
        loading="lazy"
        :theme="isDark ? 'transparent_dark' : 'light'"
      />
    </div>
  </ClientOnly>
</template>

<style scoped>
.comments {
  margin-top: 2em
}
</style>
