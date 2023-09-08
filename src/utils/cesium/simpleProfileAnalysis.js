/**
 * @description: 简单坡度分析:根据鼠标绘制的线节点坐标进行坡度分析
 * @param {cartesian3} Polyline
 * @return {*}
 */

import * as echarts from "echarts";
function SimpleProfileAnalysis(Polyline) {
  var actualSamplePoints = 60; //点与点之间的插值数量。
  var points = [];
  var heightArr = [];
  // 根据线段插值
  for (var i = 0; i < Polyline.length - 1; i++) {
    lerp(points, Polyline[i], Polyline[i + 1], actualSamplePoints);
  }

  // 获取真实3dtile坐标
  viewer.scene.clampToHeightMostDetailed(points).then(function (ClampCoords) {
    //每一个点的高度
    for (var i = 0; i < ClampCoords.length; i++) {
      heightArr.push(Cesium.Cartographic.fromCartesian(ClampCoords[i]).height);
    }
    var HeightXarr = [];
    for (var i = 0; i < heightArr.length; i++) {
      HeightXarr.push(i);
    }




    // 绘制高程图
    var Heightchart = echarts.init(document.querySelector(".test"));
    var option2 = GetChartOption(HeightXarr, heightArr, "点位", "高程值");
    Heightchart.setOption(option2);
  });
}

/**
 * @description: 两点之间插值
 * @param {*} points 存储点的数组
 * @param {cartesian3} start 起点坐标
 * @param {cartesian3} end 终点坐标
 * @return {*}
 */
function lerp(points, start, end, actualSamplePoints) {
  for (var i = 0; i <= actualSamplePoints; i++) {
    var factor = i / actualSamplePoints;
    var cartesian = Cesium.Cartesian3.lerp(
      start,
      end,
      factor,
      new Cesium.Cartesian3()
    ); //插值点的c3
    points.push(cartesian);
  }
}

/**
 * @description: 获取chart  option
 * @param {*} heights
 * @return {*}
 */
function GetChartOption(Xarr, Yarr, Xname, Yname) {
  return {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    xAxis: {
      name: Xname,
      type: "category",
      boundaryGap: false,
      data: Xarr,
      nameTextStyle: {
        color: "#0f0",
      },
    },
    yAxis: {
      name: Yname,
      type: "value",
      nameTextStyle: {
        color: "#0f0",
      },
    },
    dataZoom: [
      {
        type: "inside",
      },
    ],
    lineStyle: {
      color: "#A23D35",
    },
    series: [
      {
        name: Yname,
        type: "line",
        smooth: true,
        sampling: "average",
        itemStyle: {
          color: "rgb(255, 70, 131)",
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgb(174, 21, 0)",
            },
            {
              offset: 1,
              color: "rgb(255, 204, 153)",
            },
          ]),
        },
        data: Yarr,
      },
    ],
  };
}

export default SimpleProfileAnalysis;
