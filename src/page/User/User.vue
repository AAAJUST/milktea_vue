<template>
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
        prop="username"
        label="用户名称"
        width="120">
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="用户姓名"
        width="120">
      </el-table-column>
      <el-table-column
        prop="password"
        label="密码"
        width="120">
      </el-table-column>
      <el-table-column
        prop="phone"
        label="电话"
        width="120">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
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
              @click="addFoodtype(scope.row.id)"
            >
            删除成功！
            </el-button>
    </el-table-column>
    </el-table>
  </template>
  
  <script>
    export default {
      data() {
        return {
          tableData: [],
        }
      },
  
      methods: {
        handleSelectionChange(val) {
          this.multipleSelection = val;
        }
      }
    }
  </script>