<script setup lang="ts">

  import Header from "@/components/Header.vue";
  import Menu from "@/layout/Menu.vue";
  import Collapse from "./Collapse.vue"
  import BreadCrumb from "@/layout/BreadCrumb.vue";
</script>

<template>

  <div style="height: 100%">
    <el-container class="mycontainer">
      <el-aside width="auto" class="aside">
        <Menu/>
      </el-aside>
      <el-container>
        <el-header class="header">
          <Collapse></Collapse>
          <BreadCrumb></BreadCrumb>
        </el-header>
        <el-main style="background-color: #FFF" class="mymain">
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>

</template>

<style scoped lang="scss">
  .mycontainer {
    height: 100%;

    .aside {

    }

    .header {
      background-color: #334154;
      display: flex;
      align-items: center;
      color: #FFF;
    }

    .mymain {

    }
  }

</style>