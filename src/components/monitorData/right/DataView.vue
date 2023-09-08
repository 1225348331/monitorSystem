<!--
 * @Description: 
 * @Date: 2023-09-07 15:11:33
 * @LastEditTime: 2023-09-08 09:29:25
-->
<script setup>
import * as echarts from 'echarts'
import { onMounted } from 'vue';

const props = defineProps(["isShow"])

function setChart() {
  let chart = echarts.init(document.querySelector('#dataView'))
  let option = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'line',
        symbol: 'triangle',
        symbolSize: 20,
        lineStyle: {
          color: '#5470C6',
          width: 4,
          type: 'dashed'
        },
        itemStyle: {
          borderWidth: 3,
          borderColor: '#EE6666',
          color: 'yellow'
        }
      }
    ]
  };
  chart.setOption(option)
}

onMounted(() => {
  if (props.isShow) setChart()
})
</script>
<template>
  <div id="dataView" v-show="props.isShow"></div>
</template>
<style lang='scss' scoped>
#dataView {
  width: 45vw;
  height: 60vh;
  box-shadow: 1px 1px 12px rgba(0, 0, 0, 0.12);
  border-radius: 10px;
  background: linear-gradient(180deg, rgba(21, 32, 89, 0.627) 0%, rgba(0, 162, 255, 0.05) 100%);
  backdrop-filter: blur(5px);
}
</style>
