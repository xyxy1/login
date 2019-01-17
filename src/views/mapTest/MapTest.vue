<template>
  <div>
    <div class="titleBox">
      <div class="title">地图测试</div>
      <el-button type='primary' size="mini" >选择人员</el-button>
    </div>
    <div class="mapBox">
      <div class="map">
      </div>
    </div>

    <el-dialog :visible.sync="isFormDialog"></el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isFormDialog:false,
    }
  },
  methods: {}
};
</script>

<style scoped>
.titleBox {
  padding: 10px 0 5px 10px;
  border-bottom: 1px solid #e1e1e1;
}

.title {
  display: inline-block;
  font-size: 16px;
  font-weight: bold;
  padding: 0 0 1px 3px;
  border-left: 3px solid #3399ff;
}
.title div {
  display: inline-block;
  width: 0px;
  height: 0px;
}
.titleBox .el-button {
  margin-left: 20px;
}
.mapBox .map {
  width: 100%;
  height: 100%;
}
</style>
