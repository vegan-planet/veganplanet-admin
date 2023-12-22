//对外暴露配置路由(常量路由):全部用户都可以访问到的路由
export const constantRoute = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login.vue'),
    meta: {
      title: '素食星球登录页',
    },
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home/home.vue'),
    meta: {
      title: '素食星球登首页',
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/error/error.vue'),
    meta: {
      title: '404',
    },
  },
]
