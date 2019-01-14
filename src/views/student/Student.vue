<template>
  <div>
    <div class="left">
      <label>关键字</label>
      <el-input v-model="keywords" placeholder="请输入关键字" size="small" clearable></el-input>
      <el-button type="primary" @click="onSearch" size="small">查询</el-button>
    </div>
    <div class="right">
      <el-button @click="onAdd" icon="el-icon-plus" size="small">添加</el-button>
      <el-button @click="onBatchDelete" icon="el-icon-delete" size="small">删除</el-button>
    </div>
    <el-table ref="multipleTable" fit :data="tableData" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
      <el-table-column type="selection" align="center" width="45" />
      <el-table-column label="姓名" align="center" prop="name" />
      <el-table-column label="性別" align="center" prop="sex" width="60" />
      <el-table-column label="部门" align="center" prop='dept' />
      <el-table-column prop="address" align="center" label="地址" show-overflow-tooltip />
      <el-table-column label="操作" align="center" fixed="right" width="150px">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog :title="form.name?'编辑学生信息':'添加学生信息'" :visible.sync="dialogFormVisible">
      <el-form :model="form" ref="form" label-width="80px">
        <el-form-item label="姓名" prop="name">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <el-radio v-model="form.sex" label="男">男</el-radio>
          <el-radio v-model="form.sex" label="女">女</el-radio>
        </el-form-item>
        <el-form-item label="所在部门" prop="dept">
          <el-select v-model="form.dept" placeholder="请选择">
            <el-option v-for="item in options" :key="item.value" :label="item.dept" :value="item.dept">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="地址" prop="address">
          <el-input v-model="form.address" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="onSubmit">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: "student",
  data() {
    return {
      keywords: "",
      options: [
        {
          value: "选项1",
          dept: "财务部"
        },
        {
          value: "选项2",
          dept: "研发二部"
        }
      ],
      tableData: [
        {
          id: 1,
          name: "王一虎",
          sex: "女",
          dept: "财务部",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          id: 2,
          name: "王二虎",
          sex: "女",
          dept: "研发二部",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          id: 3,
          name: "王三虎",
          sex: "女",
          dept: "财务部",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          id: 4,
          name: "王四虎",
          sex: "女",
          dept: "研发二部",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          id: 5,
          name: "王五虎",
          sex: "女",
          dept: "财务部",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          id: 6,
          name: "王六虎",
          sex: "女",
          dept: "财务部",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          id: 7,
          name: "王七虎",
          sex: "女",
          dept: "研发二部",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ],
      dialogFormVisible: false,
      form: {
        sex: "",
        name: "",
        dept: "",
        address: ""
      },
      multipleSelection: []
    };
  },
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    onSearch() {
      if (!this.keywords) {
        this.$notify({
          title: "提示",
          message: "请输入关键字",
          type: "warning",
          duration: 2000
        });
      } else {
        var _keywords = this.keywords;
        this.tableData.filter((data, _keywords) => {
          console.log(data, "data");
        });
        // var _keywords = this.keywords;
        // console.log(_keywords, "key");
      }
    },
    onAdd() {
      this.resetForm();
      this.dialogFormVisible = true;
    },
    onBatchDelete() {
      if (!this.multipleSelection.length) {
        this.$notify({
          title: "提示",
          message: "请选择要删除的数据",
          type: "warning",
          duration: 2000
        });
        return false;
      }
      this.$confirm(`此操作将永久删除这些数据？`, "提示", {
        comfirmButtonText: "确认",
        confirmButtonClass: "el-button--warning",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        for (let j = 0; j < this.multipleSelection.length; j++) {
          for (let i = 0; i < this.tableData.length; i++) { 
            if (this.tableData[i]==this.multipleSelection[j]) {
              this.tableData.splice(i, 1);
            }
          }
        }
      });
    },
    handleEdit(data) {
      this.form = data;
      this.dialogFormVisible = true;
      console.log(this.form, "form");
    },
    handleDelete(index, row) {
      this.$confirm(`确定要删除 ${row.name} 的数据吗？`, "提示", {
        comfirmButtonText: "确认",
        confirmButtonClass: "el-button--warning",
        cancelButtonText: "取消",
        type: "warning"
      }).then(res => {
        this.tableData.splice(index, 1);
      });
    },
    onSubmit(data) {
      if (this.form.name) {
        this.dialogFormVisible = false;
      } else {
        console.log(this.form, "form");
        var _sex = this.form.sex;
        var _dept = this.form.dept;
        var _name = this.form.name;
        var _address = this.form.address;
        var obj = {
          sex: _sex,
          name: _name,
          dept: _dept,
          address: _address
        };
        this.tableData.push(obj);
        this.dialogFormVisible = false;
      }
    },
    resetForm() {
      this.form = {
        sex: null,
        name: null,
        dept: null,
        address: null
      };
    }
  }
};
</script>

<style  scoped>
.main {
  position: relative;
}
.left {
  width: auto;
  display: inline-block;
}
.left .el-input {
  width: 200px;
  margin-left: 10px;
  /* display: inline-block; */
}
.right {
  width: auto;
  float: right;
}
.confirm {
  background-color: crimson;
}
</style>
