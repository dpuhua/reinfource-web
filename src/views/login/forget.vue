<template>
  <div class="forget r-mg-top-100">
    <el-form :model="forgetForm" :rules="rules" ref="forgetForm" label-width="70px" class="forgetForm form">
      <div class="forget-title r-mg-bottom-10">忘记密码
        <span class="link r-fr" @click="toLogin">登录</span>
      </div>
      <el-form-item label="用户名" prop="userName">
        <el-input v-model="forgetForm.userName" placeholder="用户名"></el-input>
      </el-form-item>
      <el-form-item label="手机号" prop="mobile">
        <el-input v-model="forgetForm.mobile" placeholder="手机号"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="forgetForm.password" placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('forgetForm')" class="r-full-width">确认</el-button>
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
  forgetForm: Forget = {
    userName: '',
    mobile: '',
    password: ''
  }

  title: string = '1213123'

  rules: any = {
    userName: [
      { required: true, message: '用户名不能为空' }
    ],
    mobile: [
      { required: true, message: '手机号不能为空' }
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
    this.$router.push({ path: '/register' })
  }
  submitForm (formName: string) {
    (this.$refs[formName] as any).validate((valid: string) => {
      if (valid) {
        this.forget()
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
  forget () {
    this.$store.dispatch('forget', this.forgetForm).then(res => {
      if (res.data.code === 1) {
        this.$message.success(res.data.msg)
        this.$Cache.setToken(res.data.token)
        this.$Cache.setInfo(res.data.Data)
      }
    })
  }
}
interface Forget {
  userName: string
  mobile: string
  password: string
}
</script>

<style lang="scss" scoped>
  .forget {
    display: inline-block;
    padding: 20px;
    box-shadow: 0px 0px 3px 0px #c5c3c3;
    border-radius: 3px;
    .forget-title {
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
