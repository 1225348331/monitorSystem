<!--
 * @Description: 
 * @Date: 2023-09-06 16:28:52
 * @LastEditTime: 2023-09-06 16:37:37
-->
<template>
  <div id="filterItem">
    <el-select v-model="value" class="m-2" placeholder="Select" size="large">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
    </el-select>
    <el-select v-model="value" class="m-2" placeholder="Select" size="large" disabled >
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
    </el-select>
    <el-select v-model="value" class="m-2" placeholder="Select" size="large" disabled >
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
    </el-select>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')

const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]
</script>
<style lang='scss' scoped>
#filterItem {
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  margin-left: 50px;
  margin-bottom: 10px;

  .el-select{
    width: 27%;
    padding-right: 30px;
  }
}
</style>