<template>
  <div class="avatar-wrap r-fr" @mousedown="mouseDown" @mouseup="mouseUp" @click="toLogin">{{ userInfo.userName.slice(0, 1) }}</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {

  }
})
export default class Home extends Vue {
  userInfo: object = this.$Cache.getInfo()
  isDown: boolean = false
  timeOut: any
  mounted () {

  }
  mouseDown () {
    this.isDown = true
    this.timeOut = setTimeout(() => {
      if (this.isDown) {
        this.$router.push({ path: '/customer/create' })
      }
    }, 2000)
  }
  mouseUp () {
    this.isDown = false
    clearTimeout(this.timeOut)
  }
  toLogin () {
    this.$router.push({ path: '/login' })
  }
}
</script>

<style lang="scss" scoped>
  .avatar-wrap {
    font-size: 20px;
    margin-top: 5px;
    width: 50px;
    line-height: 50px;
    border-radius: 50px;
    background-color: #31C7C5;
    box-shadow: 0px 0px 3px 0px #31C7C5;
    cursor: pointer;
  }
</style>
