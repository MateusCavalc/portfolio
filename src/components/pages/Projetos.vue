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
          </header>
          <hr />
          <p>
            Este portfolio foi desenvolvido como um projeto cujo objetivo é
            aplicar conceitos de FrontEnd.
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
}

.projects .project-card {
  width: 30%;
  background-color: #0001;
  padding: 10px;
  margin: 20px;

  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.75) 3px 3px 10px 0px;
}

.projects .project-card hr {
  margin: 5px 0;
}

.projects .project-card p {
  padding: 5px;
  text-align: justify;
}
</style>