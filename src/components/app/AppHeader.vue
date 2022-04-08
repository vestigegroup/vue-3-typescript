<script setup lang="ts">
import { NLayoutHeader, NPageHeader, NButton } from 'naive-ui'
</script>

<template>
  <n-layout-header>
    <n-page-header style="padding: 20px">
      <template #extra>
        <n-space>
          <n-button>Refresh</n-button>
        </n-space>
      </template>
    </n-page-header>
  </n-layout-header>
</template>
