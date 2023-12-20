import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
//引入svg插件
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
export default defineConfig({
  plugins: [
    vue(),
    //配置svg插件
    createSvgIconsPlugin({
      // 配置路径在你的src里的svg存放文件
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
      // 配置symbolId格式
      symbolId: 'icon-[dir]-[name]',
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve('./src'), // 相对路径别名配置，使用 @ 代替 src
    },
  },
})
