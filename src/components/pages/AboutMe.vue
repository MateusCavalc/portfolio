<template>
  <div class="sobremim">
    <article>
      <div class="title">
        <font-awesome-icon icon="fa-regular fa-user" />
        <h1>Quem -?</h1>
      </div>
      <hr />
      <p>
        Me chamo Mateus, sou formado em Engenharia de Controle e Automação pela
        Universidade de Brasília (2016-2023) e atuo profissionalmente na área de
        programação, com foco em desenvolvimento backend. Minha jornada no
        desenvolvimento de software começou ainda na universidade, mas foi na
        iniciativa privada onde obtive experiências práticas relevantes. Desde
        então, tenho trabalhado constantemente no aprimoramento das minhas
        habilidades técnicas, com foco na criação de sistemas eficientes,
        escaláveis e seguros. Tenho experiência sólida em tecnologias como
        ASP.NET e NodeJS, bem como conhecimento em ferramentas e frameworks
        relevantes para o desenvolvimento backend e implantação de sistemas.
        Atualmente, venho estudando frameworks como VueJS, NextJS e Angular, com
        o objetivo de expandir minhas aplicações e construir ecossistemas mais
        ricos, focando na implementação de padrões eficientes de projeto.
      </p>
      <p>
        Tirando o contexto profissional, sou uma pessoa comunicativa, proativa e
        curiosa. Tenho um gosto particular por viagens e metas pessoais de
        conhecer países, pessoas e suas culturas. Desde pequeno sou apaixonado
        por música e, no tempo livre, gosto de gravar releituras de grandes
        sambas conhecidos. Além disso, sou atleta de Cheerleading competitivo e
        participo de competições no alto rendimento do esporte, onde fui
        vice-campeão Pan-americano pela Seleção Brasileira de Cheerleading em
        2022.
      </p>
      <div class="images">
        <img class="img-fluid" src="@/assets/imgs/aboutme/pan.jpeg" alt="pan" />
        <img class="img-fluid" src="@/assets/imgs/aboutme/ny.jpeg" alt="ny" />
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: "aboutMe",
};
</script>

<style>
.sobremim {
  padding: 10px;
}

h1 {
  margin: 0;
  padding: 0;
}

.title {
  display: flex;
  justify-content: flex-start;
  align-items: center;

  padding-left: 5px;
  padding-top: 5px;
}

.title svg {
  height: 35px;
  margin-right: 10px;
}

article {
  margin: 5px;
  padding: 10px;

  background-color: #efefef;

  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.75) 3px 3px 10px 0px;
}

.sobremim p {
  text-indent: 20px;
  font-size: 1.2em;
  text-align: justify;

  margin: 0;
  padding: 5px;
  padding-bottom: 0;
}

.sobremim .images {
  padding: 20px;
  margin: 20px;
  display: flex;
  justify-content: space-around;

  background-color: #0001;
  border-radius: 8px;
}

.sobremim img {
  max-width: 45%;
  height: auto;
  border-radius: 8px;
}

/* lg >= 992px */
@media (max-width: 992px) {
  .sobremim .title svg {
    height: 30px;
    margin-right: 5px;
  }

  .sobremim h1 {
    font-size: 1.5em;
  }

  .sobremim p {
    font-size: 0.8em;
  }
}
</style>