<template>
  <aside class="menu">
    <ul>
      <li>
        <router-link :to="{ name: 'home' }">
          <a>Sobre Mim</a>
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'exp' }">
          <a>Experiências</a>
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'comp' }">
          <a>Competências</a>
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'certs' }">
          <a>Cursos e Certificados</a>
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'projects' }">
          <a>Projetos</a>
        </router-link>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: "portMenu",
};
</script>

<style>
.menu {
  grid-area: menu;
  background: linear-gradient(to right, #232526, #414345);

  display: flex;
  justify-content: flex-start;

  color: #ffffffb6;

  border-right: 1px solid #fff;
}

.menu ul {
  list-style-type: none;
  justify-self: flex-start;

  padding: 10px 20px;

  font-size: 1.2em;
}

.menu a {
  text-decoration: none;

  color: #ffffffb6;
}

.menu li {
  padding: 10px;
}

.menu li:hover {
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.25) 10%,
    rgba(0, 0, 0, 0) 95%
  );
  border-radius: 8px;
}
</style>