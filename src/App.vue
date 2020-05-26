<template>
  <div id="app">
    <div class="main">
      <router-view/>
    </div>
    <div class="footer">
      <a href="http://www.beian.miit.gov.cn" target="_blank">粤ICP备19092519号</a>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class App extends Vue {}
</script>

<style lang="scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  .main {
    height: 90%;
  }
  .footer {
    height: 10%;
    padding-top: 30px;
    background: #f3f3f3;
  }
}
</style>
