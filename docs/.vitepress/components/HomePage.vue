<script setup lang="ts">
import { COMMUNITIES, CONTRIBUTORS, FRIENDLY_LINK } from '../constants'
</script>

<template>
  <div class="content">
    <div class="title">
      社区资讯
    </div>
    <div class="list" :style="{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }">
      <a
        v-for="(comms, idx) in COMMUNITIES"
        :key="idx"
        class="card"
        :href="comms.link"
        target="_blank"
        :style="{ cursor: 'pointer' }"
      >
        <img class="card__logo" :src="`/c-logo/${comms.logoName}`">
        <span class="card__name" :style="{ marginTop: '8px' }">{{ comms.name }}</span>
      </a>
    </div>
    <div class="title">
      贡献成员
    </div>
    <div class="list">
      <div v-for="(ctr, idx) in CONTRIBUTORS" :key="idx" class="card">
        <span class="card__name">{{ ctr.name }}</span>
        <span class="card__points">贡献点：{{ ctr.points }}</span>
      </div>
    </div>
    <div class="title">
      友情链接
    </div>
    <div class="list" :style="{ justifyItems: 'center' }">
      <a
        v-for="(friend, idx) in FRIENDLY_LINK"
        :key="idx"
        class="card"
        :href="friend.link"
        target="_blank"
        :style="{ cursor: 'pointer', maxWidth: '300px' }"
      >
        <img class="card__logo" :src="`/c-logo/${friend.logoName}`">
        <span class="card__name" :style="{ margin: '18px 0 12px', fontSize: '22px' }">{{ friend.name }}</span>
      </a>
    </div>
  </div>
</template>

<style scoped>
.content {
  padding: 2rem;
  margin-top: 60px;
}

.list {
  display: grid;
  gap: 16px;
  margin: 0 auto;
  max-width: 1152px;
  grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
}

.card {
  padding: 16px 32px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  border-radius: 12px;
  overflow: hidden;
  background-color: var(--vp-c-bg-soft);
  text-align: center;
}

.card__name {
  line-height: 24px;
  font-size: 16px;
  font-weight: 600;
  color: var(--vp-c-text);
}

.card__points {
  padding-top: 4px;
  line-height: 20px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-2);
}

.card__logo {
  height: 34px;
  margin: 0 auto;
}

.title {
  margin: 16px 0 32px;
  color: #909AA3;
  padding-top: 24px;
  letter-spacing: -.02em;
  line-height: 32px;
  font-size: 24px;
  text-align: center;
}
</style>
