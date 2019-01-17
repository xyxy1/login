<template>
  <div class="container">
    <div class="formId" >
      <p>欢迎登录学生管理系统</p>
      <el-form label-position="right" label-width="80px">
        <el-form-item label="用户名">
          <el-input type="text" v-model="username" clearable></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="password" clearable></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit" style="width:100%">立即登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "login",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    onSubmit(){
      var _name = this.username;
      var _pwd = this.password;
      if (_name=="admin"&&_pwd=="123456") {
        this.$router.push('/welcome');
      }else if(!_name){
        this.$message.error('请输入用户名');
      }else if (!_pwd) {
        this.$message.error('请输入密码')
      }else{
        this.$message.error('用户名或密码错误')
      }
    }
  },
};
</script>

<style  scoped>
.container{
  height: 100%;
  display: flex;
  justify-content: center; 
  align-items:center;
}
.formId {
  width: 500px;
  height: 350px;
  border: 1px solid #e1e1e1;
  border-radius: 5px;
  background: #fff;
  position: fixed;
  padding-top: 30px;
}
.formId p{
    text-align:center;
  }
.formId .el-form-item{
  padding-right: 30px;
}
</style>


