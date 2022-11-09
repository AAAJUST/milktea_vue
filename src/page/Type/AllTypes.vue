<template>
  <div>
    <div>
        <el-button
            type="primary"
            style="margin:0 20px"
            @click="addClass('class')"
            >
            + 新增分类
        </el-button>
    </div>
    <el-table
    :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column
      prop="typename"
      label="分类名称"
      width="180">
    </el-table-column>
    <el-table-column
      prop="typecontent"
      label="分类内容"
      width="180">
    </el-table-column>
    <el-table-column
      prop="updateTime"
      label="操作时间">
    </el-table-column>
    <el-table-column
      label="操作"
      width="180"
      >
      <template slot-scope="scope">
            <el-button
              type="text"
              size="small"
              class="blueBug"
              @click="editHandle(scope.row)"
            >
              修改
            </el-button>
            <el-button
              type="text"
              size="small"
              class="red non"
              @click="deleteHandle(scope.row.id)"
            >
              删除
            </el-button>
          </template>
    </el-table-column>
  </el-table>
  <el-dialog
      :title="classData.title"
      :visible.sync="classData.dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <el-form
        class="demo-form-inline"
        label-width="100px"
      >
        <el-form-item label="分类名称：">
          <el-input
            v-model="classData.typename"
            placeholder="请输入分类名称"
            maxlength="14"
          />
        </el-form-item>
        <el-form-item label="分类内容：">
          <el-input v-model="classData.typecontent"  maxlength="14" placeholder="请输入分类内容" />
        </el-form-item>
      </el-form>
      <span
        slot="footer"
        class="dialog-footer"
      >
        <el-button
          size="medium"
          @click="classData.dialogVisible = false"
        >取 消</el-button>
        <el-button
          type="primary"
          size="medium"
          @click="submitForm()"
        >确 定</el-button>
        <el-button
          v-if="action != 'edit'"
          type="primary"
          size="medium"
          class="continue"
          @click="submitForm('go')"
        > 保存并继续添加 </el-button>
      </span>
    </el-dialog>
    <el-pagination
      style="padding-left:500px"
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
import {getGoodsTypePage}  from '@/api/goodsType'
import {deleteGoodsType}  from '@/api/goodsType'
import {addType}  from '@/api/goodsType'
import {editType}  from '@/api/goodsType'
export default {
    data() {
      return {
        action: '',
        page: 1,
        pageSize: 2,
        input:'',
        tableData:[],
        counts:0,
        classData: {
              'title': '添加菜品分类',
              'dialogVisible': false,
              'typeId': '',
              'typename': '',
              typecontent: ''
            }
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
            }
            await getGoodsTypePage(params).then(res => {
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
          handleQuery() {
            this.page = 1;
            this.init();
          },
          handleSizeChange (val) {
            this.pageSize = val
            this.init()
          },
          handleCurrentChange (val) {
            this.page = val
            this.init()
          },
          addype(st){
            if(st === '/add'){
              console.log(this.$parent);
              this.$parent.routerevent('/index/add','');
            }else{
              console.log(st);
              this.$parent.routerevent('/index/add',st)
            }
          },
           // 添加
           addClass(st) {
            if (st == 'class') {
              this.classData.title = '新增菜品分类'

            }
            this.action = 'add'
            this.classData.typename = ''
            this.classData.typecontent = ''
            this.classData.dialogVisible = true
          },
          editHandle(dat) {
            this.classData.title = '修改分类'
            this.action = 'edit'
            this.classData.typename = dat.typename
            this.classData.typecontent = dat.typecontent
            this.classData.typeid = dat.id
            this.classData.dialogVisible = true
          },
            // 关闭弹窗
            handleClose(st) {
            this.classData.dialogVisible = false
          },
            deleteHandle(id){
                this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
              'confirmButtonText': '确定',
              'cancelButtonText': '取消',
              'type': 'warning'
            }).then(() => {
              deleteGoodsType(id).then(res => {
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
        //数据提交
          submitForm(st) {
              const classData = this.classData
              const valid = (classData.typename === 0 ||classData.typename)  && (classData.typecontent === 0 || classData.typecontent)
              if (this.action === 'add') {
                if (valid) {
                    addType({'typename': classData.typename, typecontent: classData.typecontent}).then(res => {
                      console.log(res)
                      if (res.code === 1) {
                        this.$message.success('分类添加成功！')
                        if (!st) {
                          this.classData.dialogVisible = false
                        } else {
                          this.classData.typename = ''
                          this.classData.typecontent = ''
                        }
                        this.handleQuery()
                      } else {
                        this.$message.error(res.msg || '操作失败')
                      }
                    }).catch(err => {
                      this.$message.error('请求出错了：' + err)
                    })               
              } else {
                  this.$message.error('请输入分类名称或排序')
              }
            } else if (valid) {
                editType({'id':this.classData.typeid,'typename': this.classData.typename, typecontent: this.classData.typecontent}).then(res => {
                  if (res.code === 1) {
                    this.$message.success('分类修改成功！')
                    this.classData.dialogVisible = false
                    this.handleQuery()
                  } else {
                    this.$message.error(res.msg || '操作失败')
                  }
                }).catch(err => {
                  this.$message.error('请求出错了：' + err)
                })
            } else {
              this.$message.error('请输入分类名称或排序')
            }
          },
        }
}
</script>

<style>
.red{
  color: red;
}
.blue{
  color: rgba(0, 162, 255, 0.548);
}
</style>