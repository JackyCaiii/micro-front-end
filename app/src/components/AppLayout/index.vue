<template>
  <div class="app-layout">
    <div class="app-header">
      <app-header />
    </div>
    <div class="app-body">
      <div class="body-left">
        <side-bar />
      </div>
      <div class="body-right">
        <body-nav-tab></body-nav-tab>
        <div id="module-container">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "./SideBar";
import BodyNavTab from "./BodyNavTab";

export default {
  name: "AppLayout",

  components: {
    SideBar,
    BodyNavTab
  }
};
</script>

<style lang="scss" scoped>
.app-layout {
  height: 100%;

  .app-body {
    overflow: hidden;
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    bottom: 0;

    .body-left {
      float: left;
      height: 100%;
    }

    .body-right {
      height: 100%;
      overflow: hidden;
      position: relative;

      #module-container {
        position: absolute;
        top: 32px;
        bottom: 0;
        left: 0;
        right: 0;
        overflow-y: auto;
        padding: 10px;
        box-sizing: border-box;
      }
    }
  }
}
</style>
