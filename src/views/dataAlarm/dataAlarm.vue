<!--
 * @Description: 
 * @Date: 2023-09-06 15:13:23
 * @LastEditTime: 2023-09-06 16:58:36
-->
<script setup>
import { ref } from 'vue'
import Filter from '@/components/dataAlarm/filter'
import dateFilter from '@/components/dataAlarm/dateFilter.vue';
import selectFilter from '@/components/dataAlarm/selectFilter.vue'

const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]

const headerStyle = function () {
  return {
    paddingBottom: '4px',
    borderBottom: '4px solid rgb(228, 231, 237)'
  }
}
</script>
<template>
  <el-row justify="space-around">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span style="font-size: 25px;font-weight:bolder">数据报警</span>
          <span style="font-size: 18px;font-weight:bolder;padding-left:10px;color: rgb(150, 166, 191);">硬件故障</span>
        </div>
      </template>
      <div id="filter">
        <Filter />
        <Filter />
        <Filter />
        <dateFilter style="flex-grow: 1;" />
        <selectFilter />
      </div>
    </el-card>
    <el-card class="box-card">

      <div id="filterTable">
        <el-table :data="tableData" stripe style="width: 100%" :header-cell-style="headerStyle"
          :header-row-style="headerStyle">
          <el-table-column prop="date" label="结构物" />
          <el-table-column prop="name" label="测区" />
          <el-table-column prop="address" label="点位/测点/测组" />
          <el-table-column prop="name" label="报警类型" />
          <el-table-column prop="name" label="报警等级" />
          <el-table-column prop="name" label="报警状态" />
          <el-table-column prop="name" label="报警次数" />
          <el-table-column prop="name" label="产生时间" />
          <el-table-column prop="name" label="更新时间" />
          <el-table-column prop="name" label="操作" />
        </el-table>
      </div>
    </el-card>



  </el-row>
</template>
<style lang='scss' scoped>
.box-card {
  border-radius: 7px;
  width: 96vw;
  margin-top: 10px;
  margin-bottom: 10px;
  min-height: 36px;

  :deep(.el-card__header) {
    border-width: 4px;
  }

  #filter {
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: flex-start;
  }
}
</style>
