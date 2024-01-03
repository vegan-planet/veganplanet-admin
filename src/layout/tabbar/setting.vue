<template>
  <el-button size="small" icon="Refresh" circle @click="updateRefsh"></el-button>
  <el-button size="small" icon="FullScreen" circle @click="fullScreen"></el-button>
  <el-button size="small" icon="Setting" circle></el-button>
  <img src="" style="width: 24px;height: 24px;margin:0px 10px;border-radius: 50%;">
  <!-- 下拉菜单 -->
  <el-dropdown>
    <span class="el-dropdown-link">
      {{111}}
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
    </el-dropdown>
</template>

<script setup lang="ts">
//获取骨架的小仓库
import useLayOutSettingStore from '@/store/modules/setting';
let layoutSettingStore = useLayOutSettingStore();

//刷新按钮点击回调
const updateRefsh = () => {
  layoutSettingStore.refsh = !layoutSettingStore.refsh;
};

//全屏按钮点击的回调
const fullScreen = () => {
  //DOM对象的一个属性:可以用来判断当前是不是全屏模式[全屏:true,不是全屏:false]
  let full = document.fullscreenElement;
  //切换为全屏模式
  if (!full) {
    //文档根节点的方法requestFullscreen,实现全屏模式
    document.documentElement.requestFullscreen();
  } else {
    //变为不是全屏模式->退出全屏模式
    document.exitFullscreen();
  }
}
</script>

<script lang="ts">
export default {
  name: "Setting"
}
</script>
<style scoped></style>