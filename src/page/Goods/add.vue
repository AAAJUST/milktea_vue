<template>
  <div class="leader1">
    <el-form 
    ref="form" 
    :model="form" 
    label-width="80px">
      <el-form-item label="商品名称" >
        <el-input v-model="form.name" ></el-input>
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

      <!-- ———————————————————————————————————————————————————————————————————————————————————————— -->
      <el-form-item label="口味做法配置:">
          <el-form-item>
            <div class="flavorBox">
              <span
                v-if="peiliao.length == 0"
                class="addBut"
                @click="addFlavore"
              > + 添加口味</span>
              <div
                v-if="peiliao.length != 0"
                class="flavor"
              >
                <div class="title">
                  <span>口味名（3个字内）</span><span>口味标签（输入标签回车添加）</span>
                </div>
                <div class="cont">
                  <div
                    v-for="(item, index) in peiliao"
                    :key="index"
                    class="items"
                  >
                    <div class="itTit">
                      <div class="selectInput">
                        <div>
                           <el-input
                              v-model="item.name"
                              type="text"
                              style="width: 100%"
                              placeholder="请输入口味"
                              @focus="selectFlavor(true,index)"
                              @blur="outSelect(false,index)"
                              @input="inputHandle(index)"
                            />
                        </div>
                        <div v-show="item.showOption" class="flavorSelect">
                          <span
                            v-for="(it, ind) in peiliaoData"
                            :key="ind"
                            class="items"
                            @click="checkOption(it,ind,index)"
                          >{{ it.name }}</span>
                          <span
                            v-if="peiliaoData == []"
                            class="none"
                          >无数据</span>
                        </div>
                      </div>
                    </div>
                    <div
                      class="labItems"
                      style="display: flex"
                    >
                      <span
                        v-for="(it, ind) in item.value"
                        :key="ind"
                      >{{ it }} <i @click="delFlavorLabel(index, ind)">X</i></span>
                      <div
                        class="inputBox"
                        :style="inputStyle"
                        contenteditable="true"
                        @focus="flavorPosition(index)"
                        @keydown.enter="(val)=>keyDownHandle(val,index)"
                      ></div>
                    </div>
                    <span
                      class="delFlavor delBut non"
                      @click="delFlavor(index)"
                    >删除</span>
                  </div>
                </div>
                <div
                  class="addBut"
                  @click="addFlavore"
                >
                  添加口味
                </div>
              </div>
            </div>
          </el-form-item>
        </el-form-item>
        <!-- —————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————— -->
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
        peiliao:[],
        peiliaoData:[],
        inputStyle  : {'flex':1},
        form: {
          id:'',
          name: '',
          price:'',
          number:'',
          img:'',
          typeId: '',
          message: '',
          peiliao:[]
        },
        dialogImageUrl: '',
      }
    },
    created() {
          this.getDishList()
          this.getFlavorListHand()
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
                this.peiliao = res.data.peiliao && res.data.peiliao.map(obj => ({ ...obj, value: JSON.parse(obj.value),showOption: false }))
              } else {
                this.$message.error(res.msg || '操作失败')
              }
            })
          },
      onSubmit() {
        if(this.actionType === 'add'){
          this.form.peiliao = this.peiliao.map(obj => ({ ...obj, value: JSON.stringify(obj.value) }))
        addGoods(this.form).then(res => {
          if (res.code === 1) {
            this.$message.success('菜品添加成功！')
            this.goBack()
          }
        })
      }else{
        this.form.peiliao = this.peiliao.map(obj => ({ ...obj, value: JSON.stringify(obj.value) }))
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
      addFlavore () {
            this.peiliao.push({'name': '', 'value': [], showOption: false}) 
          },
          selectFlavor(st,index){
            console.log('st',st)
            console.log('index',index)
            console.log('this.peiliao',this.peiliao)
            const obj = JSON.parse(JSON.stringify(this.peiliao[index]))
            obj.showOption = st
            this.peiliao.splice(index,1,obj)
          },

      outSelect(st,index){
        const _this = this
        setTimeout(()=> {
          const obj = JSON.parse(JSON.stringify(_this.peiliao[index]))
          obj.showOption = st
          _this.peiliao.splice(index,1,obj)
        }, 200)
      },

      inputHandle(val,index){
        // this.selectFlavor(false,index)
      },
      // 获取口味列表
      getFlavorListHand () {
      // flavor flavorData
        this.peiliaoData = [
          {'name':'甜味','value':['无糖','少糖','半糖','多糖','全糖']},
          {'name':'温度','value':['热饮','常温','去冰','少冰','多冰']},
          {'name':'忌口','value':['不要葱','不要蒜','不要香菜','不要辣']},
          {'name':'辣度','value':['不辣','微辣','中辣','重辣']}
        ]
      },
      checkOption(val, ind, index){
        this.selectHandle(val.name, index, ind)
        this.peiliao[index].name = val.name
      },

      selectHandle(val, key, ind){
        const arrDate = [...this.peiliao]
        arrDate[key] = JSON.parse(JSON.stringify(this.peiliaoData[ind]))
        this.peiliao = arrDate
      },
      // 按钮 - 删除口味
      delFlavor (ind) {
        this.peiliao.splice(ind, 1)
      },
      // 按钮 - 删除口味标签
      delFlavorLabel (index, ind) {
        this.peiliaoData[index].value.splice(ind, 1)
      },
      //口味位置记录
      flavorPosition (index) {
        this.index = index
      },
      // 添加口味标签
      keyDownHandle (val,index) {
        console.log('keyDownHandle----val',val)
        console.log('keyDownHandle----index',index)
        console.log('keyDownHandle----this.peiliao',this.peiliao)
        if (event) {
          event.cancelBubble = true
          event.preventDefault()
          event.stopPropagation()
        }

        if (val.target.innerText.trim() != '') {
          this.peiliao[index].value.push(val.target.innerText)
          val.target.innerText = ''
        }
      },
      goBack(){{
        this.$parent.$parent.routerevent("/index/AllGoods");
      }},
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

.flavorBox {
  width: 777px;
}
.flavorBox .addBut {
  background: #149ce0;
  display: inline-block;
  padding: 0px 20px;
  border-radius: 3px;
  line-height: 40px;
  cursor: pointer;
  border-radius: 4px;
  color: #333333;
  font-weight: 500;
}
.flavorBox .flavor {
  border: solid 1px #dfe2e8;
  border-radius: 3px;
  padding: 15px;
  background: #fafafb;
}
.flavorBox .flavor .title {
  color: #606168;
}
.flavorBox .flavor .cont .items {
  display: flex;
  margin: 10px 0;
}
.flavorBox .flavor .cont .items .itTit {
  width: 150px;
  margin-right: 15px;
}
.flavorBox .flavor .cont .items .itTit input {
  width: 100%;
  line-height: 40px;
  border-radius: 3px;
  padding: 0 10px;
}
.flavorBox .flavor .cont .items .labItems {
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  border-radius: 3px;
  min-height: 39px;
  border: solid 1px #d8dde3;
  background: #fff;
  padding: 0 5px;
}
.flavorBox .flavor .cont .items .labItems span {
  display: inline-block;
  color: #f19c59;
  margin: 5px;
  line-height: 26px;
  height: 26px;
  padding: 0 10px;
  background: #fdf4eb;
  border-radius: 3px;
  border: solid 1px #fae2cd;
}
.flavorBox .flavor .cont .items .labItems span i {
  cursor: pointer;
  font-style: normal;
}
.flavorBox .flavor .cont .items .labItems .inputBox {
  display: inline-block;
  width: 100%;
  height: 36px;
  line-height: 36px;
  overflow: hidden;
}
.flavorBox .flavor .cont .items .delFlavor {
  display: inline-block;
  padding: 0 10px;
  color: #f19c59;
  cursor: pointer;
}
.selectInput {
      position: relative;
      width: 100%;
      min-width: 100px;
    }
    .selectInput .flavorSelect {
      position: absolute;
      width: 100%;
      padding: 0 10px;
      border-radius: 3px;
      border: solid 1px #FF903D;
      line-height: 30px;
      text-align: center;
      background: #fff;
      top: 50px;
      z-index: 99;
    }
    .selectInput .flavorSelect .items {
      cursor: pointer;
      display: inline-block;
      width: 100%;
      line-height: 35px;
      border-bottom: solid 1px #f4f4f4;
      color: #666;
    }
    .selectInput .flavorSelect .none {
      font-size: 14px;
    }

    #food-add-app .uploadImg .el-form-item__label::before{
          content: '*';
          color: #F56C6C;
          margin-right: 4px;
      }
</style>