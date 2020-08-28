<template>
  <div class="user-data">
    <div class="avatar">
      <el-avatar size="medium">
        <img src="@/assets/images/avatar_boy.png" alt="" />
      </el-avatar>
    </div>
    <el-dropdown class="dropdown">
      <div class="name">老实人</div>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>修改密码</el-dropdown-item>
        <el-dropdown-item>退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.user-data {
  float: right;
  height: inherit;
  display: flex;
  align-items: center;
}
.dropdown {
  height: inherit;
}
.name {
  line-height: 60px;
  margin-left: 12px;
  color: white;
}
</style>
