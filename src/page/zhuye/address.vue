<template>
  <div  style="width:100%;height: 80%;">
    <div class="head">
      <span>地址管理</span>
      <el-button type="primary" icon="el-icon-circle-plus" circle class="right" @click="dialogFormVisible = true"></el-button>
    </div>

    <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="姓名" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>

          <el-form-item label="性别" :label-width="formLabelWidth">
            <el-radio v-model="form.sex" label="男">男</el-radio>
            <el-radio v-model="form.sex" label="女">女</el-radio>
          </el-form-item>

          <el-form-item label="地址" :label-width="formLabelWidth">
            <el-input v-model="form.address" autocomplete="off"></el-input>
          </el-form-item>

          <el-form-item label="电话" :label-width="formLabelWidth">
            <el-input v-model="form.phone" autocomplete="off"></el-input>
          </el-form-item>

        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="setaddress">确 定</el-button>
        </div>
      </el-dialog>

      <div class="card3">
          <div style="font-size:15px">默认地址：</div>    
          <b style="font-size:19px">{{oneform.address}}</b>
          <div class="one">姓名：{{oneform.name}} {{oneform.sex}}</div>
          <div class="one">电话：{{oneform.phone}}</div>
      </div>
      <hr>
      <div class="head">
      <span>修改地址</span>
      <el-button type="primary" icon="el-icon-success" circle class="right" @click="changeaddress()"></el-button>
    </div>
      <div v-for="(item, index) in form" :key="index">
        <el-radio v-model="radio2" :label="item.id" border  class="card3" >
          <b style="font-size:19px">{{item.address}}</b>
          <div class="one">姓名：{{item.name}} {{item.sex}}</div>
          <div class="one">电话：{{item.phone}}</div>
        </el-radio>
      </div>

  </div>
</template>

<script>
import {setaddress}  from '@/api/address'
import {getaddress}  from '@/api/address'
import {getoneaddress}  from '@/api/address'
import {updateaddress}  from '@/api/address'
import { throws } from 'assert'
export default {
  data() {
    return {
      dialogFormVisible: false,
      form: [],
      oneform:[],
      formLabelWidth: '120px',
      radio2: '',
    }
  },
  created() {
        this.init()
        this.getone()
    },
  methods: {
    setaddress(){
      setaddress(this.form).then(res => {
          if (res.code === 1) {
            this.$message.success('地址添加成功！')
            this.form = []
          }
        })
      this.dialogFormVisible = false
    },
    async init () {
            await getaddress().then(res => {
              if (String(res.code) === '1') {
                this.form = res.data
              } else {
                this.$message.error(res.msg || '操作失败')
              }
            }).catch(err => {
              this.$message.error('请求出错了：' + err)
            })
          },
    getone(){
      getoneaddress().then(res => {
              if(res.data == null){
                this.$message.error(res.msg || '请选择地址')
              }
              else if (String(res.code) === '1') {
                this.oneform = []
                this.oneform = res.data
              } else {
                this.$message.error(res.msg || '操作失败')
              }
            }).catch(err => {
              this.$message.error('请求出错了：' + err)
            })
    },
    changeaddress(){
      updateaddress(this.radio2).then(res => {
        if(res == null){
          this.$message.error(res.msg || '请选择地址')
        }
        else if(String(res.code) === '1') {
          this.getone()
        } else {
          this.$message.error(res.msg || '操作失败')
        }
      })
    }
  },
}
</script>

<style>
.right{
  float: right;
}
.head{
  margin: 20px;
}
.el-radio.is-bordered{
  width: 300px;
  height: 100px;
}
.card3{
  margin: 20px;
}
.one{
  margin: 12px 5px;
}
</style>