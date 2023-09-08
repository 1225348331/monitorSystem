<!--
 * @Description: 
 * @Date: 2023-09-06 13:39:36
 * @LastEditTime: 2023-09-08 15:37:58
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
const activeIndex = ref('1')
const handleSelect = (key, keyPath) => {
  router.push({
    name:key
  })
}
</script>

<template>
  <el-menu :default-active="activeIndex" :router="true" class="el-menu-demo" mode="horizontal" text-color="#fff"
    background-color="rgb(22, 50, 79)" :ellipsis="false"  default-active="/" @select="handleSelect">
    <h3>同感云结构物健康监测管理平台</h3>
    <h3>|</h3>
    <span>南京市G17地块基坑监测项目</span>
    <div class="flex-grow"></div>
    <el-menu-item index="/map">
      <el-icon><icon-menu /></el-icon>
    </el-menu-item>
    <el-menu-item index="dataAlarm">
      <el-icon><document /></el-icon>
    </el-menu-item>
    <el-menu-item index="structure">
      <el-icon><Location /></el-icon>
    </el-menu-item>
    <el-menu-item index="map">
      <el-icon><setting /></el-icon>
    </el-menu-item>
  </el-menu>
  <div style="position: relative; width: 100vw;">
    <router-view></router-view>
  </div>
  
</template>

<style lang="scss" scoped>
.el-menu {
  height: 7vh;
  color: white;

  h3 {
    height: 100%;
    line-height: 6.5vh;
    padding-left: 10px;
  }

  span {
    color: rgb(105, 117, 138);
    font-size: 14px;
    height: 100%;
    line-height: 6.5vh;
    padding-left: 10px;
    font-weight: bolder;
  }
}

.flex-grow {
  flex-grow: 1;
}
</style>
