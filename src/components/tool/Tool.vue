<!--
 * @Description: 
 * @Date: 2023-09-08 13:49:04
 * @LastEditTime: 2023-09-08 16:27:25
-->
<script setup>
import { onMounted, ref } from 'vue';
import drawPolyline from '@/utils/cesium/drawPolyline'

function measure(mode) {
  if(mode == 'drawPolyline'){
    drawPolyline()
  }
  return
  //声明测量类
  var measureHandler = new Cesium.Kq3dMeasureHandler(viewer);
  measureHandler.startMeasure(mode); 
  // 
}



let data = ref([
  {
    style: {
      background: "url(./src/assets/image/tool/距离1.png)"
    },
    mode: Cesium.Kq3dMeasureMode.Distance,

  },
  {
    style: {
      background: "url(./src/assets/image/tool/面积1.png)",
    },
    mode: Cesium.Kq3dMeasureMode.Area 
  },
  {
    style: {
      background: "url(./src/assets/image/tool/空间分析1.png)",
    },
    mode: 'drawPolyline' 
  },
  {
    style: {
      background: "url(./src/assets/image/tool/定位1.png)",
    },
    mode: Cesium.Kq3dMeasureMode.Coordinate
  },
  {
    style: {
      background: "url(./src/assets/image/tool/清除1.png)",
    },
    mode: Cesium.Kq3dMeasureMode.Coordinate
  }])

onMounted(() => {
  //声明测量类
  // var measureHandler = new Cesium.MeasureHandler(viewer);
  // console.log(measureHandler)
})

</script>
<template>
  <div id="toolPanel">
    <div v-for="item in data" :style="item.style" @click="measure(item.mode)"></div>
  </div>
</template>
<style lang='scss' scoped>
#toolPanel {
  position: absolute;
  z-index: 1;
  top: 20px;
  right: 10px;
  display: flex;
  flex-flow: row nowrap;

  div {
    width: 40px;
    height: 40px;
    margin-right: 10px;
    cursor: pointer;
  }
}
</style>
