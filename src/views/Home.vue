<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {
  mounted () {
    console.log(1231111111111111)

    // this.$http.post('user/login', {
    //   mobile: '18566206787',
    //   password: '123456'
    // }).then(ret => {
    //   console.log(ret)
    // })

    this.$http.get('user/getUserById/1').then(ret => {
      console.log(ret)
    })
  }
}
</script>
