<script setup lang="ts">

  import Header from "@/components/Header.vue";
  import Menu from "@/layout/Menu.vue";

</script>

<template>

  <div style="height: 100%">
    <el-container style="height: 100%; ">
      <el-aside
          >
        <Menu/>
      </el-aside>

      <el-container>
        <el-header style=" width: 100%; border-bottom: 1px solid #ccc;">
          <Header/>
        </el-header>
        <el-main style="background-color: aquamarine">
          111
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>

</template>
