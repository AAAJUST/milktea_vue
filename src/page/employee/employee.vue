<template>
  <div>
  <div class="top">
      <div class="left" style="margin-left:20px">        
          <el-input
          v-model="input"
          placeholder="请输入用户名称"
          style="width: 250px"
          clearable
          @keyup.enter.native="handleQuery"
        >
        <i
            slot="prefix"
            class="el-input__icon el-icon-search"
            style="cursor: pointer"
          ></i>
        </el-input>
      </div>
      <div class="right">
          <span class="btn red"  @click="deleteHandle('批量', null)">批量删除</span>
          <el-button
            type="primary"
            style="margin:0 20px"
            @click="addEmployee('/add')"
          >
            + 新增用户
          </el-button>
        </div>
    </div>
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange">
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        prop="name"
        label="用户姓名"
        width="120">
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column
        prop="username"
        label="用户账号"
        width="120">
      </el-table-column>
      <el-table-column
        prop="password"
        label="密码"
        width="120">
      </el-table-column>
      <el-table-column
        prop="idcard"
        label="身份证号"
        width="120">
      </el-table-column>
      <el-table-column
        prop="sex"
        label="性别"
        width="120">
      </el-table-column>
      <el-table-column
        prop="phone"
        label="电话">
    </el-table-column>
        <!-- show-overflow-tooltip -->
        <el-table-column
        label="操作"
        width="240">
        <template slot-scope="scope">
            <el-button
              type="text"
              size="small"
              class="blueBug"
              @click=""
            >
              修改
            </el-button>
            <el-button
              type="text"
              size="small"
              class="blueBug"
              @click=""
            >
            删除
            </el-button>
          </template>
    </el-table-column>
    </el-table>
    <el-pagination
       style="padding-left:35%"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page=1
      :page-sizes="[1, 2, 3, 4]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="counts">
    </el-pagination>
    </div>
  </template>
  
  <script>
  import {getEmployeePage} from '@/api/employee'
    export default {
      data() {
        return {
          input:"",
          page:1,
          pageSize:2,
          tableData: [],
          checkList:[],
          counts:0,
        }
      },
      created() {
      this.init()
     },
      methods: {
        // 查询操作
        async init(){
            const data={
              page: this.page,
              pageSize: this.pageSize,
              name: this.input?this.input:undefined
            }

            await getEmployeePage(data).then(res=>{
            if(String(res.code) === '1'){
                this.tableData=res.data.records
                this.counts = Number(res.data.total)
            }else{
              this.$message.error(res.msg || '操作失败')
            }
            }).catch(err=>{
              this.$message.error('请求出错:' + err)
         })
        },
        handleQuery(){
          this.page=1,
          this.init()
        },
        handleSizeChange(val){
          this.pageSize=val,
          this.init()
        },
        handleCurrentChange(val){
          this.page=val,
          this.init()
        },
        handleSelectionChange(val) {
          let checkArr = []
          val.forEach((n) => {
            checkArr.push(n.id)
          })
          this.checkList = checkArr;
        },
        addEmployee(st){
          if(st === '/add')
          {
            console.log(st);
            this.routerevent('addEmp','')
          }else{
            this.routerevent('addEmp',st)
          }
        },
        routerevent(name,st){
            this.$router.push({
                path:name,
                query: {id:st }
            })
            }
        
    }
    }
  </script>
  <style>
  .top{
  padding: 15px 0;
  overflow: hidden;
}
.left{
  float: left;
}
.right{
  float: right;
}
  </style>