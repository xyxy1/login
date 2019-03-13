<template>
  <div class="container">
    <el-row >
      <el-col :span="8"></el-col>
      <el-col :span="8">
        <div class="content-box">
          <div class="formId">
            <div class="img">
              <img src="../../assets/logo.png" width="55">
            </div>
            <p>惠州铃咚科技有限公司</p>
            <el-form label-position="right" label-width="80px" class="form">
              <el-form-item label="用户名">
                <el-input type="text" v-model="username" placeholder="请输入用户名" clearable/>
              </el-form-item>
              <el-form-item label="密码">
                <el-input type="password" v-model="password" placeholder="请输入密码" clearable/>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="onSubmit" style="width:100%">立即登录</el-button>
              </el-form-item>
            </el-form>
          </div>
          <div class="copyright">惠州铃咚科技有限公司版权所有
            <p>Copyright @2019 Huizhou Linkdoor Technology Co., Ltd.</p>
          </div>
        </div>
      </el-col>
      <el-col :span="8"></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    onSubmit() {
      var _name = this.username;
      var _pwd = this.password;
      if (_name && _pwd) {
        this.$notify({
          title: "提示",
          message: "用户名或密码错误",
          type: "error",
          duration: 2000
        });
      } else {
        this.$notify({
          title: "提示",
          message: "请输入用户名和密码",
          type: "error",
          duration: 2000
        });
      }
    }
  }
};
</script>

<style  scoped >
.container {
  height: 100%;
  /* display: flex; */
  background: no-repeat center top url(~@/assets/bg.png);
}
.el-col-8{
  height: 100vh;
}
.content-box {
  margin: 0 auto;
  /* height: 100%; */
}
.form {
  border: #c5e2fa 1px solid;
  padding-top: 20px;
  border-radius: 2px;
}
.img {
  position: absolute;
  top: 0px;
  left: 170px;
  border-radius: 50%;
}
img {
  border-radius: 50%;
}
.formId {
  margin: 0px auto;
  margin-top: 310px;
  position: relative;
  width: 400px;
  border-radius: 5px;
  padding-top: 30px;
}
.formId p {
  text-align: center;
  font-size: 24px;
  color: #fff;
}
.formId .el-form-item {
  padding-right: 30px;
}
.copyright {
  margin-top: 55%;
  text-align: center;
  font-size: 13px;
  color: #999999;
}
.copyright p {
  line-height: 30px;
  margin: 0;
  font-size: 12px;
  color: #999999;
}
</style>


