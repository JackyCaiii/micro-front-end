<template>
  <drawer-form inline resetShow>
    <el-form-item label="工单号" prop="id">
      <el-input v-model="data.id" placeholder="请输入工单号" clearable>
        <el-button slot="append">搜索</el-button>
      </el-input>
    </el-form-item>
    <el-form-item label="工单号" prop="id">
      <el-input v-model="data.id" placeholder="请输入工单号" clearable>
        <el-button slot="append">搜索</el-button>
      </el-input>
    </el-form-item>
    <el-form-item label="工单号" prop="id">
      <el-input v-model="data.id" placeholder="请输入工单号" clearable>
        <el-button slot="append">搜索</el-button>
      </el-input>
    </el-form-item>
    <el-form-item label="工单号" prop="id">
      <el-input v-model="data.id" placeholder="请输入工单号" clearable>
        <el-button slot="append">搜索</el-button>
      </el-input>
    </el-form-item>

    <template slot="fixed">
      <el-button type="primary">导出报表</el-button>
    </template>
  </drawer-form>
</template>

<script>
export default {
  data() {
    return {
      data: {}
    };
  }
};
</script>

<style></style>
