import { defineConfig, loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
//引入svg插件
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
//mock插件提供方法
import { viteMockServe } from 'vite-plugin-mock'
export default defineConfig(({ command,mode }) => {
  //获取环境变量
    let env = loadEnv(mode, process.cwd());
  return {
    plugins: [
      vue(),
      //配置svg插件
      createSvgIconsPlugin({
        // 配置路径在你的src里的svg存放文件
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        // 配置symbolId格式
        symbolId: 'icon-[dir]-[name]',
      }),
      viteMockServe({
        localEnabled: command === 'serve', //保证开发阶段可以使用mock接口
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve('./src'), // 相对路径别名配置，使用 @ 代替 src
      },
    },
    //scss全局变量一个配置
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
          additionalData: '@import "./src/styles/variable.scss";',
        },
      },
    },
    //配置代理跨域
    server: {
        proxy: {
        "/api": {
          //获取数据的服务器地址设置
          target: "http://192.168.1.118:10000",
          //需要代理跨域
          changeOrigin: true,
          //路径重写
          rewrite: (path) => path.replace(/^\/api/, ''),
        }
      }
    }
  }
})
