<template>
  <!-- logo图片 -->
  <div class="logo">
    <img :src="MenuLogo" alt="logo"/>
    <span v-show="show" class="logo-title">{{ title }}</span>
  </div>
</template>
<script setup lang="ts">
  // 导入asset文件夹下的logo图片
  import MenuLogo from '@/assets/MenuLogo.png'

  import {ref, watch} from "vue";
  import {collapseStore} from "@/stores/collapse";

  const store = collapseStore();
  const show = ref(true)
  watch(
      () => store.getCollapse,
      (collapsed: boolean) => {
        if (!collapsed) {
          setTimeout(() => {
            show.value = !collapsed;
          }, 300);
        } else {
          show.value = !collapsed;
        }
      }
  )
  // logo标题
  const title = ref("转转乐");
</script>

<style scoped>
  .logo {
    display: flex;
    width: 100%;
    height: 60px;
    line-height: 60px;
    background: #334054;
    text-align: center;
    cursor: pointer;
    align-items: center;
  }

  /* 图片 */
  img {
    width: 36px;
    height: 36px;
    margin-right: 12px;
    margin-left: 20px;
  }

  .logo-title {
    color: #FFFFFF;
    font-weight: 800;
    line-height: 60px;
    font-size: 22px;
    font-family: FangSong;
  }
</style>