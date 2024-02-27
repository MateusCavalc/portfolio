<template>
  <div class="comp">
    <article>
      <div class="title">
        <font-awesome-icon icon="check-circle" />
        <h1>Minhas Competências</h1>
      </div>
      <hr />
      <section class="skills">
        <div>
          <font-awesome-icon icon="caret-right" /><span>Inglês avançado</span>
        </div>
        <div>
          <font-awesome-icon icon="caret-right" />
          <span
            >Experiência profissional com linguagens <strong>Java</strong>,
            <strong>JavaScript</strong>, <strong>C</strong>,
            <strong>C++</strong>, <strong>C#</strong> e
            <strong>Python</strong>.</span
          >
        </div>
        <div>
          <div class="comp-desc">
            <font-awesome-icon icon="caret-right" />
            <span
              >Desenvolvimento de API's, com base em autenticação por meio de
              JWT.</span
            >
          </div>
          <div class="comp-tec">
            <font-awesome-icon icon="arrow-turn-up" class="fa-rotate-90" />
            <span>ASP.NET Core, Entity Framework | Express, KnexJS</span>
          </div>
        </div>
        <div>
          <div class="comp-desc">
            <font-awesome-icon icon="caret-right" />
            <span>Desenvolvimento de aplicações WEB.</span>
          </div>
          <div class="comp-tec">
            <font-awesome-icon icon="arrow-turn-up" class="fa-rotate-90" />
            <span>NodeJS, VueJS, NestJS</span>
          </div>
        </div>
        <div>
          <div class="comp-desc">
            <font-awesome-icon icon="caret-right" />
            <span>Modelagem, implantação e manipulação de banco de dados.</span>
          </div>
          <div class="comp-tec">
            <font-awesome-icon icon="arrow-turn-up" class="fa-rotate-90" />
            <span>MongoDB, PostGreSQL, MySQL</span>
          </div>
        </div>
        <div>
          <div class="comp-desc">
            <font-awesome-icon icon="caret-right" />
            <span>Serviço de Mensageria.</span>
          </div>
          <div class="comp-tec">
            <font-awesome-icon icon="arrow-turn-up" class="fa-rotate-90" />
            <span>RabbitMQ</span>
          </div>
        </div>
        <div>
          <div class="comp-desc">
            <font-awesome-icon icon="caret-right" />
            <span>Infraestrutura.</span>
          </div>
          <div class="comp-tec">
            <font-awesome-icon icon="arrow-turn-up" class="fa-rotate-90" />
            <span>Oracle Cloud Infrastructure (OCI)</span>
          </div>
        </div>
        <div>
          <div class="comp-desc">
            <font-awesome-icon icon="caret-right" />
            <span>Desenvolvimento Orientado a Teste (TDD).</span>
          </div>
          <div class="comp-tec">
            <font-awesome-icon icon="arrow-turn-up" class="fa-rotate-90" />
            <span>Jest</span>
          </div>
        </div>
        <div>
          <div class="comp-desc">
            <font-awesome-icon icon="caret-right" />
            <span>Metodologias e Padrões de Projeto.</span>
          </div>
          <div class="comp-tec">
            <font-awesome-icon icon="arrow-turn-up" class="fa-rotate-90" />
            <span>Scrum, SOLID, MVC</span>
          </div>
        </div>
        <div>
          <div class="comp-desc">
            <font-awesome-icon icon="caret-right" />
            <span
              >Administração de ambientes isolados e ferramentas de orquestração
              de contêineres.</span
            >
          </div>
          <div class="comp-tec">
            <font-awesome-icon icon="arrow-turn-up" class="fa-rotate-90" />
            <span>Docker, Kubernetes</span>
          </div>
        </div>
        <div>
          <div class="comp-desc">
            <font-awesome-icon icon="caret-right" />
            <span>Controle de versão.</span>
          </div>
          <div class="comp-tec">
            <font-awesome-icon icon="arrow-turn-up" class="fa-rotate-90" />
            <span>Git, GitHub</span>
          </div>
        </div>
        <div>
          <font-awesome-icon icon="caret-right" />
          <span
            >Experiência acadêmica nas áreas de aprendizagem de máquina, visão
            computacional, teste de intrusão e análise de
            vulnerabilidades.</span
          >
        </div>
      </section>
    </article>
  </div>
</template>

<script>
export default {
  name: "myComp",
};
</script>

<style>
.comp {
  height: 100%;
  padding: 10px;
}

.comp .skills {
  font-size: 1.2em;

  padding: 20px;
  background-color: #0001;
  border-radius: 8px;
}

.comp .skills svg[data-icon="caret-right"] {
  margin-right: 8px;
}

.comp .skills svg[data-icon="arrow-turn-up"] {
  margin: 0 10px;
}

.comp .skills > div {
  margin-bottom: 10px;
}

.comp .skills .comp-tec span {
  background-color: #0001;
  padding: 5px;
  border-radius: 8px;
}
</style>