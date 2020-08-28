<template>
  <div class="container">
    <el-menu
      :default-active="activeDefault"
      mode="horizontal"
      menu-trigger="click"
      background-color="#537ca8"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <template v-for="(item, index) in visibleMenus">
        <el-menu-item
          :index="item.route"
          :key="index"
          @click="handleJump(item.route)"
        >
          {{ item.name }}
        </el-menu-item>
      </template>

      <el-submenu index="more" v-if="invisibleMenus.length > 0">
        <template slot="title">更多</template>
        <template v-for="(item, index) in invisibleMenus">
          <el-menu-item :index="item.route" :key="index">
            {{ item.name }}
          </el-menu-item>
        </template>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menus: []
    };
  },

  computed: {
    activeDefault() {
      const match = this.$route.path.match(/\/[\w-_]+/);
      return match ? match[0] : "";
    },

    visibleMenus() {
      return this.menus.slice(0, 4) || [];
    },

    invisibleMenus() {
      return this.menus.slice(4) || [];
    }
  },

  mounted() {
    this.menus = this.$store.getters.menus || [];
  },

  methods: {
    handleJump(route) {
      this.$router.push(route);
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  float: left;
}
</style>
