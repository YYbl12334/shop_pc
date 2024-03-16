<script setup lang="ts">
  import {collapseStore} from "@/stores/collapse/index";
  import {computed} from 'vue';
  import {Expand, Fold} from "@element-plus/icons-vue";


  // 实例化共享数据
  const store = collapseStore()
  // 获取共享数据，并将值赋给status变量
  const status = computed(() => {
    return store.getCollapse
  })
  // 点击图标--点击时，让共享数据的值取反
  const iconClick = () => {
    store.setCollapse(!store.collapse)
  }


</script>

<template>
  <el-icon :size="30" @click="iconClick">
    <component :is="status ? Expand : Fold"></component>

  </el-icon>

</template>

<style scoped lang="scss">

</style>