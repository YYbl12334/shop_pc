<template>
  <div class="about">
    <div>
      {{count}}
    </div>
    <h1>This is an about page</h1>
    <el-button @click="add"></el-button>
  </div>
</template>

<script setup>

import {testStore} from "@/stores/test/index";
import {computed} from "vue";

const store = testStore();
const count = computed(() => {
  return store.getCount
});
const add = () => {
  store.setCount(++store.count)
}
</script>

<style lang="sass">

</style>
