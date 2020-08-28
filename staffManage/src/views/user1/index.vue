<template>
  <app-container>
    <template slot="header">
      <form-view></form-view>
      <el-button type="primary">头下按钮</el-button>
    </template>

    <template>
      <table-view>
        <template v-slot:op="{ row }">
          <el-button type="text" @click="handleAdd(row)">新增</el-button>
          <el-button type="text">编辑</el-button>
          <el-button type="text">删除</el-button>
        </template>
      </table-view>

      <!-- 弹窗 -->
      <add-dialog :visible.sync="addDialog.visible"></add-dialog>
    </template>

    <template slot="footer">
      <app-pagination
        :current-page="pagination.page"
        :page-size="pagination.limit"
        :total="pagination.total"
        @size-change="sizeChange"
        @current-change="currentChange"
      />
    </template>
  </app-container>
</template>

<script>
import FormView from "./components/FormView";
import TableView from "./components/TableView";
import AddDialog from "./components/AddDialog";

export default {
  components: {
    FormView,
    TableView,
    AddDialog
  },

  data() {
    return {
      data: {
        id: ""
      },
      addDialog: { visible: false },
      pagination: {
        page: 1,
        limit: 20,
        total: 0
      }
    };
  },

  methods: {
    handleAdd(row) {
      console.log(row);
      this.addDialog.visible = true;
    },

    sizeChange(limit) {
      this.pagination.limit = limit;
    },

    currentChange(page) {
      this.pagination.page = page;
    }
  }
};
</script>

<style></style>
