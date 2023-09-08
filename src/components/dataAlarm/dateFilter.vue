<!--
 * @Description: 
 * @Date: 2023-09-06 15:44:07
 * @LastEditTime: 2023-09-06 16:30:57
-->
<script setup>
import { ref } from 'vue';
let radio = ref(1)
</script>
<template>
  <div id="filterItem">
    <div id="filterName">事件范围</div>
    <div id="filterSelect">
      <el-radio-group v-model="radio" class="">
        <el-radio label="1" size="large">全部</el-radio>
        <el-radio label="2" size="large">今天</el-radio>
        <el-radio label="3" size="large">本周</el-radio>
        <el-radio label="4" size="large">本月</el-radio>
      </el-radio-group>
    </div>
  </div>
</template>
<style lang='scss' scoped>
#filterItem {
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  margin-left: 50px;
  margin-bottom: 10px;

  #filterName {
    font-weight: bold;
    line-height: 40px;
  }

  #filterSelect {
    flex-grow: 1;
    list-style: none;

    .el-radio-group {
      display: flex;
      flex-flow: row nowrap;
      justify-content: flex-start;
      padding-left: 20px;
    }
  }
}
</style>
