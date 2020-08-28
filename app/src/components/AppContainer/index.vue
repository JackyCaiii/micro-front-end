<template>
  <div class="app-container">
    <div class="header" v-if="hasSlot('header')">
      <slot name="header" />
    </div>
    <div class="main">
      <div class="inner">
        <slot />
      </div>
    </div>
    <div class="footer" v-if="hasSlot('footer')">
      <slot name="footer" />
    </div>
  </div>
</template>

<script>
export default {
  name: "AppContainer",

  methods: {
    hasSlot(name) {
      return this.$slots[name];
    }
  }
};
</script>

<style lang="scss" scoped>
.app-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  > .footer,
  > .header {
    flex-shrink: 0;
  }
  > .header {
    margin: 10px 10px 0 10px;
  }
  > .main {
    margin: 10px;
    flex-grow: 1;
    overflow: hidden;
    position: relative;

    .inner {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
  }
  > .footer {
    border-top: 1px solid #ebeef5;
    padding: 10px;
    .app-pagination {
      margin-top: 0;
      float: right;
    }
  }
}
</style>
