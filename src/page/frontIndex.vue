<template>
    <div>
        <header>
            <a href="#" class="logo" style="margin-left: 150px;border-radius: 50%;"><img src="../imge/img/logo.png" style="width: 150px;height: 100px;"></a>
                <div class="search-box">
                    <input class="search-txt" type="text" placeholder="动态搜索框">
                    <a class="search-btn">
                        <svg class="icon" viewBox="0 0 1024 1024" width="30px"><path d="M424.024 766.098c-91.619 0-177.754-35.679-242.538-100.464-133.735-133.737-133.735-351.344 0-485.078 64.784-64.784 150.919-100.462 242.538-100.462s177.754 35.677 242.539 100.462c133.733 133.735 133.735 351.34 0 485.078-64.785 64.783-150.922 100.464-242.539 100.464zM424.024 196.085c-60.637 0-117.643 23.613-160.523 66.489-88.512 88.51-88.51 232.53 0 321.040 42.876 42.876 99.885 66.491 160.523 66.491s117.643-23.614 160.523-66.491c88.51-88.51 88.51-232.53 0-321.040-42.876-42.876-99.885-66.489-160.523-66.489z" fill="#e94118" p-id="1176"></path><path d="M886.838 943.904c-14.842 0-29.684-5.663-41.010-16.986l-261.286-261.285c-22.647-22.649-22.647-59.369 0-82.018 22.647-22.647 59.37-22.647 82.018 0l261.286 261.286c22.647 22.649 22.647 59.369 0 82.018-11.325 11.322-26.167 16.985-41.010 16.985z" fill="#e94118" p-id="1177"></path></svg>
                    </a>
                </div>
            <ul>
                <li><a href="#">主页</a></li>
                <li><a @click="routerevent1('/frontIndex/gouwuche')">购物车</a>
                    <el-drawer
                        title="我是标题"
                        v-if="drawer"
                        :visible.sync="drawer"
                        :with-header="false">
                        <router-view name="one"></router-view>
                    </el-drawer>
                </li>
                <li><a @click="todingdan()">订单管理</a></li>
                <li><a @click="routerevent2('/frontIndex/address')">地址管理</a>
                    <el-drawer
                        title="我是标题"
                        :visible.sync="drawer2"
                        :direction="direction"
                        :with-header="false">
                        <router-view name="tow"></router-view>
                    </el-drawer>
                </li>
                <li><a @click="toAllGoods()">所有商品</a></li>
            </ul>
        </header>
  <section>
    <img src="../imge/img/stars.png" id="stars">
    <img src="../imge/img/moon.png" id="moon">
    <img src="../imge/img/mountains_behind.png" id="mountains_behind">
    <h2 id="text">Moon Light</h2>
    <a href="#sec" id="btn">Explore</a>
    <img src="../imge/img/mountains_front.png" id="mountains_front">
  </section>
  <div class="sec" id="sec">
    <div v-for="(item, index) in datatable"  :key="index" class="cards">
        <div class="cardshead">————————————————————{{item.typename}}————————————————————</div>
        <div>
            <div v-for="(good, index) in item.goods.slice(0, 3)"  :key="index" class="card">
                <div class="imgBx">
                <img :src="getImage(good.img)">
                </div>
                <div class="content">
                    <div class="details">
                        <h2>{{good.name}}<br><span>{{good.message}}</span></h2>
                        <div class="data">
                        <h3>{{good.number}}<br><span>数量</span></h3>
                        <h3>{{good.price}}<br><span>单价</span></h3>
                        <h3>285<br><span>Following</span></h3>
                        </div>
                        <div class="actionBtn">
                        <button @click="addgouwuche(good)">加入购物车</button>
                        <button @click="queryDanpin(good.id)">查看</button>
                        </div>
                    </div>
                </div>
            </div>
        <el-button style="margin-left:60px">更多</el-button>
        </div>
  </div>
  </div>
  
  
    </div>

</template>


<script>
import {getGoods}  from '@/api/frontgoods'
import {addgouwuche}  from '@/api/gouwuche'
export default {
    data() {
        return {
            drawer: false,
            datatable:[],
            drawer2:false,
            direction:'ltr'
        }
    },
    mounted(){
        let stars = document.getElementById('stars')
        let moon = document.getElementById('moon')
        let mountains_behind = document.getElementById('mountains_behind')
        let text = document.getElementById('text')
        let btn = document.getElementById('btn')
        let mountains_front = document.getElementById('mountains_front')
        let header = document.querySelector('header')

        window.addEventListener('scroll', function(){
            let value = window.scrollY;
            stars.style.left = value * 0.25 + 'px'
            moon.style.top = value * 1.05 + 'px'
            mountains_behind.style.top = value * 0.5 + 'px'
            mountains_front.style.top = value * 0 + 'px'
            text.style.marginRight = value * 4 + 'px'
            text.style.marginTop = value * 1.5 + 'px'
            btn.style.marginTop = value * 1.5 + 'px'
            header.style.top = value * 0.5 + 'px'
        })
    },
    created() {
        this.init()
    },
    methods: {
        async init () {
            await getGoods().then(res => {
              if (String(res.code) === '1') {
                this.datatable = res.data
              } else {
                this.$message.error(res.msg || '操作失败')
              }
            }).catch(err => {
              this.$message.error('请求出错了：' + err)
            })
          },
        routerevent1(name){
            this.drawer = true
            this.$router.push({
                path:name,
            })
        },
        routerevent2(name){
            this.drawer2 = true
            this.$router.push({
                path:name,
            })
        },
        getImage (image) {
            return `http://localhost:8080/common/download?name=${image}`
        },
        addgouwuche(id) {
            addgouwuche(id).then(res => {
              if (String(res.code) === '1') {
                this.$message.success('添加成功！')
              } else {
                this.$message.error(res.msg || '操作失败')
              }
            })
        },
        todingdan(){
            this.$router.push('/dingdan')
            setTimeout(function () {
                window.location.reload();
            }, 10);
        },
        toAllGoods(){
            this.$router.push('/allGoods')
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

    },
}
</script>

<style>
@import url(./style.css);
@import url(./stylecard.css);
@import url(./stylesou.css);

.cards{
    margin: 150px 0;
    padding: 30px 0;
    overflow: hidden;
    background-color: #836389;
}
.cards:first-child{
    margin-top: -50px;
}
.cardshead{
    margin-bottom: 100px;
    text-align: center;
    color: white;
    font-size: 19px;
}
.el-drawer__body{
    padding: 0;
    padding-left: 10px;
    margin-top: -20%;
}
.el-drawer__body::before{
    content: none;
}
.search-box{
    margin-left: -22%;
}
.logo:hover,
.logo.active {
  background: #fff;
  color: #2b1055;
}
</style>