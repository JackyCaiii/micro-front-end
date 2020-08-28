<template>
  <div>
    <template v-for="item in menus">
      <el-submenu
        :index="resolvePath(item.route)"
        :key="item.route"
        v-if="item.children"
      >
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span slot="title">{{ item.name }}</span>
        </template>
        <sidebar-item
          :root-path="resolvePath(item.route)"
          :menus="item.children"
        />
      </el-submenu>

      <template v-else>
        <el-menu-item :index="resolvePath(item.route)" :key="item.route">
          <i class="el-icon-menu"></i>
          <span slot="title">{{ item.name }}</span>
        </el-menu-item>
      </template>
    </template>
  </div>
</template>

<script>
import SidebarItem from "../SidebarItem";

export default {
  name: "SidebarItem",

  components: {
    SidebarItem
  },

  props: {
    menus: {
      type: Array,
      default() {
        return [];
      }
    },
    rootPath: {
      type: String,
      default: ""
    }
  },

  methods: {
    resolvePath(childrenPath) {
      return `${this.rootPath}/${childrenPath}`;
    }
  }
};
</script>

<style lang="scss" scoped>
::v-deep .el-menu-item {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
