<template>
  <div class="exp">
    <article>
      <div class="title">
        <font-awesome-icon icon="fa-regular fa-compass" />
        <h1>Minhas Experiências</h1>
      </div>
      <hr />
      <section>
        <h3>
          <strong>Estágio</strong> | Desenvolvedor de Software, AvantSec -
          Soluções de Vanguarda no Combate às Ameaças Digitais (Set 2020 - Set
          2021)
        </h3>
        <p>
          Durante meu período como estagiário, participei de acompanhamento de
          projetos, desenvolvimento e integração de sistemas. Minha participação
          primária foi focada no desenvolvimento de aplicação em Java e C++, mas
          também participei da implementação de funcionalidades em sistemas
          construídos em C# e Python. Ainda neste período, obtive vasto
          conhecimento em modelagem e implementação de bancos de dados
          relacionais, assim como manipulação e consulta de tabelas (SQL). Por
          fim, realizei o acompanhamento e suporte no desenvolvimento de
          aplicações WEB (HTML, CSS e JavaScript);
        </p>
      </section>
      <section>
        <h3>
          <strong>Desenvolvedor</strong> | Desenvolvedor de API (Backend), Nova
          Web - Soluções inteligentes para novos desafios (Jul 2022 - Maio 2023)
        </h3>
        <p>
          Realizei a modelagem e implementação de API's, em C#, com foco em
          processamento, validação e indexação de dados em lote. Neste período,
          também desenvolvi um sistema RBAC para controle desacoplado de grupos
          e permissões. Além disso, realizei integrações de sistemas com bases
          de dados relacionais e obtive experiência com fluxo CI/CD para
          implementação de ambientes.
        </p>
      </section>
    </article>
  </div>
</template>

<script>
export default {
  name: "myExp",
};
</script>

<style>
.exp {
  height: 100%;
  padding: 10px;
}

.exp p {
  text-indent: 20px;
  font-size: 1.2em;
  text-align: justify;

  margin: 0;
  padding: 5px;
  padding-bottom: 0;
}

.exp section {
  padding: 10px;
  margin-bottom: 20px;
}
</style>