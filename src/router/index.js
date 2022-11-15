import Vue from 'vue'
import VueRouter from 'vue-router'

const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)
    // 创建并暴露一个路由器
export default new VueRouter({
    routes: [
        {
            path: '/',
            redirect: 'login'
        },
        {
            path: '/login',
            name: 'login',
            component: () =>
                import ("../page/login.vue")
        },
        {
            path:'/index',
            name:'index',
            component: () =>
            import ("../page/index.vue"),
            children: [
                {
                path:'AllGoods',
                component: () =>
                import ("../page/Goods/AllGoods.vue"),
                },
                {
                path:'Add',
                component: () =>
                import ("../page/Goods/add.vue"),
                },
                {
                path:'AllTypes',
                component: () =>
                import ("../page/Type/AllTypes.vue"),

             }
            ]  
        },
      ]
    })