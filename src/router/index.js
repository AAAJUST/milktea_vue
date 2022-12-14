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
            path:'/loginBack',
            name:'loginBack',
            component:()=>
                import("../page/login_back.vue")
        },
        {
            path: '/dingdan',
            name: 'dingdan',
            component: () =>
                import ("../components/dingdan.vue")
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
                    path:'Dingdan',
                    component: () =>
                    import ("../page/Dingdan/dingdan.vue"),
                },
                {
                    path:'AllTypes',
                    component: () =>
                    import ("../page/Type/AllTypes.vue"),
                },
                {
                    path:'addEmp',
                    component:() =>
                        import ("../page/employee/add.vue")
                },
                {
                    path:'emp',
                    name:'emp',
                    component:() =>
                        import ('../page/employee/employee.vue'),
                },
                {
                     path:'view',
                    component:()=>
                    import("../page/Goods/view.vue")
                    }
            ]  
        },
        {
            path: '/frontIndex',
            name: 'frontIndex',
            component: () =>
                import ("../page/frontIndex.vue"),
            children: [
                {
                    path:'gouwuche',
                    name:'gouwuche',
                    components: {
                        one:resolve=>require(["../page/zhuye/gouwuche.vue"],resolve)
                    },
               },
               {
                path:'address',
                name:'address',
                components: {
                    tow:resolve=>require(["../page/zhuye/address.vue"],resolve)
                },
           },
            ]
        },
        {
            path: '/allGoods',
            name: 'allgoods',
            component: () =>
                import ("../page/Goods/allproducts.vue"),
        },
        {
        path:'/danpin',
        component: () =>
        import ("../page/Goods/danpin.vue")
        },
      ]
    })