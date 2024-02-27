<template>
  <div id="page">
    <pheader />
    <pmenu />
    <pcontent />
    <pfooter />
  </div>
</template>

<script>
import pheader from "@/components/template/Header.vue";
import pmenu from "@/components/template/Menu.vue";
import pcontent from "@/components/template/Content.vue";
import pfooter from "@/components/template/Footer.vue";

export default {
  name: "App",
  components: { pheader, pmenu, pcontent, pfooter },
};
</script>

<style>
#app {
  font-family: "Lato", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  height: 100vh;
}

#page {
  height: 100%;
  display: grid;
  grid-template-rows: 60px 1fr 40px;
  grid-template-columns: 250px 1fr;
  grid-template-areas:
    "header header"
    "menu content"
    "menu footer";
}
</style>
