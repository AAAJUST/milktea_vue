<template>
  <div class="leader">
    <div class="top">
      <div class="left" style="margin-left:20px">        
          <el-input
          v-model="input"
          placeholder="请输入商品名称"
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
          <span class="btn btn-cent blue">批量启售</span>
          <span class="btn red">批量停售</span>
          <el-button
            type="primary"
            style="margin:0 20px"
            @click="addFoodtype('/add')"
          >
            + 新建菜品
          </el-button>
        </div>
    </div>
     <el-table
    border
    stripe
    ref="multipleTable"
    :data="tableData"
    tooltip-effect="dark"
    style="width: 100%"
    :row-key="getRowKey"
    @selection-change="handleSelectionChange">
    <el-table-column
      :reserve-selection="true"
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      prop="name"
      label="商品名称"
      width="130">
    </el-table-column>
    <el-table-column
      prop="img"
      label="图片"
      width="130">
      <template slot-scope="{ row }">
            <el-image style="width: auto; height: 40px; border:none;cursor: pointer;" 
            :src="getImage(row.img)"  >
          </el-image>
      </template>
    </el-table-column>
    <el-table-column
      prop="goodsTypeName"
      label="分类"
      width="130"
      >
      <!-- show-overflow-tooltip  过长隐藏-->
    </el-table-column>
    <el-table-column
      prop="price"
      label="售价"
      width="130">
    </el-table-column>
    <el-table-column
      prop="updateTime"
      label="最后更改时间"
      width="300">
    </el-table-column>
    <el-table-column
      prop="message"
      label="简介"
      width="300"
      show-overflow-tooltip>
    </el-table-column>
    <el-table-column
      label="操作"
      >
      <template slot-scope="scope">
            <el-button
              type="text"
              size="small"
              class="blueBug"
              @click="addFoodtype(scope.row.id)"
            >
              修改
            </el-button>
            <el-button
              type="text"
              size="small"
              class="btn-cent2"
            >
              {{ scope.row.status == '0' ? '启售' : '停售' }}
            </el-button>
            <el-button
              type="text"
              size="small"
              class="red non"
              @click="deleteHandle('单删', scope.row.id)"
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
import {getGoodsPage}  from '@/api/goods'
import {deleteGoods}  from '@/api/goods'
export default {
    name:'AllGoods',
    data() {
      return {
        input: '',
        page: 1,
        pageSize: 2,
        tableData:[],
        checkList:[],
        counts:0,
        img:'',
      }
    },
    created() {
          this.init()
        },
        methods: {
          //查询操作
          async init () {
            const params = {
              page: this.page,
              pageSize: this.pageSize,
              name: this.input ? this.input : undefined
            }
            await getGoodsPage(params).then(res => {
              if (String(res.code) === '1') {
                this.tableData = res.data.records
                this.counts = Number(res.data.total)
              } else {
                this.$message.error(res.msg || '操作失败')
              }
            }).catch(err => {
              this.$message.error('请求出错了：' + err)
            })
          },
          // 删除
          deleteHandle (type, id) {
            if (type === '批量' && id === null) {
              if (this.checkList.length === 0) {
                return this.$message.error('请选择删除对象')
              }
            }
            this.$confirm('确认删除该菜品, 是否继续?', '确定删除', {
              'confirmButtonText': '确定',
              'cancelButtonText': '取消',
            }).then(() => {
              deleteGoods(type === '批量' ? this.checkList.join(',') : id).then(res => {
                if (res.code === 1) {
                  this.$message.success('删除成功！')
                  this.handleQuery()
                } else {
                  this.$message.error(res.msg || '操作失败')
                }
              }).catch(err => {
                this.$message.error('请求出错了：' + err)
              })
            })
          },
          //查询显示第一页
          handleQuery() {
            this.page = 1;
            this.init();
          },
          //修改页面显示条数
          handleSizeChange (val) {
            this.pageSize = val
            this.init()
          },
          //修改第几页
          handleCurrentChange (val) {
            this.page = val
            this.init()
          },
          // 全选操作
          handleSelectionChange (val){
            let checkArr = []
            val.forEach((n) => {
              checkArr.push(n.id)
            })
            this.checkList = checkArr
          },
          addFoodtype(st){
            if(st === '/add'){
              console.log(this.$parent.$parent);
              this.$parent.$parent.routerevent2('/index/Add','添加商品','');
            }else{
              console.log(st);
              this.$parent.$parent.routerevent2('/index/Add','修改商品',st)
            }
          },
          getImage (image) {
            return `http://localhost:8080/common/download?name=${image}`
          },
          getRowKey(row){
            return row.id
          }
          // 添加
          // addFoodtype (st) {
          //   if (st === 'add'){
          //     window.parent.menuHandle({
          //       id: '4',
          //       url: 'src\page\Goods\add.vue',
          //       name: '添加菜品'
          //     },true)
          //   } else {
          //     window.parent.menuHandle({
          //       id: '4',
          //       url: 'src\page\Goods\add.vue?id='+st,
          //       name: '修改菜品'
          //     },true)
          //   }
          // },

        },
//         watch: {
// 	'$router': {
// 		handler: 'test',
// 		//调用方法
// 		immediate: true,
// 		//进入立即执行一次
// 	}
// }


}
</script>

<style>
.leader{
  background-color: white;
  padding-bottom: 15px;
}
.left{
  float: left;
}
.right{
  float: right;
}
.btn-cent{
  border:1px solid rgb(177, 177, 177); 
  border-width:0 1px;
  padding: 0 10px;
}
.btn-cent2{
  border:1px solid rgb(208, 203, 203); 
  border-width:0 1px;
  padding: 0 10px;
}
.btn{
  margin: 0 10px;
}
.red{
  color: red;
}
.blue{
  color: rgba(0, 162, 255, 0.548);
}
.top{
  padding: 15px 0;
  overflow: hidden;
}
</style>