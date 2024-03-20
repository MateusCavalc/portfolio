<template>
  <aside class="menu">
    <nav class="h-100 w-100 p-2 d-flex flex-column">

      <router-link :to="{ name: 'home' }">
        <menu-item :active="activeItem === 'aboutme' || hoverItem == 'aboutme'" @click="activeItem = 'aboutme'"
          @mouseover="hoverItem = 'aboutme'" @mouseleave="hoverItem = ''" label="Sobre mim"
          icon="fa-regular fa-user"></menu-item>
      </router-link>

      <router-link :to="{ name: 'exp' }">
        <menu-item :active="activeItem === 'exp' || hoverItem == 'exp'" @click="activeItem = 'exp'"
          @mouseover="hoverItem = 'exp'" @mouseleave="hoverItem = ''" label="Experiências"
          icon="fa-regular fa-compass"></menu-item>
      </router-link>

      <router-link :to="{ name: 'comp' }">
        <menu-item :active="activeItem === 'comp' || hoverItem == 'comp'" @click="activeItem = 'comp'"
          @mouseover="hoverItem = 'comp'" @mouseleave="hoverItem = ''" label="Competências"
          icon="fa-solid fa-check-circle"></menu-item>
      </router-link>

      <router-link :to="{ name: 'certs' }">
        <menu-item :active="activeItem === 'certs' || hoverItem == 'certs'" @click="activeItem = 'certs'"
          @mouseover="hoverItem = 'certs'" @mouseleave="hoverItem = ''" label="Certificados"
          icon="fa-solid fa-certificate"></menu-item>
      </router-link>

      <router-link :to="{ name: 'projects' }">
        <menu-item :active="activeItem === 'projects' || hoverItem == 'projects'" @click="activeItem = 'projects'"
          @mouseover="hoverItem = 'projects'" @mouseleave="hoverItem = ''" label="Projetos"
          icon="fa-solid fa-laptop-code"></menu-item>
      </router-link>

    </nav>
  </aside>
</template>

<script>
import MenuItem from './MenuItem.vue'

export default {
  name: "portMenu",
  components: { MenuItem },
  data() {
    return {
      activeItem: 'aboutme',
      hoverItem: 'aboutme',
    }
  },
};
</script>

<style>
.menu {
  grid-area: menu;
  background: linear-gradient(to right, #232526, #414345);
  border-right: 1px solid #fff;
}

.menu a {
  text-decoration: none;
}
</style>