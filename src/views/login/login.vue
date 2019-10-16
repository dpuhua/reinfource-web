<template>
  <div class="login r-mg-top-100">
    <el-form :model="loginForm" :rules="rules" ref="loginForm" label-width="70px" class="loginForm form">
      <div class="login-title r-mg-bottom-10">登录
        <span class="link r-fr" @click="toReg">注册</span>
      </div>
      <el-form-item label="账号" prop="name">
        <el-input @keyup.enter.native="submitForm('loginForm')" v-model="loginForm.name" placeholder="用户名/手机号"  autocomplete="true"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input @keyup.enter.native="submitForm('loginForm')" v-model="loginForm.password" placeholder="密码"  autocomplete="true"></el-input>
      </el-form-item>
      <el-form-item class="r-align-l el-form-item--small">
        <el-checkbox size="small">记住密码</el-checkbox>
        <div class="r-fr">
          <span class="link" @click="toForget">忘记密码?</span>
        </div>
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
  toForget () {
    this.$router.push({ path: '/forget' })
  }
  toReg () {
    this.$router.push({ path: '/register' })
  }
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
        this.$Cache.setInfo(res.data.Data)
        this.$router.push({
          path: '/'
        })
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
    display: inline-block;
    padding: 20px;
    box-shadow: 0px 0px 3px 0px #c5c3c3;
    border-radius: 3px;
    .login-title {
      font-size: 18px;
      font-weight: bold;
    }
    /deep/ .el-checkbox__label {
      font-size: 12px;
    }
    .link {
      font-size: 12px;
      color: #31C7C5;
      cursor: pointer;
      &:hover {
        color: #2cb3b1;
      }
    }
  }
</style>
