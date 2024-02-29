//统一管理咱们项目用户相关的接口
import request from '@/utils/request'
//项目用户相关的请求地址
enum API {
  LOGIN_URL = '/api/veganplanet-system/sysLogin/passwordLogin',
  USERINFO_URL = '/api/veganplanet-system/sysUser/getSysUserInfo',
}

//登录接口
export const reqLogin = (data: any) =>
  request.post<any, any>(API.LOGIN_URL, data)
//获取用户信息
export const reqUserInfo = () => request.post<any, any>(API.USERINFO_URL, {})
