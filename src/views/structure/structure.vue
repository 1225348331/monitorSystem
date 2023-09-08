<!--
 * @Description: 
 * @Date: 2023-09-06 15:13:23
 * @LastEditTime: 2023-09-06 15:36:46
-->
<script setup>
import { ref } from 'vue'

</script>
<template>
  <el-row justify="space-around">
    <el-col :span="14">
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span>结构物地图</span>
          </div>
        </template>
        <div id="map"></div>
      </el-card>
    </el-col>
    <el-col :span="9">
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span>结构物列表</span>
          </div>
        </template>
        <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
      </el-card>
    </el-col>
  </el-row>
</template>
<style lang='scss' scoped>
.el-row {
  width: 100vw;
  margin-top: 10px;

  .el-col {
    border-radius: 7px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

    .box-card {
      border-radius: 7px;
      height: 90vh;
      min-height: 36px;
      :deep(.el-card__header)  {
        border-width: 4px;
      }
    }
  }
}
</style>
