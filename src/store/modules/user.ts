//创建用户相关的pinia仓库
import { defineStore } from 'pinia'
//引入用户接口
import { reqLogin, reqUserInfo } from '@/api/user'
//引入数据类型
import type { loginFormData } from '@/api/user/type'
//引入路由(常量路由)
import { constantRoute } from '@/router/routes'
//创建用户pinia小仓库
let useUserStore = defineStore('User', {
  //piniac仓库存储数据地方
  state: () => {
    return {
      //用户的token
      token: localStorage.getItem('token'),
      //用户的路由
      menuRoutes: constantRoute,
      userName: '',
      avatar: '',
    }
  },
  //异步|逻辑的地方
  actions: {
    //用户登录的方法
    async userLogin(data: loginFormData) {
      const result = await reqLogin(data)
      if (result.data.code == 20000) {
        console.log(result.data.data)
        //登录成功
        //1.存储token
        this.token = result.data.data
        //2.存储token到本地存储
        localStorage.setItem('token', result.data.data)
        return 'ok'
      } else {
        return Promise.reject(new Error(result.data.message))
      }
    },
    //获取用户信息方法
    async getUserInfo() {
      //发送请求获取用户信息
      const userInfo = await reqUserInfo()
      console.log(userInfo.data)
      //如果获取用户信息成功，存储一下用户信息
      if (userInfo.data.code == 20000) {
        this.userName = userInfo.data.data.userName
        this.avatar = userInfo.data.data.avatar
        return 'ok'
      } else {
        return Promise.reject(new Error(userInfo.data.message))
      }
    },
    //退出登录
    async userLogout() {
      //退出登录
      this.token = ''
      this.userName = ''
      this.avatar = ''
      localStorage.removeItem('token')
      return 'ok'
    },
  },
  getters: {},
})

//对外暴露用户pinia小仓库
export default useUserStore
