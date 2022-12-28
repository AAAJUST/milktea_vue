<template>
  <div class="leader">

    <div class="head">
        <el-button type="primary" class="headinfo" plain @click="init('0')">待接单</el-button>
        <el-button type="success" class="headinfo" plain @click="init('1')">制作中</el-button>
        <el-button type="info" class="headinfo" plain @click="init('3')">已完成</el-button>
    </div>

    <div class="body">
        <el-table
            :data="tableData2"
            style="width: 100%">
            <el-table-column type="expand">
            <template slot-scope="props">
                <el-form label-position="left" inline class="demo-table-expand">
                <div v-for="(item, index) in props.row.goods"  :key="index" class="cardd">
                  <div style="height:70px">
                      <el-image
                          class="left"
                          style="width: 60px; height: 60px"
                          :src="getImage(item.img)"
                          fit="fill">
                      </el-image>
                      <div class="right" style="margin-top:20px;font-size:18px">
                          ￥{{item.price}}
                      </div>
                      <div class="left" style="margin-top:20px;font-size:16px;margin-left: 10px;">
                          商品名：{{item.name}}
                      </div>
                      <div class="left" style="margin-top:20px;font-size:16px;margin-left: 10px;">
                          x1
                      </div>
                  </div>
                </div>
            <el-divider></el-divider>
            <div class="right" style="margin-top:-14px"><span>合计：</span><span style="font-size:23px"><b>￥{{props.row.num}}</b></span></div>
                </el-form>
            </template>
            </el-table-column>
            <el-table-column
            label="下单时间"
            prop="updateTime">
            </el-table-column>
            <el-table-column
            label="订单号"
            prop="code">
            </el-table-column>
            <el-table-column
            label="数量"
            prop="lengths">
            </el-table-column>
            <el-table-column
            label="操作">
            <template slot-scope="scope">
                <el-button  size="mini" v-if="states == 0" @click="updatestate(scope.row.id,0)">接单</el-button>
                <el-button  size="mini"  v-if="states == 1" @click="updatestate(scope.row.id,1)">制作完成</el-button>
                <el-button disabled v-if="states == 3">已完成</el-button>
            </template>
            </el-table-column>
        </el-table>
        <div class="block">
            <el-pagination
            style="padding-left:35%"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[1, 2, 3, 4]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="counts">
            </el-pagination>
        </div>
    </div>
  </div>
</template>

<script>

import {getdingdanback}  from '@/api/dingdan'
import {updatedingdanback}  from '@/api/dingdan'

export default {
    data() {
      return {
        page: 1,
        pageSize: 2,
        tableData2:[],
        counts:0,
        states: 0
      }
    },
    methods: {
          init (state) {
            const params = {
              page: this.page,
              pageSize: this.pageSize,
              name: state
            }
            getdingdanback(params).then(res => {
              if (String(res.code) === '1') {
                this.tableData2 = res.data.records
                this.counts = Number(res.data.total)
                this.states = params.name
              } else {
                this.$message.error(res.msg || '操作失败')
              }
            }).catch(err => {
              this.$message.error('请求出错了：' + err)
            })
          },
          getImage (image) {
            return `http://localhost:8080/common/download?name=${image}`
          },
          updatestate(param,code){
            updatedingdanback(param).then(res => {
              if (String(res.code) === '1') {
                this.$message.success("操作成功")
                this.init(code)
              } else {
                this.$message.error(res.msg || '操作失败')
              }
            }).catch(err => {
              this.$message.error('请求出错了：' + err)
            })
          }
    }
}
</script>

<style>

.demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }

.leader{
    background-color: white;
}
.right{
  float: right;
}
.left{
  float: left;
}
.head{
    padding: 10px;
    padding-left: 30px;
}
.headinfo{
    margin-right: 20px;
}
.cardd{
  margin: 1px 10px;
}
</style>