<template>
 <div class="leader1">
    <el-form 
    ref="form" 
    :model="form" 
    label-width="80px">
      <el-form-item label="用户姓名" >
        <el-input v-model="form.name" ></el-input>
      </el-form-item>
      <el-form-item label="用户账号">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item label="身份证号">
          <el-input v-model="form.idcard" ></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-radio v-model="form.sex" :label="1">男</el-radio>
        <el-radio v-model="form.sex" :label="0">女</el-radio>
      </el-form-item>
      <el-form-item label="电话">
          <el-input v-model="form.phone" ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">保存</el-button>
        <el-button @click="goBack()">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { createDecipheriv } from 'crypto';
import {addEmployee} from '@/api/employee'
import {editEmployee} from '@/api/employee'
import { init } from 'events';
import { query } from 'express';
import {queryEmployeeById} from '@/api/employee'
  export default {
    data () {
      return {
        id:'',
        actionType: '',
        form:{
            name:'',
            username:'',
            password:'',
            idcard:'',
            sex:'0',
            phone:'',
        }
      }
    },
    created(){
      this.id=this.$route.query.id
      this.actionType = this.id ? 'edit' : 'add'
      if(this.id){
        this.init();
      }
    },
    methods:{
      async init (){
          queryEmployeeById(this.id).then(res =>{
              if((res.code)==='1'){
                this.form={...res.data}
              }else {
                this.$message.error(res.msg || '操作失败')
              }
            })
          },
          onSubmit(){
            if(this.actionType === 'add'){
               addEmployee(this.form).then(res =>{
                if(String(res.code) === '1'){
                  this.$message.success('用户添加成功')
                  this.goBack()
                }
              })
            }else{
              editEmployee(this.form).then(res =>{
                if(String(res.code)==='1'){
                  this.$message.success('用户修改成功')
                  this.goBack()
                }
              })
            }
          },
          goBack(){
              this.$parent.routerevent('/addEmployee')
            }
    }
    
  }
</script>

<style>
.leader1{
  padding: 15px 1px;
  padding-left: 100px;
  padding-right: 60%;
  background-color: white;
}
</style>