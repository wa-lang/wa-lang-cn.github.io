<script setup lang="ts">
import { VPTeamMembers } from 'vitepress/theme'
import { TEAM_MEMBERS } from '../constants'
</script>

<template>
  <div class="content">
    <div class="title">开发组成员</div>
    <VPTeamMembers size="small" :members="TEAM_MEMBERS" />
  </div>
</template>

<style scoped>
.content {
  padding: 2rem;
}

.title {
  margin: 16px 0 48px;
  color: #909AA3;
  padding-top: 24px;
  letter-spacing: -.02em;
  line-height: 32px;
  font-size: 24px;
  text-align: center;
}
</style>
