<!--
 * @Description: 
 * @Date: 2023-09-06 15:44:07
 * @LastEditTime: 2023-09-06 16:22:32
-->
<script setup>


</script>
<template>
  <div id="filterItem">
    <div id="filterName">报警等级</div>
    <div id="filterSelect">
      <li>全部</li>
      <li>I级</li>
      <li>Ⅱ级</li>
      <li>Ⅲ级</li>
      <li>Ⅳ级</li>
    </div>
  </div>
</template>
<style lang='scss' scoped>
#filterItem {
  width: 30%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  margin-left: 50px;
  margin-bottom: 25px;

  #filterName {
    font-weight: bolder;
    line-height: 30px;
  }

  #filterSelect {
    flex-grow: 1;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    list-style: none;

    li{
      text-align: center;
      width: 70px;
      height: 30px;
      line-height: 30px;
      border-radius: 14px;
      background-color: rgb(70, 199, 220);
      cursor: pointer;
    }
  }
}
</style>
