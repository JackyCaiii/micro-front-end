<template>
  <div>
    部门1

    <div>子模块的state：{{ this.$store.state.deptManage.data }}</div>

    <el-button type="primary" @click="changeChildVuex">
      更新子模块state
    </el-button>

    <div>这是app全局的state：{{ this.$store.state.app.overall }}</div>

    <el-button type="primary" @click="changeAppVuex">
      更新app全局state
    </el-button>
  </div>
</template>

<script>
export default {
  methods: {
    changeChildVuex() {
      this.$store.commit("deptManage/updateData", "更新子模块vuex成功");
    },

    changeAppVuex() {
      this.$store.commit("CHANGE_APP_STATE", "更新app全局vuex成功");
    }
  }
};
</script>

<style lang="scss" scoped>
div {
  margin: 16px 0;
}
</style>
