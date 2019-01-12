<template>
  <div>
    <!-- <el-form :inline="true">
    <el-input  size="mini" placeholder="输入关键字搜索" />
    <el-button type="primary" @click="handleEdit">添加</el-button>
    </el-form> -->
    <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" />
      <el-table-column label="姓名" prop="name" />
      <el-table-column label="性別" prop="sex" />
      <el-table-column prop="address" label="地址" show-overflow-tooltip />
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog :title="form.id?'编辑学生信息':'添加学生信息'" :visible.sync="dialogFormVisible">
      <el-form :model="form" label-position='right' label-width="60px">
        <el-form-item label="姓名">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="地址">
          <el-input v-model="form.address" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: "student",
  data() {
    return {
      id: "",
      tableData: [
        {
          id: 1,
          name: "王小虎",
          sex: "女",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          id: 2,
          name: "王小虎",
          sex: "女",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          id: 3,
          name: "王小虎",
          sex: "女",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          id: 4,
          name: "王小虎",
          sex: "女",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          id: 5,
          name: "王小虎",
          sex: "女",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          id: 6,
          name: "王小虎",
          sex: "女",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          id: 7,
          name: "王小虎",
          sex: "女",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ],
      dialogFormVisible: false,
      form: {
        name: "",
        address: ""
      },
      multipleSelection: []
    };
  },
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleEdit(data) {
      console.log(data);
      this.form=data;
      this.dialogFormVisible = true;

    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
};
</script>