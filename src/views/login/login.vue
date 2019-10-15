<template>
  <div class="login r-mg-top-100">
    <el-form :model="loginForm" :rules="rules" ref="loginForm" label-width="50px" class="loginForm">
      <div class="login-title r-mg-bottom-10">登录</div>
      <el-form-item label="账号" prop="name">
        <el-input v-model="loginForm.name" placeholder="用户名/手机号"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="loginForm.password" placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('loginForm')" class="r-full-width">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
  }
})
export default class Home extends Vue {
  /** Variable */

  loginForm: Login = {
    name: '',
    password: ''
  }

  rules: any = {
    name: [
      { required: true, message: '账号不能为空' }
    ],
    password: [
      { required: true, message: '请输入密码' }
    ]
  }

  /** Hook */
  mounted () {

  }

  /** Methods */
  submitForm (formName: string) {
    (this.$refs[formName] as any).validate((valid: string) => {
      if (valid) {
        this.login()
      } else {
        console.log('error submit!!')
        return false
      }
    })
  }
  resetForm (formName: string) {
    (this.$refs[formName] as any).resetFields()
  }

  /** HTTP */
  login () {
    this.$store.dispatch('login', this.loginForm).then(res => {
      if (res.data.code === 1) {
        this.$message.success(res.data.msg)
        this.$Cache.setToken(res.data.token)
      }
    })
  }
}
interface Login {
  name: string,
  password: string
}
</script>

<style lang="scss" scoped>
  .login {
    display: flex;
    justify-content: center;
    .login-title {
      font-size: 18px;
      font-weight: bold;
    }
  }
</style>
