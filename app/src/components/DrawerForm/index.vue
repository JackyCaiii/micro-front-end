<!--
* 表单组件
* resetShow：true显示重置按钮，false不显示
* 显示重置按钮使用@reset触发重置事件
* slot="fixed" 自定义右上角内容
-->
<template>
  <div class="drawer-form">
    <div class="form-layout" ref="layout">
      <el-form ref="elForm" v-bind="$attrs" v-on="$listeners">
        <div class="fixed">
          <slot name="fixed" />
          <el-button type="success" v-show="resetShow" @click="reset">
            重置
          </el-button>
        </div>
        <slot />
      </el-form>
    </div>
    <div ref="toggle" class="toggle" @click="toggleDrawer">
      <i :class="expanded ? 'el-icon-caret-top' : 'el-icon-caret-bottom'" />
      <span class="text">{{ expanded ? "收起更多" : "显示更多" }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DrawerForm",

  props: {
    resetShow: {
      type: Boolean,
      defalut() {
        return false;
      }
    }
  },

  data() {
    return {
      expanded: false
    };
  },

  mounted() {
    this.initHeight();
  },

  methods: {
    reset() {
      this.$emit("reset");
      this.$refs.elForm.resetFields();
    },

    toggleDrawer() {
      this.expanded = !this.expanded;
      this.initHeight();
    },

    initHeight() {
      if (this.expanded) {
        this.$refs.layout.style.height = "auto";
      } else {
        this.$refs.layout.style.height = this.getDefaultHeight();
      }
    },

    getDefaultHeight() {
      const firstItem = this.$refs.elForm.$el.querySelector(".el-form-item");
      const computedStyle = document.defaultView.getComputedStyle(
        firstItem,
        null
      );
      const itemHeight = firstItem.offsetHeight;
      const marginTop = Number.parseInt(computedStyle.marginTop);
      const marginBottom = Number.parseInt(computedStyle.marginBottom);
      const paddingTop = Number.parseInt(computedStyle.paddingTop);
      const paddingBottom = Number.parseInt(computedStyle.paddingBottom);
      const layoutHeight =
        marginTop + marginBottom + paddingTop + paddingBottom + itemHeight;
      return `${layoutHeight}px`;
    }
  }
};
</script>

<style lang="scss" scoped>
.drawer-form {
  border: 1px solid #ebeef5;
  margin-bottom: 18px;

  .form-layout {
    box-sizing: border-box;
    margin: 10px;
    margin-bottom: 0;
    overflow: hidden;
    .fixed {
      float: right;
    }
  }

  .toggle {
    text-align: center;
    font-size: 12px;
    color: #d3dce6;
    background-color: #fff;
    cursor: pointer;
    padding: 5px 0;
    z-index: 999;
    .text {
      display: inline-block;
      opacity: 0;
    }
    .el-icon-caret-top,
    .el-icon-caret-bottom,
    .text {
      transition: all 0.3s;
      transform: translateX(40px);
    }
  }
  &:hover {
    .toggle {
      color: #537ca8;
      background-color: #f9fafc;
      .el-icon-caret-top,
      .el-icon-caret-bottom,
      .text {
        transform: translateX(0);
        opacity: 1;
      }
    }
  }
}
</style>
