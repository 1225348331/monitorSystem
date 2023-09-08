/*
 * @Description: 
 * @Date: 2023-09-08 16:04:30
 * @LastEditTime: 2023-09-08 17:33:03
 */

import SimpleProfileAnalysis from './simpleProfileAnalysis'

/* 在模型上创建点 */
function drawPolyline() {
  var activeShapePoints = [],
    floatingPoint,
    startPoint,
    activeShape;
  viewer.entities.removeAll();
  var handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);

  //todo：拾取模型表面的位置
  //左击事件
  handler.setInputAction(function (evt) {
    var scene = viewer.scene;
    // var pickedObject = scene.pick(evt.endPosition); //判断是否拾取到模型
    if (scene.pickPositionSupported) {
      var cartesian = viewer.scene.pickPosition(evt.position);
      if (Cesium.defined(cartesian)) {
        if (activeShapePoints.length == 0) {
          //如果是初始状态 一个浮动点 一个定点 线坐标callback
          startPoint = addPoint(cartesian); //定点
          floatingPoint = addPoint(cartesian); //浮动点
          activeShapePoints.push(cartesian); //线的折点坐标
          var dynamicPositions = new Cesium.CallbackProperty(function () {
            return activeShapePoints;
          }, false); //线的坐标动态改变
          activeShapePoints.push(cartesian); //线的折点坐标
          activeShape = addPolyline(dynamicPositions); //根据线坐标添加线
        } else {
          activeShapePoints.push(cartesian);
        }
      }
      //添加完点击事件后 才能有移动事件
      // 鼠标移动事件
      handler.setInputAction(function (event) {
        var scene = viewer.scene;
        var pickedObject = scene.pick(event.endPosition); //判断是否拾取到模型
        if (scene.pickPositionSupported) {
          var cartesian = viewer.scene.pickPosition(event.endPosition);
          if (Cesium.defined(cartesian)) {
            floatingPoint.position.setValue(cartesian); //浮动点坐标修改
            activeShapePoints.pop();
            activeShapePoints.push(cartesian);
          }
        }
      }, Cesium.ScreenSpaceEventType.MOUSE_MOVE);
    }
  }, Cesium.ScreenSpaceEventType.LEFT_CLICK);

  //右键结束绘制点
  handler.setInputAction(function () {
    terminateShape();
    SimpleProfileAnalysis(activeShapePoints)

  }, Cesium.ScreenSpaceEventType.RIGHT_CLICK);

  //结束事件
  function terminateShape() {
    activeShapePoints.pop(); //去除最后一个动态点
    // activeShapePoints.push(activeShapePoints[0])
    viewer.entities.remove(floatingPoint); //去除动态点图形（当前鼠标点）
    viewer.entities.remove(startPoint); //去除动态点图形（当前鼠标点）
    handler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_CLICK); //移除事件
    handler.removeInputAction(Cesium.ScreenSpaceEventType.MOUSE_MOVE); //移除事件
    handler.removeInputAction(Cesium.ScreenSpaceEventType.RIGHT_CLICK); //移除事件
    floatingPoint = undefined;
    activeShape = undefined;
    startPoint = undefined;
  }

  //添加点 C3
  function addPoint(positionData) {
    var point = viewer.entities.add({
      position: positionData,
      point: {
        color: Cesium.Color.CRIMSON,
        pixelSize: 7,
        outlineColor: Cesium.Color.ALICEBLUE,
        outlineWidth: 1,
        heightReference: Cesium.HeightReference.clampToGround,
      },
    });
    return point;
  }

  //添加线
  function addPolyline(positionData) {
    var shape = viewer.entities.add({
      polyline: {
        positions: positionData,
        clampToGround: true,
        classificationType: Cesium.ClassificationType.BOTH,
        width: 3,
        material: Cesium.Color.BLUE,
      },
    });
    return shape;
  }
}

export default drawPolyline;
