<template>
  <div>
    <app-header />
    <div class="background-container">
      <div class="bg-img">
        <h1 class="title">欢迎来到~</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.background-container {
  position: absolute;
  top: 60px;
  bottom: 0;
  left: 0;
  right: 0;
}

.bg-img {
  background: url(~@/assets/images/Macaron.jpg) no-repeat;
  background-size: 100%;
  width: 100%;
  height: 100%;
  position: relative;
}

.title {
  position: absolute;
  top: 1vw;
  left: 2vw;
  font-size: 3vw;
  color: white;
}
</style>
