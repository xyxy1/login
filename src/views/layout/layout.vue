<template>
  <el-container class='container'>
    <el-header style="background:#409EFF">
      <h3 style="color:#fff;text-align:left">学生管理系统</h3>
    </el-header>
    <el-container>
      <el-aside class="aside">
        <el-menu :default-active="this.$router.path" router class="menu">
          <el-menu-item :index="item.path"  v-for="item in menus" :key="item.id">
            <i :class="item.icon"></i>
            <span slot="title">{{item.menuName}}</span>
          </el-menu-item>
          <!-- <el-menu-item index="1" @click="handleClick">
            <i class="el-icon-menu"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-menu-item index="2" @click="handleClick">
            <i class="el-icon-star-off"></i>
            <span slot="title">学生管理</span>
          </el-menu-item> -->
        </el-menu>
      </el-aside>
      <el-main class="main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import {mapState} from 'vuex'


export default {
  name:"layout",
  data() {
    return {
      menus:[
        {path:'/welcome',menuName:"首页",icon:'el-icon-menu'},
        {path:"/student",menuName:"学生管理",icon:'el-icon-star-off'}
      ]
    }
  },
  methods: {
    // handleClick(index){
    //   console.log(index.index);
    //   var _ind=index.index;
    //   if (_ind==1) {
    //     this.$router.push("/welcome");
    //   } else {
    //     this.$router.push("/student");
    //   }
    // }
  },
}
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
  .main {
    margin: 10px 15px;
    background: #fff;
  }
}
</style>