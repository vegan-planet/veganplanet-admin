//对外暴露配置路由(常量路由):全部用户都可以访问到的路由
export const constantRoute = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login.vue'),
    meta: {
      title: '素食星球登录页',
      hidden: true,  //代表路由标题在菜单中是否隐藏  true:隐藏 false:不隐藏
      icon: 'Promotion', //菜单文字左侧的图标,支持element-plus全部图标

    },
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('@/layout/layout.vue'),
    meta: {
      title: '素食星球登首页',
      hidden: false,
      icon: 'HomeFilled',
    },
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: () => import('@/views/home/home.vue'),
        meta: {
          title: '首页',
          hidden: false,
          icon: 'HomeFilled',
        },
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/error/error.vue'),
    meta: {
      title: '404',
      hidden: true,
    },
  },
]
