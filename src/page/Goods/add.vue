<template>
  <div class="leader">
    <el-form 
    ref="form" 
    :model="form" 
    label-width="80px">
      <el-form-item label="商品名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="商品价格">
        <el-input v-model="form.price"></el-input>
      </el-form-item>
      <el-form-item label="商品数量">
        <el-input v-model="form.number"></el-input>
      </el-form-item>
      <el-form-item label="商品分类">
        <el-select v-model="form.typeId" placeholder="请选择商品种类">
          <el-option v-for="(item,index) in TypeList" :key="index" :label="item.typename" :value="item.id" />
        </el-select>
      </el-form-item>
      <el-form-item label="商品图片">
        <el-upload
          action="http://localhost:8080/common/upload"
          list-type="picture-card"
          :on-success="handlePictureCardPreview"
          :on-remove="handleRemove">
          <i class="el-icon-plus"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="商品描述">
        <el-input type="textarea" v-model="form.message"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">保存</el-button>
        <el-button @click="goBack()">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {queryGoodsById}  from '@/api/goods'
import {addGoods}  from '@/api/goods'
import {editGoods}  from '@/api/goods'
import {getTtypeList}  from '@/api/goodsType'
export default {
    data() {
      return {
        id: '',
        TypeList:[],
        actionType: '',
        form: {
          id:'',
          name: '',
          price:'',
          number:'',
          img:'',
          typeId: '',
          message: '',
        },
        dialogImageUrl: '',
      }
    },
    created() {
          this.getDishList()
          this.id = this.$route.query.id
          this.actionType = this.id ? 'edit' : 'add'
          if (this.id) {
            this.init()
          }
        },
    methods: {
      async init () {
          queryGoodsById(this.id).then(res => {
              if (String(res.code) === '1') {
                this.form = { ...res.data }
              } else {
                this.$message.error(res.msg || '操作失败')
              }
            })
          },
      onSubmit() {
        if(this.actionType === 'add'){
        addGoods(this.form).then(res => {
          if (res.code === 1) {
            this.$message.success('菜品添加成功！')
            this.goBack()
          }
        })
      }else{
        editGoods(this.form).then(res => {
          if (res.code === 1) {
            this.$message.success('菜品修改成功！')
            this.goBack()
          } else {
            this.$message.error(res.msg || '操作失败')
          }
        }).catch(err => {
          this.$message.error('请求出错了：' + err)
        })
      }
      },
      // 获取菜品分类
      getDishList() {
        getTtypeList().then(res => {
          if (res.code === 1) {
            this.TypeList = res.data
          } else {
            this.$message.error(res.msg || '操作失败')
          }
        })
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(res,file, fileList) {
        console.log(file, fileList);
        this.dialogImageUrl = file.url;
        this.form.img = res.data;
      },
      goBack(){{
        this.$parent.$parent.routerevent("/index/AllGoods");
      }},
    }
  }
</script>

<style>
.leader{
  padding-left: 100px;
}
</style>