<template>
  <div class="header">
    <span>Meu Portfolio</span>
    <div class="links">
      <a href="https://github.com/MateusCavalc">GitHub</a>
      <a href="https://www.linkedin.com/in/mateus-cavalcanti-040942224/"
        >LinkedIn</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "portHeader",
};
</script>

<style>
.header {
  grid-area: header;
  background: #12122b;

  display: flex;
  justify-content: space-between;
  align-items: center;

  color: #ffffffb6;

  border-bottom: 1px solid #fff;
}

.header span {
  margin-left: 20px;

  font-size: 1.5em;
}

.header .links {
  width: 10%;
  margin-right: 20px;

  display: flex;
  justify-content: space-between;
}

.header .links a {
  text-decoration: none;
  color: #ffffffb6;
}
</style>