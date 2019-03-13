<template>
  <div class="container">
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
  mounted() {
    this.handleAdapt();
    window.addEventListener("resize", () => {
      this.throttle(this.handleAdapt)();
    });
  },
  methods: {
    handleAdapt() {
      document.documentElement.style.fontSize = Math.round(document.documentElement.clientWidth / 19.2) + "px";
    },
    throttle(action) {
      let isRunning = false;
      return function () {
        if (isRunning) return;
        isRunning = true;
        window.requestAnimationFrame(() => {
          action();
          isRunning = false;
        });
      }
    },
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
  background-image: url(~@/assets/bg.png);
  background-size: 100% 50%;
  background-position: 0 0;
  background-repeat: no-repeat;
}

.form {
  border: #c5e2fa .01rem solid;
  padding-top: .2rem;
  border-radius: .02rem;
}
.img {
  text-align: center;
  border-radius: 50%;
}
img {
  border-radius: 50%;
}
.formId {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -36%);
  width: 400px;
  border-radius: .05rem;
  z-index: 999;
}
.formId p {
  text-align: center;
  font-size: 24px;
  color: #fff;
}
.formId .el-form-item {
  padding-right: .30rem;
}
.copyright {
  position: fixed;
  bottom: 0;
  margin-left: 50%;
  transform: translateX(-50%);
  text-align: center;
  font-size: .13rem;
  color: #999999;
}
.copyright p {
  line-height: .30rem;
  margin: 0;
  font-size: .12rem;
  color: #999999;
}
</style>


