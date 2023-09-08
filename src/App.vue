<!--
 * @Description: 
 * @Date: 2023-09-06 13:39:36
 * @LastEditTime: 2023-09-07 14:26:09
-->
<script setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router';
let router = useRouter()

</script>

<template>

  <div style="position: relative;">
    <router-view></router-view>
  </div>
  
</template>

<style lang="scss" scoped>
</style>
