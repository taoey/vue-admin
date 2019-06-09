import Vue from 'vue'
import Router from 'vue-router'

//布局视图
import dashboard from '@/pages/dashboard.vue'
import full_screen from '@/pages/full_screen.vue'

//子页面-全屏视图
import login from '@/pages/sub_pages/login.vue'
import page404 from '@/pages/sub_pages/404.vue'

//子页面-控制台视图
import template from '@/pages/sub_pages/template'


Vue.use(Router)


//路由配置
const routes=[
    {
        path: "/",
        name:"根路径",
        redirect: "/full/admin/login"
    },
    {
        path: "/error",
        name:"error页面",
        components:{
            full_screen:full_screen, //全屏视图
        },
        children:[
            {
                path:'404', 
                name:'404页面',
                component:page404
            }
        ]
    },
    {
        path:'/full',
        name:"全屏视图",
        meta:{
            requireAuth: false, //是否需要登录
          },     
        components:{
            full_screen:full_screen, //全屏视图
        },
        children:[
            {
                path:'admin/login',
                name:'登录页面',
                component:login
            }
        ]

    },
    {
      path: '/dash',
      name: '控制台',
      meta:{
        requireAuth: true, //是否需要登录
      },
      components:{
        dashboard:dashboard, //控制台总视图
      },
      children:[
          {
            path:'index',
            name:"index",
            meta:{
                requireAuth: true,
            },
            component:template
          },
      ]
    },

  ];

//声明路由对象
//引入store
import store from '@/store/store.js'

const router = new Router({
    routes,
    store
});

//路由钩子
router.beforeEach((to, from, next) => {
    console.log("进入了钩子函数"+"  来自:  "+from.fullPath+"  目标:  "+to.fullPath);
 
    // 从store中获取用户的登录状态
    var admin = store.getters.getAdmin
    if(typeof admin =='string'){
        console.log("转化之后")
        admin = JSON.parse(admin)
    }
    this.admin = admin

    // //判断页面是否需要登录
    // if(to.meta.requireAuth == true && this.admin.name==null){
    //     alert("请登录")
    //     next({
    //         path: '/full/admin/login',
    //     })
    // }else{
    //     next()
    // }

    next()
})
//导入路由
export default router;