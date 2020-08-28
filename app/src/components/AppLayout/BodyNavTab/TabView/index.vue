<template>
  <div class="tabView">
    <el-tabs
      :value="currentPath"
      type="card"
      @tab-remove="removeTag"
      @tab-click="switchTag"
    >
      <el-tab-pane
        v-for="tag in tags"
        :key="tag.path"
        :label="tag.meta ? tag.meta.title : ''"
        :name="tag.path"
        closable
      />
    </el-tabs>

    <div class="operation">
      <el-dropdown size="small" @command="handleCommand" trigger="click">
        <i class="el-icon-arrow-down" />
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="current">关闭当前标签</el-dropdown-item>
          <el-dropdown-item command="other">关闭其它标签</el-dropdown-item>
          <el-dropdown-item command="all">关闭所有标签</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    currentPath() {
      return this.$route.path;
    },

    tags() {
      return this.$store.getters.tags;
    }
  },

  watch: {
    $route: {
      immediate: true,
      handler() {
        this.addTag();
        this.lastRoute = this.$route;
      }
    }
  },

  methods: {
    findTagIndex(path) {
      return this.tags.findIndex(item => item.path === path);
    },

    addTag() {
      const { meta, name, path, params, query } = this.$route;
      if (meta && meta.title) {
        const route = { meta, name, path, params, query };
        let index = 0;
        if (this.lastRoute) {
          index = this.tags.findIndex(
            item => item.path === this.lastRoute.path
          );
        }
        if (this.findTagIndex(route.path) === -1) {
          this.$store.commit("ADD_TAG", { route, index });
        }
      }
    },

    removeOtherTags() {
      const names = [];
      for (const tag of this.tags) {
        if (tag.path === this.currentPath) {
          this.$store.commit("SET_TAGS", [tag]);
        } else {
          names.push(tag.name);
        }
      }
    },

    removeAllTags() {
      this.$store.commit("SET_TAGS", []);
      this.redirect("/");
    },

    handleCommand(command) {
      switch (command) {
        case "current":
          this.removeTag(this.currentPath);
          break;

        case "other":
          this.removeOtherTags();
          break;

        case "all":
          this.removeAllTags();
          break;
      }
    },

    switchTag(tag) {
      const route = this.tags[this.findTagIndex(tag.name)] || { path: "/" };
      this.redirect(route);
    },

    removeTag(path) {
      const index = this.findTagIndex(path);
      const route = this.tags[index];
      this.$store.commit("REMOVE_TAG", route.path);
      if (path === this.currentPath) {
        if (index > 0) {
          this.redirect(this.tags[index - 1]);
        } else {
          this.redirect("/");
        }
      }
    },

    redirect(params) {
      this.$nextTick(() => {
        this.$router.push(params);
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.tabView {
  position: relative;
  & ::v-deep .el-tabs__header {
    background-color: #f9fafc;
    margin: 0;
    padding: 0 34px 0 60px;
    .el-tabs__nav {
      border-top: none;
      border-radius: 0;
    }
    .el-tabs__item {
      position: relative;
      font-size: 12px;
      line-height: inherit;
      height: inherit;
      border-radius: 0;
      min-width: 140px;
      &.is-active {
        background-color: #fff;
      }
      & .el-icon-close {
        position: absolute;
        right: 5px;
        top: 50%;
        transform: translateY(-50%);
        line-height: 13px;
      }
    }
    .el-tabs__nav-next,
    .el-tabs__nav-prev {
      line-height: inherit;
      i {
        position: relative !important;
        top: 1px !important;
      }
    }
    .el-tabs__nav-wrap.is-scrollable {
      padding: 0 30px;
    }
  }
  .operation {
    position: absolute;
    right: 15px;
    top: 0;
    .el-icon-arrow-down {
      cursor: pointer;
    }
  }
}
</style>
