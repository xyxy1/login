
  <div id="app">
  <h1>Hello App!</h1>
  <p>
    <!-- 使用 router-link 组件来导航. -->
    <!-- 通过传入 `to` 属性指定链接. -->
    <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 
    <a href="/foo">go to foo</a>
    -->
    <router-link to="/foo">Go to Foo</router-link>
    
    <router-link to="/bar">Go to Bar</router-link>
  </p>
  <!-- 路由出口 -->
  <!-- 路由匹配到的组件将渲染在这里 to属性指定的链接传入-->
  <router-view></router-view>
</div>
<script>
</script>
