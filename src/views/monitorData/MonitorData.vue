<!--
 * @Description: 
 * @Date: 2023-09-06 17:05:59
 * @LastEditTime: 2023-09-08 18:03:11
-->
<script setup>
import Left from '@/components/monitorData/Left.vue';
import Right from '@/components/monitorData/Right.vue';
import { onMounted, provide, ref } from 'vue';


let rightShow = ref(false)
provide('rightShow', rightShow)



onMounted(() => {
  viewer = new Cesium.Viewer('cesiumContainer', {
    imageryProvider: new Cesium.WebMapTileServiceImageryProvider({
      url: "http://{s}.tianditu.gov.cn/img_c/wmts?service=wmts&request=GetTile&version=1.0.0" +
        "&LAYER=img&tileMatrixSet=c&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}" +
        "&style=default&format=tiles&tk=93724b915d1898d946ca7dc7b765dda5",
      layer: "tdtyxLayer",
      style: "default",
      format: "tiles",
      tileMatrixSetID: "c",
      subdomains: ["t0", "t1", "t2", "t3", "t4", "t5", "t6", "t7"],
      tilingScheme: new Cesium.GeographicTilingScheme(),
      tileMatrixLabels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22"],
    }),
    vrButton: false,
    navigationHelpButton: false,
    navigationInstructionsInitiallyVisible: false,
    homeButton: false,
    animation: false,
    timeline: false,
    baseLayerPicker: false,
    geocoder: false,
    homeButton: true,
    sceneModePicker: false,
    navigationHelpButton: false,
    showStatusBar: false,
    fullscreenButton: false,
    infoBox: false,
    terrainProvider: Cesium.createWorldTerrain(),
  });
  document.querySelector('.cesium-widget-credits').style.display = 'none'
  document.querySelector('.cesium-viewer-navigationContainer').style.display = 'none'
  document.querySelector('.cesium-viewer-toolbar').style.display = 'none'
  viewer.scene.globe.depthTestAgainstTerrain = true
  console.log(Cesium)

  let position = Cesium.Cartesian3.fromDegrees(116.04693, 39.92528, 30);
  let html = `< style="width:300px;height300px;backgroundColor:red;">11111</div>`;
  var warningDiv = new Cesium.Kq3dDragableHtmlTag(viewer, {
    html: html,
    position: position,
    anchor: [-38, -33],
    noEvent: true,
  });


})
</script>
<template>
  <div id="cesiumContainer"></div>
  <Left />
  <Right />
  <div class="PoduChart"></div>
  <div class="HeightChart"></div>
</template>
<style lang='scss' scoped>
#cesiumContainer {
  width: 100vw;
  height: 93vh;
}


.HeightChart {
  width: 100%;
  height: 400px;
  position: absolute;
  right: 0px;
  bottom: 0px;
  z-index: 2;
  border: 1px solid red;
}
</style>
