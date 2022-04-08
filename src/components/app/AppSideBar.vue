<script setup lang="ts">
import { NLayoutSider, NMenu } from 'naive-ui'
import type { MenuOption } from 'naive-ui'
import { RouterLink, useRouter } from 'vue-router'
import { h } from 'vue'
import { renderIcon } from '@/utils/utils'

const router = useRouter()
</script>

<template>
  <n-layout-sider
    :native-scrollbar="false"
    bordered
    position="static"
    width="260"
  >
    <n-menu :options="menuOptions" />
  </n-layout-sider>
</template>
