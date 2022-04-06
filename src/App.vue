<script setup lang="ts">
import { useRoute } from 'vue-router'
import LayoutContent from '@/layouts/LayoutContent.vue'
import LayoutFull from '@/layouts/LayoutFull.vue'

const route = useRoute()
</script>

<template>
  <LayoutFull v-if="route.meta.layout === 'full'" />
  <LayoutContent v-else />
</template>

<style></style>
