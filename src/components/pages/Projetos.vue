<template>
  <div class="projects">
    <article>
      <div class="title">
        <font-awesome-icon icon="laptop-code" />
        <h1>Meus Projetos</h1>
      </div>
      <hr />
      <section>
        <div class="project-card">
          <header class="card-title">
            <h4>Portfolio Web</h4>
            <a href="https://github.com/MateusCavalc/portfolio"
              ><font-awesome-icon icon="arrow-up-right-from-square"
            /></a>
          </header>
          <hr />
          <p>
            Este portfolio foi desenvolvido como um projeto cujo objetivo é
            aplicar conceitos de FrontEnd.
          </p>
        </div>
        <div class="project-card">
          <header class="card-title">
            <h4>Base de Conhecimento</h4>
            <a href=""
              ><font-awesome-icon icon="arrow-up-right-from-square"
            /></a>
          </header>
          <hr />
          <p>
            Projeto destinado ao desenvolvimento de uma aplicação web completa,
            integrada a base de dados relacionais e não-relacionais via API, e
            com implementação de autenticação de acesso.
          </p>
        </div>
        <div class="project-card">
          <header class="card-title">
            <h4>Outro Projeto</h4>
            <a href=""
              ><font-awesome-icon icon="arrow-up-right-from-square"
            /></a>
          </header>
          <hr />
          <p>
            Projeto destinado ao desenvolvimento de uma aplicação web completa,
            integrada a base de dados relacionais e não-relacionais via API, e
            com implementação de autenticação de acesso.
          </p>
        </div>
        <div class="project-card">
          <header class="card-title">
            <h4>Outro Projeto</h4>
            <a href=""
              ><font-awesome-icon icon="arrow-up-right-from-square"
            /></a>
          </header>
          <hr />
          <p>
            Projeto destinado ao desenvolvimento de uma aplicação web completa,
            integrada a base de dados relacionais e não-relacionais via API, e
            com implementação de autenticação de acesso.
          </p>
        </div>
        <div class="project-card">
          <header class="card-title">
            <h4>Mais Um</h4>
            <a href=""
              ><font-awesome-icon icon="arrow-up-right-from-square"
            /></a>
          </header>
          <hr />
          <p>
            Projeto destinado ao desenvolvimento de uma aplicação web completa,
            integrada a base de dados relacionais e não-relacionais via API, e
            com implementação de autenticação de acesso.
          </p>
        </div>
        <div class="project-card">
          <header class="card-title">
            <h4>E Outro</h4>
            <a href=""
              ><font-awesome-icon icon="arrow-up-right-from-square"
            /></a>
          </header>
          <hr />
          <p>
            Projeto destinado ao desenvolvimento de uma aplicação web completa,
            integrada a base de dados relacionais e não-relacionais via API, e
            com implementação de autenticação de acesso.
          </p>
        </div>
      </section>
    </article>
  </div>
</template>

<script>
export default {
  name: "myProjects",
};
</script>

<style>
.projects {
  height: 100%;
  padding: 10px;
}

.projects h4 {
  margin: 0;
}

article {
  margin: 5px;
  padding: 10px;

  background-color: #efefef;

  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.75) 3px 3px 10px 0px;
}

.projects section {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.projects .project-card {
  max-width: 30%;
  height: fit-content;
  background-color: #0001;
  padding: 10px;
  margin: 10px 5px;

  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.75) 3px 3px 10px 0px;
}

.projects .project-card .card-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.projects .project-card .card-title a {
  margin-right: 5px;
  text-decoration: none;
  color: #000;
}

.projects .project-card svg {
  height: 20px;
}

.projects .project-card hr {
  margin: 5px 0;
}

.projects .project-card p {
  margin: 0;
  padding: 5px;
}
</style>