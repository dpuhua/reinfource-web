<template>
  <el-container>
    <el-aside class="side-bar" width="180px">Aside</el-aside>
    <el-main>
      <router-view/>
    </el-main>
  </el-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
  }
})
export default class Customer extends Vue {

}
</script>

<style lang="scss" scoped>
  .side-bar {
    background-color: #a5bed9;
  }
</style>
