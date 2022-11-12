<template>
  <div id="container">
  <!-- 左侧导航条 -->
  <div class="leftNav" id="leftNav">
<el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
  <el-radio-button :label="false">展开</el-radio-button>
  <el-radio-button :label="true">收起</el-radio-button>
</el-radio-group>
<el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
  <el-menu-item index="1">
      <i class="el-icon-location"></i>
     <span slot="title">用户查询</span>
   </el-menu-item>
  <el-menu-item index="2"  @click="addFoodtype('/index/AllGoods')">
    <i class="el-icon-menu"></i>
    <span slot="title">商品查询</span>
  </el-menu-item>
  <el-menu-item index="3" @click="addFoodtype('/index/AllTypes')">
    <i class="el-icon-document"></i>
    <span slot="title">分类查询</span>
  </el-menu-item>
  <el-menu-item index="4">
    <i class="el-icon-setting"></i>
    <span slot="title">导航四</span>
  </el-menu-item>
</el-menu>
</div>

<!-- 右侧边栏 -->
  <router-view></router-view>
</div>
</template>

<script>
 
  export default {
    name:"leftNav",
    data() {
      return {
        isCollapse: true,
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
    }
  }
</script>

<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 150px;
    min-height: 400px;
  }
  #right-view{
    width: 1050px;
    height: 900px;
    float: right;
    background-color: aqua;
  }
  #container{
    width: 1200px;
    height: 1000px;
    margin: 0 auto;

  }
  #leftNav{
    width:150px;
    float: left;
  }
</style>