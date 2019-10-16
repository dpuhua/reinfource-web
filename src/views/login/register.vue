<template>
  <div class="login r-mg-top-100">
    <el-form :model="registerForm" :rules="rules" ref="registerForm" label-width="70px" class="registerForm form">
      <div class="login-title r-mg-bottom-10">注册
        <span class="link r-fr" @click="toLogin">登录</span>
      </div>
      <el-form-item label="用户名" prop="userName">
        <el-input @keyup.enter.native="submitForm('registerForm')" v-model="registerForm.userName" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="手机号" prop="mobile">
        <el-input @keyup.enter.native="submitForm('registerForm')" v-model="registerForm.mobile" placeholder="请输入手机号"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input @keyup.enter.native="submitForm('registerForm')" v-model="registerForm.password" placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('registerForm')" class="r-full-width">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ValidReg from '../../tools/valid'

@Component({
  components: {
  }
})
export default class Home extends Vue {
  /** Variable */

  validateMobile (rule: any, value: string, callback: Function) {
    if (!ValidReg.validMobile(value)) {
      callback(new Error('请输入正确的手机号'))
    } else {
      callback()
    }
  }

  registerForm: Login = {
    mobile: '',
    userName: '',
    password: ''
  }

  rules: any = {
    mobile: [
      { required: true, message: '手机号不能为空' },
      { validator: this.validateMobile, trigger: 'blur' }
    ],
    userName: [
      { required: true, message: '用户名不能为空' }
    ],
    password: [
      { required: true, message: '请输入密码' }
    ]
  }

  /** Hook */
  mounted () {
  }

  /** Methods */
  toLogin () {
    this.$router.push({ path: '/login' })
  }
  submitForm (formName: string) {
    (this.$refs[formName] as any).validate((valid: string) => {
      if (valid) {
        this.register()
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
  register () {
    this.$store.dispatch('register', this.registerForm).then(res => {
      if (res.data.code === 1) {
        this.$message.success('注册成功')
        this.toLogin()
      }
    })
  }
}
interface Login {
  mobile: string
  userName: string
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
