<template>
  <div class="main">
    <div class="left">
      <label>关键字</label>
      <el-input icon="el-icon-search" v-model="keywords" placeholder="请输入关键字" size="small" clearable></el-input>
      <!-- <el-button type="primary" @click="onSearch" size="small">查询</el-button> -->
    </div>
    <div class="right">
      <el-button @click="onAdd" icon="el-icon-plus" size="small">添加</el-button>
      <el-button @click="onBatchDelete" icon="el-icon-delete" size="small">删除</el-button>
    </div>
    <el-table ref="multipleTable" fit :data="list" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
      <el-table-column type="selection" align="center" width="45" />
      <el-table-column label="姓名" align="center" prop="name" />
      <el-table-column label="性別" align="center" prop="sex" width="60" />
      <el-table-column label="院系" align="center" prop='unity' show-overflow-tooltip />
      <el-table-column label="部门" align="center" prop='label' />
      <el-table-column label="地址" align="center" prop="address" show-overflow-tooltip />
      <el-table-column label="操作" align="center" fixed="right" width="150px">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- <el-pagination @size-change="onSizeChange" @current-change="onCurrentChange" :current-page="query.currentPage" :page-sizes="[2,5,10]" :page-size="query.pageSize" layout="total, sizes, prev, pager, next, jumper" :total="list.length"/> -->

    <el-dialog :title="form.name?'编辑学生信息':'添加学生信息'" :visible.sync="dialogFormVisible">
      <el-form :model="form" ref="form" label-width="80px">
        <el-form-item label="姓名" prop="name">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <el-radio v-model="form.sex" label="男">男</el-radio>
          <el-radio v-model="form.sex" label="女">女</el-radio>
        </el-form-item>
        <el-form-item label="所在院系">
          <el-select v-model="form.unity" placeholder="请选择">
            <el-option v-for="item in options" :key="item.value" :label="item.unity" :value="item.unity" />
          </el-select>
        </el-form-item>
        <el-form-item label="所在部门" prop="label">
          <el-input readonly v-model="form.label" placeholder="请选择部门" @focus="isDeptTreeDialog=true" />
        </el-form-item>
        <el-form-item label="地址" prop="address">
          <el-input v-model="form.address" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="onSubmit">确 定</el-button>
      </div>
    </el-dialog>

    <el-dialog title="选择部门" :visible.sync="isDeptTreeDialog" width="400px">
      <el-input placeholder="输入关键字进行过滤" v-model="filterText" clearable />
      <el-tree class="filter-tree" :data="deptData" :props="defaultProps" default-expand-all @check-change="onCheckChange" node-key="lid" :filter-node-method="onFilterNode" :default-checked-keys="defaultChecked" show-checkbox check-strictly ref="deptTree" />
      <div slot="footer">
        <el-button type="primary" @click="onDeptSubmit">确定</el-button>
        <el-button @click="isDeptTreeDialog=false">取消</el-button>
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
          unity: "数学与计算机"
        },
        {
          value: "选项2",
          unity: "新能源"
        }
      ],
      tableData: [
        {
          id: 1,
          name: "王一虎",
          sex: "女",
          unity: "数学与计算机",
          lid: 4,
          label: "文艺部",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          id: 2,
          name: "王二虎",
          sex: "女",
          unity: "新能源",
          lid: 4,
          label: "文艺部",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          id: 3,
          name: "王三虎",
          sex: "女",
          unity: "数学与计算机",
          lid: 4,
          label: "文艺部",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          id: 4,
          name: "王四虎",
          sex: "女",
          unity: "新能源",
          lid: 4,
          label: "文艺部",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          id: 5,
          name: "王五虎",
          sex: "女",
          unity: "数学与计算机",
          lid: 4,
          label: "文艺部",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          id: 6,
          name: "王六虎",
          sex: "女",
          unity: "数学与计算机",
          lid: 4,
          label: "文艺部",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          id: 7,
          name: "王七虎",
          sex: "女",
          unity: "新能源",
          lid: 4,
          label: "文艺部",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ],
      dialogFormVisible: false,
      form: {
        sex: "",
        name: "",
        label: "",
        unity: "",
        address: ""
      },
      multipleSelection: [],
      // query: {
      //   keywords: "",
      //   pageSize: 2,
      //   currentPage: 1
      // }
      isDeptTreeDialog: false,
      filterText: "",
      defaultChecked: [],
      deptData: [
        {
          lid: 0,
          label: "新余学院",
          children: [
            {
              lid: 1,
              label: "数学与计算机学院",
              children: [
                {
                  lid: 4,
                  label: "文艺部"
                },
                {
                  lid: 9,
                  label: "组织部"
                }
              ]
            },
            {
              lid: 2,
              label: "新能源学院",
              children: [
                {
                  lid: 5,
                  label: "体育部"
                },
                {
                  lid: 6,
                  label: "外联部"
                }
              ]
            }
          ]
        }
      ],
      defaultProps: {
        children: "children",
        label: "label"
      }
    };
  },
  watch: {
    filterText(val) {
      this.$refs.deptTree.filter(val);
    },
    isDeptTreeDialog(val) {
    }
  },
  methods: {
    onAdd() {
      this.resetForm();
      this.dialogFormVisible = true;
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
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
            if (this.tableData[i] == this.multipleSelection[j]) {
              this.tableData.splice(i, 1);
            }
          }
        }
      });
    },
    handleEdit(data) {
      this.form = data;
      this.dialogFormVisible = true;
      console.log(data,"da");
      
      this.defaultChecked = [data.lid];
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
      if (this.form.id) {
        this.dialogFormVisible = false;
      } else {
        var _id = this.tableData.length + 1;
        var _sex = this.form.sex;
        var _unity = this.form.unity;
        var _name = this.form.name;
        var _address = this.form.address;
        var obj = {
          id: _id,
          sex: _sex,
          name: _name,
          unity: _unity,
          address: _address
        };
        this.tableData.push(obj);
        this.dialogFormVisible = false;
      }
    },
    resetForm() {
      this.form = {
        id: null,
        sex: null,
        name: null,
        label: null,
        unity: null,
        address: null
      };
    },
    //树的操作
    //节点过滤
    onFilterNode(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    },
    //节点选择
    onCheckChange(data, status) {
      if (this.$refs.deptTree.getCheckedNodes().length > 1 && status) {
        this.$refs.deptTree.setCheckedNodes([data]);
      }
    },
    onDeptSubmit() {
      this.form.label = this.$refs.deptTree
        .getCheckedNodes()
        .map(item => item.label)
        .join();
      this.isDeptTreeDialog = false;
      this.defaultChecked = this.$refs.deptTree.getCheckedKeys();
    }
    // onSearch() {
    //   let _this = this;
    //   let arraySearch = [];
    //   let _keywords = _this.keywords;
    //   for (let i = 0; i < _this.tableData.length; i++) {
    //     const element = _this.tableData[i];
    //     if (
    //       element.name.search(_keywords) != -1 ||
    //       element.unity.search(_keywords) != -1
    //     ) {
    //       arraySearch.push(element);
    //     }
    //   }
    //   _this.tableData = arraySearch;
    // },
    // onSizeChange(size) {
    //   this.pageSize = size;
    // },
    // onCurrentChange(page) {
    //   this.currentPage = page;
    // },
  },
  computed: {
    list() {
      var arrFliter = [];
      for (let i = 0; i < this.tableData.length; i++) {
        const tableItem = this.tableData[i];
        if (
          tableItem.name.search(this.keywords) != -1 ||
          tableItem.unity.search(this.keywords) != -1
        ) {
          arrFliter.push(tableItem);
        }
      }
      return arrFliter;
    },
    pageData() {
      return this.list.slice(
        (this.currentPage - 1) * this.pageSize,
        this.currentPage * this.pageSize
      );
    }
  }
};
</script>

<style  scoped>
.main {
  padding: 10px 5px;
  position: relative;
}
.left {
  width: auto;
  display: inline-block;
}
.left .el-input {
  width: 160px;
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
.el-button--small,
.el-button--small.is-round {
  padding: 9px;
}
</style>
