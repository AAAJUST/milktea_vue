<template>
  <div>
  <el-row>
  <el-col :span="8" v-for="(good, index) in carddata" :key="index">
    <el-card :body-style="{ padding: '0px' }">
      <img :src="getimage(good.img)" class="image">
      <div style="padding: 14px;">
        <span style="font-size:20px">{{good.name}}</span>
        <span style="float: right;">￥：{{good.price}}</span>
        <div class="bottom clearfix">
          <time class="time">{{ currentDate }}</time>
          <el-button type="text" class="button"  @click="queryDanpin(good.id)">查看详情</el-button>
        </div>
      </div>
    </el-card>
  </el-col>
</el-row>
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
import { getallGoods } from '@/api/goods';
export default{
  data() {
      return {
        carddata:[],
        page:1,
        pageSize:4,
        counts:0,
        currentDate: new Date()
      }
    },
    created(){
      this.init()
    },
    methods:{
      async init(){
            const datas={
              page:this.page,
              pageSize:this.pageSize,
            }
          await getallGoods(datas).then(res=>{
            
            if(String(res.code) === '1'){
              this.carddata = res.data.records
              console.log(this.carddata)
              this.counts = Number(res.data.total)
            }else{
              this.$message.error(res.msg || '操作失败')
            }
          }).catch(err => {
              this.$message.error('请求出错了：' + err)
            })
         },
         queryDanpin(st){
            this.routerevent('/danpin','查看单品',st)

         },
         routerevent(name,nav,st){
            this.$store.commit('setname',nav)
            this.$router.push({
                path:name,
                query: {id:st },
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
        getimage(image){
            return `http://localhost:8080/common/download?name=${image}`
        }

    }
  }
</script>
<style>
  .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
  .cards{
    margin: 150px 0;
    padding: 30px 0;
    overflow: hidden;
    background-color: #836389;
}

</style>
