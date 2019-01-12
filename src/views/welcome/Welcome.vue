<template>
  <div class='container'>
    <div class='contentBox'>
      <h3>欢迎登录</h3>
      <p>现在是北京时间：{{date}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "welcome",
  data() {
    return {
      date: new Date().toLocaleString()
    };
  }
};
</script>
<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

