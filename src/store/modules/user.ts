//创建用户相关的pinia仓库
import { defineStore } from 'pinia';
//引入用户接口
import { reqLogin } from "@/api/user";
//引入数据类型
import type { loginFormData } from "@/api/user/type";
//创建用户pinia小仓库
let useUserStore = defineStore("User",{
    //piniac仓库存储数据地方
    state: () => {
        return {
            token: localStorage.getItem("token"),
        }
    },
    //异步|逻辑的地方
    actions: {
        //用户登录的方法
        async userLogin(data: loginFormData){
            let result = (await reqLogin(data)).data;
            if (result.code == 200) {
                //登录成功
                //1.存储token
                this.token = result.data.token;
                //2.存储token到本地存储
                localStorage.setItem("token", result.data.token);
                return 'ok'
            } else {
                return Promise.reject(new Error(result.data.message))
            }
        }
    },
    getters: {

    }
})

//对外暴露用户pinia小仓库
export default useUserStore;