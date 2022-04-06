<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from '@/components/app/AppHeader.vue'
import AppSideBar from '@/components/app/AppSideBar.vue'
import AppFooter from '@/components/app/AppFooter.vue'
</script>

<template>
  <div class="flex gap-4">
    <AppSideBar class="w-64 bg-orange-500" />
    <div class="app-body w-full mr-4">
      <AppHeader class="bg-red-500 p-2 mt-4" />
      <main class="main bg-blue-500 p-2 mt-2">
        <RouterView />
      </main>
      <AppFooter class="bg-green-500 p-2 mt-2" />
    </div>
  </div>
</template>
