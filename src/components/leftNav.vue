<template>
  <div id="container">
  <!-- 左侧导航条 -->
  <div class="leftNav" id="leftNav">
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
  <el-radio-button :label="false">展开</el-radio-button>
  <el-radio-button :label="true">收起</el-radio-button>
</el-radio-group>
<el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
  <el-menu-item index="1" @click="addFoodtype('/index/emp')">
      <i class="el-icon-location"></i>
     <span slot="title">用户查询</span>
   </el-menu-item>
  <el-menu-item index="2"  @click="addFoodtype('/index/AllGoods')">
    <i class="el-icon-menu"></i>
    <span slot="title">商品管理</span>
  </el-menu-item>
  <el-menu-item index="3" @click="addFoodtype('/index/AllTypes')">
    <i class="el-icon-document"></i>
    <span slot="title">分类管理</span>
  </el-menu-item>
  <el-menu-item index="4">
    <i class="el-icon-setting"></i>
    <span slot="title">导航四</span>
  </el-menu-item>
</el-menu>
</div>

<!-- 右侧边栏 -->
<div id="right-view">
  <router-view></router-view>
</div>
</div>
</template>

<script>
 
  export default {
    name:"leftNav",
    data() {
      return {
        isCollapse: true,
        content:'',
        goBackFlag:false
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      addFoodtype(st){
              console.log(this.$parent);
              this.$parent.routerevent(st,'');
          },
      goBack() {
        console.log('go back');
      }
    }
  }
</script>

<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 150px;
    min-height: 400px;
  }
  #right-view{
    width: calc(100% - 230px);
    height: 100%;
    float: right;
    background-color: aqua;
    padding: 20px;
  }
  #container{
    height: 100%;
  }
  #leftNav{
    width:190px;
    height: 100%;
    float: left;
  }
  .back{
    height: 60px;
    background-color: white;
    line-height: 60px;
  }
</style>