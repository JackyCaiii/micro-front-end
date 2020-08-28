<template>
  <div class="navTab">
    <div class="collapseButton" @click="handleCollapse">
      {{ isCollapse ? "展开" : "收起" }}
    </div>
    <tab-view />
  </div>
</template>

<script>
import TabView from "./TabView";

export default {
  components: {
    TabView
  },

  computed: {
    isCollapse() {
      return this.$store.state.app.isCollapse;
    }
  },

  methods: {
    handleCollapse() {
      this.$store.commit("IS_COLLAPSE", this.isCollapse);
    }
  }
};
</script>

<style lang="scss" scoped>
.navTab {
  height: 32px;
  line-height: 32px;
  position: relative;
  .collapseButton {
    position: absolute;
    top: 50%;
    left: 15px;
    transform: translateY(-50%);
    z-index: 100;
    cursor: pointer;
  }
}
</style>
