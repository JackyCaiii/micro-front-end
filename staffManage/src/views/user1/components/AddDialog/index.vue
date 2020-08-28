<template>
  <el-dialog
    width="450px"
    title="新增弹窗"
    :visible="visible"
    :close-on-click-modal="false"
    @close="handleClose"
    @closed="handleClosed"
    @open="handleOpen"
  >
    这是个弹窗
    <div slot="footer">
      <el-button @click="handleClose">取消</el-button>
      <el-button type="primary" @click="save">
        保存
      </el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  props: {
    visible: Boolean
  },

  methods: {
    handleOpen() {},

    handleClose() {
      this.$emit("update:visible", false);
    },

    handleClosed() {},

    save() {}
  }
};
</script>
