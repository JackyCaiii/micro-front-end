<template>
  <div class="logo-box">
    <img src="@/assets/images/logo.jpg" alt="" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.logo-box {
  position: relative;
  float: left;
  cursor: pointer;
  width: 60px;
  height: 60px;

  img {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 90%;
  }
}
</style>
