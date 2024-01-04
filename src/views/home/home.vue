<template>
  <div>你好{{ userStore.username }}</div>
</template>

<script setup lang="ts">
//引入生命周期钩子函数
import { onMounted } from 'vue'
//获取用户相关的小仓库
import useUserStore from '@/store/modules/user'
let userStore = useUserStore()
//获取用户信息
onMounted(async () => {
  await userStore.getUserInfo()
})
</script>

<style scoped></style>
