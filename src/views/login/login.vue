<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <!-- 登录的表单 -->
        <el-form class="login_form">
          <h1>Hello</h1>
          <h2>欢迎来到素食星球</h2>
          <el-form-item prop="username">
            <el-input
              :prefix-icon="User"
              v-model="loginForm.username"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              type="password"
              :prefix-icon="Lock"
              v-model="loginForm.password"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              :loading="loading"
              class="login_btn"
              type="primary"
              size="default"
              @click="login"
            >
              登录
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { User, Lock } from '@element-plus/icons-vue'
import { reactive, ref } from 'vue'
import useUserStore from '@/store/modules/user'
import { ElNotification } from 'element-plus'
import { useRoute, useRouter } from 'vue-router'
//获取路由器
let $router = useRouter()
//路由对象
let $route = useRoute()
let useStore = useUserStore()
//定义变量控制按钮加载效果
let loading = ref(false)
//收集账号与密码的数据
let loginForm = reactive({ username: 'admin', password: '111111' })
//登录按钮回调
const login = async () => {
  //加载效果:开始加载
  loading.value = true
  await useStore.userLogin(loginForm).then(
    (res) => {
      //判断登录的时候,路由路径当中是否有query参数，如果有就往query参数挑战，没有跳转到首页
      let redirect: any = $route.query.redirect;
      $router.push({ path: redirect || '/' });
      ElNotification({
        type: 'success',
        message: '登录成功',
      })
      //登录成功加载效果也消失
      loading.value = false
    },
    (err) => {
      //登录成功加载效果也消失
      loading.value = false
      ElNotification({
        type: 'error',
        message: (err as Error).message,
      })
    },
  )
}
</script>
<style scoped lang="scss">
.login_container {
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/background.jpg') no-repeat;
  background-size: cover;

  .login_form {
    position: relative;
    width: 80%;
    top: 30vh;
    background: url('@/assets/images/login_form.png') no-repeat;
    background-size: cover;
    padding: 40px;

    h1 {
      color: white;
      font-size: 40px;
    }

    h2 {
      font-size: 20px;
      color: white;
      margin: 20px 0px;
    }

    .login_btn {
      width: 100%;
    }
  }
}
</style>
