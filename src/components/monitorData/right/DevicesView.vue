<!--
 * @Description: 
 * @Date: 2023-09-07 15:12:09
 * @LastEditTime: 2023-09-08 09:26:12
-->
<script setup>
import { onMounted } from 'vue';
const props = defineProps(["isShow"])

onMounted(() => {
})
</script>
<template>
  <div id="deviceView" v-show="props.isShow">
    <div id="pic"></div>
    <div id="content">
      <div id="contentItem">
        <div id="name">
          <span>1号标靶: </span>
          <span>机器视觉2-1</span>
        </div>
        <div id="pixelLength">
          <span>像素直径: </span>
          <span>108px</span>
        </div>
        <div id="realLength">
          <span>物理直径: </span>
          <span>90mm</span>
        </div>
        <div id="qingxidu">
          <span>清晰度: </span>
          <span>63%</span>
        </div>
        <div id="coordinate">
          <span>坐标(x,y): </span>
          <span>2380.98,173.083</span>
        </div>
      </div>
      <div id="contentItem">
        <div id="name">
          <span>1号标靶: </span>
          <span>机器视觉2-1</span>
        </div>
        <div id="pixelLength">
          <span>像素直径: </span>
          <span>108px</span>
        </div>
        <div id="realLength">
          <span>物理直径: </span>
          <span>90mm</span>
        </div>
        <div id="qingxidu">
          <span>清晰度: </span>
          <span>63%</span>
        </div>
        <div id="coordinate">
          <span>坐标(x,y): </span>
          <span>2380.98,173.083</span>
        </div>
      </div>
      <div id="contentItem">
        <div id="name">
          <span>1号标靶: </span>
          <span>机器视觉2-1</span>
        </div>
        <div id="pixelLength">
          <span>像素直径: </span>
          <span>108px</span>
        </div>
        <div id="realLength">
          <span>物理直径: </span>
          <span>90mm</span>
        </div>
        <div id="qingxidu">
          <span>清晰度: </span>
          <span>63%</span>
        </div>
        <div id="coordinate">
          <span>坐标(x,y): </span>
          <span>2380.98,173.083</span>
        </div>
      </div>
      <div id="contentItem">
        <div id="name">
          <span>1号标靶: </span>
          <span>机器视觉2-1</span>
        </div>
        <div id="pixelLength">
          <span>像素直径: </span>
          <span>108px</span>
        </div>
        <div id="realLength">
          <span>物理直径: </span>
          <span>90mm</span>
        </div>
        <div id="qingxidu">
          <span>清晰度: </span>
          <span>63%</span>
        </div>
        <div id="coordinate">
          <span>坐标(x,y): </span>
          <span>2380.98,173.083</span>
        </div>
      </div>
      <div id="contentItem">
        <div id="name">
          <span>1号标靶: </span>
          <span>机器视觉2-1</span>
        </div>
        <div id="pixelLength">
          <span>像素直径: </span>
          <span>108px</span>
        </div>
        <div id="realLength">
          <span>物理直径: </span>
          <span>90mm</span>
        </div>
        <div id="qingxidu">
          <span>清晰度: </span>
          <span>63%</span>
        </div>
        <div id="coordinate">
          <span>坐标(x,y): </span>
          <span>2380.98,173.083</span>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang='scss' scoped>
#deviceView {
  width: 45vw;
  height: 60vh;
  box-shadow: 1px 1px 12px rgba(0, 0, 0, 0.12);
  border-radius: 10px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  padding: 20px 5px;
  background: linear-gradient(180deg, rgba(21, 32, 89, 0.627) 0%, rgba(0, 162, 255, 0.05) 100%);
  backdrop-filter: blur(5px);

  #pic {
    width: 40%;
    border-radius: 10px;
    background: url('@/assets/image/1.png');
    background-size: 100% 100%;
  }

  #content {
    width: 55%;
    height: 100%;
    overflow-y: auto;

    #contentItem {
      width: 100%;
      border-radius: 10px;
      background-color: rgb(245, 247, 250);
      box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.12);
      display: flex;
      flex-flow: row wrap;
      justify-content: flex-start;
      padding: 5px;
      box-sizing: border-box;
      margin-bottom: 7px;

      div {
        width: 45%;
        padding: 5px;

        &:nth-child(1) {
          width: 100%;
        }

        span:nth-child(1) {
          color: gray;
          margin-right: 2px;
        }
      }
    }
  }
}
</style>
