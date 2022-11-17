import Vue from 'vue'
import VueRouter from 'vue-router'

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

            ]  
        },
        
      ]
    })