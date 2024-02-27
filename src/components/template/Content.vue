<template>
  <div class="content">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "portContent",
};
</script>

<style>
.content {
  grid-area: content;
  background-color: #414345;
}
</style>