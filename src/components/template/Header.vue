<template>
  <div class="header">
    <span>Meu Portfolio</span>
    <img src="@/assets/imgs/logo.png" alt="logo" class="rounded-3" />
    <div class="links">
      <span class="phone">+55 (61) 98587-4816 <font-awesome-icon icon="phone" />
      </span>
      <a href="https://github.com/MateusCavalc">
        <font-awesome-icon icon="fa-brands fa-github" />
      </a>
      <a href="https://www.linkedin.com/in/mateus-cavalcanti-040942224/">
        <font-awesome-icon icon="fa-brands fa-linkedin-in" />
      </a>
      <a href="mailto:mat.fcavalcanti@gmail.com">
        <font-awesome-icon icon="fa-regular fa-envelope" />
      </a>
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

.header>span {
  margin-left: 20px;
  font-size: 1.5em;

  justify-self: self-start;
}

.header>img {
  display: none;

  height: 50px;
  margin-left: 10px;
}

.header .links {
  margin-right: 20px;

  display: flex;
  align-items: flex-end;
}

.header .links a {
  text-decoration: none;
  color: #fff;
  background-color: #fff3;

  display: flex;
  align-items: center;
  margin-left: 15px;

  padding: 10px;
  border: 1px solid #fff3;
  border-radius: 30px;
  box-shadow: #fff 3px 3px 10px -3px;

  font-size: 1.1em;
}

.header .links svg {
  height: 30px;
}

.header .links svg,
.header .links span {
  transition-duration: 500ms;
}

.header .links a:hover>svg {
  scale: 1.2;
}

@media (max-width: 600px) {
  .header>span {
    display: none;
  }

  .header>img {
    display: block;
  }

  .header .links span {
    font-size: 0.7em;
  }

  .header .links svg {
    height: 20px;
  }
}
</style>