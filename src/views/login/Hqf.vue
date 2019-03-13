<template>
  <div class="container">
    <div class="Header">
      <img src="~@/assets/bg.png" alt="" class="bgImg">
    </div>
    <div class="content">
      <div class="Logo">
        <img src="~@/assets/logo.png" alt="" class="logoImg">
        <div class="company">惠州铃咚科技有限公司</div>
      </div>
      <el-form label-position="right" label-width=".80rem" class="Form">
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
    <div class="footer">
      <div class="w100">
        <div class="m0">惠州铃咚科技有限公司版权所有</div>
        <p>Copyright @2019 Huizhou Linkdoor Technology Co., Ltd.</p>
      </div>
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
      let Logo =  document.getElementsByClassName('Logo')[0].style;
      let logoImg = document.getElementsByClassName('logoImg')[0].style;
      let form = document.getElementsByClassName('Form')[0].style;
      if (Math.ceil(document.body.clientWidth * 0.0125) > 17) {
        document.getElementsByClassName('content')[0].style.fontSize =  Math.ceil(document.body.clientWidth * 0.0125) + "px"
        console.log(document.getElementsByClassName('content')[0].style.fontSize)
      }else {
        document.body.style.fontSize = '18px'
      }
      logoImg.height = logoImg.width = document.body.offsetHeight * 0.08538 + 'px';
      Logo.paddingTop = document.body.offsetHeight * 342/937 + 'px';
      form.marginTop = document.body.offsetHeight * 20/937 + 'px';
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

<style lang="scss" scoped >
.container {
  height: 100%;
  position: relative;
  .Header {
    height: 50%;
    z-index: -1;
    position: absolute;
    .bgImg {
      width: 100%;
      height: 100%;
    }
  }
  .content {
    margin: 0 auto;
    z-index: 100;
    font-size: 16px;
    .Logo {
      text-align: center;
      .logoImg {
        width: 80px;
        border-radius: 50%;
      }
      .company {
        color: #ffffff;
      }
    }
    .Form {
      border: 1px solid #c5e2fa;
      padding-top: .2rem; 
      padding-right: .2rem;
      width: 3.5rem;
      margin: .2rem auto;
    }
  }
  .footer {
    position: absolute;
    bottom: 0;
    // left: 50%;
    width: 100%;
    z-index: -1;
    .w100 {
      width: max-content;;
      margin: 0 auto;
      .m0 {
        text-align: center;
      }
    }
  }
}

</style>