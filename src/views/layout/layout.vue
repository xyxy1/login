<template>
  <el-container class='container'>
    <el-header style="background:#409EFF">
      <h3>学生管理系统</h3>
      <el-dropdown @command="onCommand">
        <el-button size="mini" type="text">
          <i class="el-icon-arrow-down"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown" size="mini">
          <el-dropdown-item command="quit">安全退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-header>
    <el-container>
      <el-aside class="aside">
        <el-menu :default-active="$router.path" router class="menu">
          <el-menu-item :index="item.path" v-for="item in menus" :key="item.id">
            <i :class="item.icon"></i>
            <span slot="title">{{item.menuName}}</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main class="main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "layout",
  data() {
    return {
      menus: [
        { path: "/welcome", menuName: "首页", icon: "el-icon-menu" },
        { path: "/student", menuName: "学生管理", icon: "el-icon-star-off" },
        // { path: "/tableTest", menuName: "表格测试", icon: "el-icon-star-off" }
        { path: "mapTest", menuName: "地图测试", icon: "el-icon-star-off" }
      ]
    };
  },
  methods: {
    onCommand(command){
      if (command=='quit') {
        this.$router.push("/login"); 
      }
    }
    // handleClick(index){
    //   console.log(index.index);
    //   var _ind=index.index;
    //   if (_ind==1) {
    //     this.$router.push("/welcome");
    //   } else {
    //     this.$router.push("/student");
    //   }
    // }
  }
};
</script>
<style scoped lang="scss">
.container {
  height: 100%;
  .aside {
    width: 200px !important;
    margin: 10px 0px 10px 15px;
    background: #fff;
    text-align: left;
    .menu {
      border: none;
      span {
        font-size: 16px;
      }
    }
  }
  .el-header {
    h3 {
      color: #fff;
      text-align: left;
      width: 300px;
      display: inline-block;
    }
    .el-dropdown {
      float: right;
      margin: 18px auto ;
      .el-button {
        color: #fff;
      }
    }
  }
  .main {
    margin: 10px 15px;
    background: #fff;
  }
}
.el-main {
  padding: 0px;
}
</style>