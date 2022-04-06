<script setup lang="ts">
import { NLayout } from 'naive-ui'
import AppSideBar from '@/components/app/AppSideBar.vue'
import AppHeader from '@/components/app/AppHeader.vue'
import AppFooter from '@/components/app/AppFooter.vue'
import AppContent from '@/components/app/AppContent.vue'
</script>

<template>
  <n-space vertical="" size="large">
    <n-layout has-sider>
      <app-side-bar />
      <n-layout>
        <app-header />
        <app-content />
        <app-footer />
      </n-layout>
    </n-layout>
  </n-space>
</template>
