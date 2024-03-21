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
  grid-template-columns: 220px 1fr;
  grid-template-rows: 80px minmax(0, 1fr) 40px;
  grid-template-areas:
    "header header"
    "menu content"
    "menu footer";
}

.content {
  overflow-y: scroll;
}

@media (max-width: 992px) {
  #page {
    grid-template-columns: 70px 1fr;
  }
}

@media (max-width: 600px) {
  #page {
    grid-template-columns: 1fr;
    grid-template-rows: 80px 60px minmax(0, 1fr) 40px;
    grid-template-areas:
      "header"
      "menu"
      "content"
      "footer";
  }
}
</style>
