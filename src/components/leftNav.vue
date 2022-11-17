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
  <el-menu-item index="2"  @click="addFoodtype('/index/AllGoods','商品管理')">
    <i class="el-icon-menu"></i>
    <span slot="title">商品管理</span>
  </el-menu-item>
  <el-menu-item index="3" @click="addFoodtype('/index/AllTypes','分类管理')">
    <i class="el-icon-document"></i>
    <span slot="title">分类管理</span>
  </el-menu-item>
  <el-menu-item index="4">
    <i class="el-icon-setting"></i>
    <span slot="title"></span>
  </el-menu-item>
</el-menu>
</div>

<!-- 右侧边栏 -->
<div id="right-view">
  <div class="nav">
    <span v-if="getnavfalse()" class="goBackflag" @click="goBack()" style="font-size: 17px">
      <- 返回</span>
    <span>{{getnavname()}}</span>
  </div>
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
        goBackFlag:false,
        name:''
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      addFoodtype(st,st1){
              console.log(this.$parent);
              this.$parent.routerevent(st,st1,'');
          },
      goBack() {
        this.$parent.routerevent('/index/AllGoods','商品管理','');
      },
      getnavname(){
        return this.$store.state.name
      },
      getnavfalse(){
        return this.$store.state.goBackFlag
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
  .nav{
    height: 60px;
    line-height: 60px;
    background-color: white;
    margin-bottom: 10px;
    padding-left: 8px;
    font-size: 16px ;
  }
  .goBackflag{
    margin-right: 10px;
  }
</style>