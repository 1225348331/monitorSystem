<!--
 * @Description: 
 * @Date: 2023-09-07 14:11:52
 * @LastEditTime: 2023-09-08 15:15:08
-->
<script setup>
import { Calendar } from '@element-plus/icons-vue'
import { inject, provide, ref, watch } from 'vue';
import DataView from './right/DataView.vue';
import DevicesView from './right/DevicesView.vue';
import Tool from '@/components/tool/Tool.vue'
let rightShow = inject('rightShow')
const dataViewisShow = ref(false)
const deviceViewisShow = ref(false)

watch(() => [dataViewisShow.value, deviceViewisShow.value], ([ndataShow, ndeviceShow], [odataShow, odeviceShow]) => {
  if (ndataShow && ndeviceShow) {
    if (odataShow) {
      dataViewisShow.value = false
    } else {
      deviceViewisShow.value = false
    }
  }
})

</script>
<template>
  <Tool />
  <div id="rightPanel" v-show="rightShow">
    <div id="tab">
      <p>[ 基准时间： 2023-04-02 21:00:00 ]</p>
      <div @click="dataViewisShow = !dataViewisShow" :class="{ active: dataViewisShow }">
        <el-icon>
          <calendar />
        </el-icon>
        数据视图
      </div>
      <div @click="deviceViewisShow = !deviceViewisShow" :class="{ active: deviceViewisShow }">
        <el-icon>
          <calendar />
        </el-icon>
        设备视图
      </div>
    </div>
    <DataView :isShow="dataViewisShow" />
    <DevicesView :isShow="deviceViewisShow" />
  </div>
</template>
<style lang='scss' scoped>
#rightPanel {
  position: absolute;
  right: 10px;
  top: 70px;
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-start;
  align-items: flex-end;
  color: black;
  z-index: 1;

  #tab {
    right: 0px;
    width: 400px;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: flex-start;
    box-shadow: 1px 1px 12px rgba(3, 107, 171, 0.12);
    padding: 20px;
    border-radius: 10px;
    margin-bottom: 20px;
    background-color: rgba(21, 32, 89, 0.627);
    backdrop-filter: blur(5px);
    color: #fff;

    p {
      width: 100%;
      color: grey;
      font-weight: bolder;
      font-size: 14px;
    }

    div {
      width: 120px;
      height: 35px;
      border-radius: 10px;
      // box-shadow: 1px 1px 12px rgba(0, 0, 0, 0.12);
      margin-right: 10px;
      margin-top: 20px;
      text-align: center;
      line-height: 34px;
      cursor: pointer;

      .el-icon {
        vertical-align: middle;
      }
    }

  }

  .active {
    background-color: rgb(155, 209, 191);
  }
}
</style>
