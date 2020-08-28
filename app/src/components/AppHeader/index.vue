<template>
  <div class="app-header">
    <logo />
    <user-data />
    <header-menus />
  </div>
</template>

<script>
import Logo from "./Logo";
import UserData from "./UserData";
import HeaderMenus from "./HeaderMenus";

export default {
  name: "AppHeader",
  components: {
    Logo,
    UserData,
    HeaderMenus
  }
};
</script>

<style lang="scss" scoped>
.app-header {
  position: relative;
  height: 60px;
  background-color: #537ca8;
  color: white;
  padding: 0 15px;
}
</style>
