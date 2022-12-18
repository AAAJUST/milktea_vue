<template>
    <div style="width:100%;height: 80%;">
        <el-table
        ref=""
        stripe
        height="100%"
        :data="tableData"
        style="width: 100%"
        @selection-change="handleSelectionChange"
        >
        <el-table-column
        type="selection"
        width="55">
        </el-table-column>
        <el-table-column
        prop="name"
        label="商品名"
        width="80">
        </el-table-column>
        <el-table-column
        prop="img"
        label="图片"
        width="130"
        key="slot"
        >
      <template slot-scope="scope">
            <el-image style="width: 68px; height: 40px; border:none;cursor: pointer;" 
            :src="getImage(scope.row.img)"  >
            </el-image>
        </template>
        </el-table-column>
        <el-table-column
        prop="price"
        label="价格"
        show-overflow-tooltip>
        </el-table-column>
        <el-table-column label="操作">
        <template slot-scope="scope">
            <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.row.gouwuid)">删除</el-button>
        </template>
        </el-table-column>
    </el-table>
    <div style="">
      <el-button type="primary" @click="shopping" class="shopping">购买</el-button>
      <div class="Money">{{money}} <div class="Money1">￥</div></div>
    </div>
    </div>
</template>

<script>
import {getgouwuche}  from '@/api/gouwuche'
import {deletegouwuche}  from '@/api/gouwuche'
import {setdingdan}  from '@/api/dingdan'
import {deletegouwuches}  from '@/api/gouwuche'
export default {
    data() {
      return {
        tableData: [], 
        multipleSelection: [],
        checkList:[],
        money: '',
      }
    },
    created() {
        this.init()
    },
    methods: {
      async init () {
            await getgouwuche().then(res => {
              if (String(res.code) === '1') {
                this.tableData = res.data
              } else {
                this.$message.error(res.msg || '操作失败')
              }
            }).catch(err => {
              this.$message.error('请求出错了：' + err)
            })
          },
      handleDelete(id) {
        deletegouwuche(id).then(res => {
                if (res.code === 1) {
                  this.$message.success('删除成功！')
                  this.init() 
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
      handleSelectionChange (val){
        console.log(val);
        this.checkList = val
        let a = 0
        val.forEach((n) => {
          a += n.price
        })
        this.money = a
      },
      shopping(){
        let checkArr = []
        this.checkList.forEach((n) => {
          checkArr.push(n.id)
        })
        let checkArr2 = []
        this.checkList.forEach((n) => {
          checkArr2.push(n.gouwuid)
        })
        setdingdan(checkArr.join(',')).then(res => {
                if (res.code === 1) {
                  this.$message.success('添加成功！')
                  deletegouwuches(checkArr2.join(',')).then(res => {
                    if (res.code === 1) {
                  this.$message.success('删除成功！')
                  this.init()
                  } else {
                    this.$message.error(res.msg || '操作失败')
                  }
                }).catch(err => {
                  this.$message.error('请求出错了：' + err)
                })
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
.Money{
  float: left;
  font-size: 38px;
  margin-right: 20px;
  margin-top: 3.5%;

}

.Money1{
  float: left;
  font-size: 38px;
  align-content: center;
}
.shopping{
  margin: 5%;
  float: right;
}
</style>