<template>
  <el-container class="main">
    <el-header class="header r-pd-left-200">

      <el-menu :default-active="activeIndex" class="el-menu-demo r-fl v-mg-right-100" mode="horizontal" @select="handleSelect">
        <el-menu-item v-for="item in menu" :key="item.path" :index="item.path">{{ item.name }}</el-menu-item>
      </el-menu>
      Header
      <avatar-wrap></avatar-wrap>
    </el-header>
    <router-view/>
  </el-container>

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import AvatarWrap from '@/components/header/avatar.vue'

@Component({
  components: {
    AvatarWrap
  }
})
export default class Home extends Vue {
  menu: Array<object> = [
    { name: '我的', path: '/user' },
    { name: '自定义', path: '/customer' }
  ]
  activeIndex: string = ''
  mounted () {
    const reg = /^\/[^/]*/
    const execPath = reg.exec(this.$route.path) || ['']
    this.activeIndex = execPath[0]
  }
  handleSelect (path: string) {
    this.$router.push({ path })
  }
}
</script>

<style lang="scss" scoped>
  .main {
    height: 100%;
    /* background-image: url('~@/assets/images/bg.png');
    background-repeat: no-repeat;
    background-size: cover; */
    .header {
      box-shadow: 1px 1px 1px 1px #ccc;
      line-height: 60px;
    }
  }
</style>
