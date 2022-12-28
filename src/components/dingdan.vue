<template>
  <div class="father">
    <el-button icon="el-icon-back" @click="goback()"></el-button>
    <div class="cards">

        <el-dialog
            :visible.sync="dialogVisible"
            width="30%"
            >
            <div style="font-size: 24px;" class="center"><b>{{datatable2.code}}</b></div>
            <div class="center">取单号</div>
            <el-steps :active="datatable2.state">
                <el-step title="步骤 1" icon="el-icon-edit"></el-step>
                <el-step title="步骤 2" icon="el-icon-upload"></el-step>
                <el-step title="步骤 3" icon="el-icon-picture"></el-step>
            </el-steps>
            <el-divider></el-divider>
            <div><b style="font-size:20px">{{datatable3.address}}</b></div>
            <div>{{datatable3.name}} {{datatable3.sex}} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{datatable3.phone}}</div>
            <el-divider></el-divider>
            <div v-for="(item, index) in datatable2.goods"  :key="index">
                <div style="height:70px">
                    <el-image
                        class="left"
                        style="width: 60px; height: 60px"
                        :src="getImage(item.img)"
                        fit="fill">
                    </el-image>
                    <div class="left" style="margin-left:10px">
                        <div><b>{{item.name}}</b></div>
                        <div>配料</div>
                        <div>x1</div>
                    </div>
                    <div class="right" style="margin-top:20px;font-size:18px">
                        ￥{{item.price}}
                    </div>
                </div>

            </div>
            <el-divider></el-divider>
            <div class="right" style="margin-top:-14px"><span>合计：</span><span style="font-size:23px"><b>￥{{datatable2.num}}</b></span></div>
        </el-dialog>

        <div class="card" v-for="(item, index) in datatable"  :key="index">
            <div class="head">
                <div class="left" v-if="item.state == 0">未完成</div>
                <div class="left" v-if="item.state == 1">未完成</div>
                <div class="left" v-if="item.state == 2">已完成</div>
                <div class="right"><el-link type="primary" @click="open(item)">详情-></el-link></div>
            </div>
            <div class="body">
                <div class="left bodyleft">
                    <div class="demo-image">
                        <div class="block left" v-for="(fit, index1) in item.goods" :key="index1" style="margin-right:4px">
                            <span class="demonstration"></span>
                            <el-image
                            style="width: 80px; height: 80px"
                            :src="getImage (fit.img)"
                            fit="fill"></el-image>
                        </div>
                    </div>
                </div>
                <div class="right bodyright">
                    <div style="font-size:18px;margin-right: 10px;"><b>￥{{item.num}}</b></div>
                    <div style="font-size:14px;margin-left: 5px;">共{{item.lengths}}件</div>
                </div>
            </div>
            <div class="bottom">
                <span>取单号</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>{{item.code}}</b>
            </div>
        </div>
        
    </div>
  </div>
</template>

<script>
import {getdingdan}  from '@/api/dingdan'
import {getonesaddress}  from '@/api/address'
export default {
    data() {
        return {
            dingdanhao: 4266,
            statu: '已完成',
            dialogVisible: false,
            datatable:[],
            datatable2:[],
            datatable3:[]
        }
    },
    created() {
          this.init()
    },
    methods: {
          //查询操作
          async init () {
            await getdingdan().then(res => {
              if (String(res.code) === '1') {
                this.datatable = res.data

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
          open(item){
            this.datatable2 = []
            this.datatable2 = item

            getonesaddress(item.addressId).then(res => {
              if (String(res.code) === '1') {
                this.datatable3 = res.data
              } else {
                this.$message.error(res.msg || '操作失败')
              }
            }).catch(err => {
              this.$message.error('请求出错了：' + err)
            })

            this.dialogVisible = true
          },
          goback(){
            this.$router.push("/frontindex")
            setTimeout(function () {
                window.location.reload();
            }, 10);
          }
        }
}
</script>

<style>
body{
    background-color: #dddddd;
}
.left{
    float: left;
}
.center{
    text-align: center;
}
.right{
    float: right;
}
.cards{
    padding: 60px;
    margin: 0 auto;
    width: 520px;
}
.card{
    width: 500px;
    height: 200px;
    background-color: white;
    padding: 0 10px;
    padding-top: 10px;
    border-radius: 4px;
    margin-bottom: 30px
}
.head{
    height: 40px;
    line-height: 40px;
    padding: 0 5px;
}
.body{
    height: 90px;
    margin: 5px 0;
    padding-top: 5px;
}
.bodyright{
    padding-top: 25px;
}
.bottom{
    background-color: #dddddd;
    height: 50px;
    border-radius: 8px;
    line-height: 50px;
    padding-left: 5px;
}
</style>