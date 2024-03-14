<script setup lang="ts">

</script>

<template>
  <div style="line-height: 60px; display: flex">
    <div style="flex: 1; font-size: 20px">
      <span style="cursor: pointer; font-size: 18px"></span>
      <el-breadcrumb separator="/" style="display: inline-block; margin-left: 10px">
        <el-breadcrumb-item :to="'/'">首页</el-breadcrumb-item>
        <el-breadcrumb-item>1</el-breadcrumb-item>
      </el-breadcrumb>
    </div>


    <el-dropdown style="width: 100px;cursor: pointer">
      <span>王小虎 <i class="el-icon-arrow-down" style="margin-left: 15px"></i></span>
      <el-dropdown-menu slot="dropdown" style="text-align: center">
        <el-dropdown-item>查看</el-dropdown-item>
        <el-dropdown-item>个人信息</el-dropdown-item>
        <router-link to="/login">
          <el-dropdown-item>退出

          </el-dropdown-item>
        </router-link>

      </el-dropdown-menu>
    </el-dropdown>

  </div>

</template>

<style scoped lang="scss">

</style>