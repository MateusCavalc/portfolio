<template>
  <div class="sobremim">
    <article>
      <div class="title">
        <font-awesome-icon icon="fa-regular fa-user" />
        <h1>Quem sou?</h1>
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
      </p>
      <p>
        Tirando o contexto profissional, sou uma pessoa ativa e bastante
        comunicativa. Desde pequeno sou apaixonado por música e, no tempo livre,
        gosto de gravar releituras de grandes sambas conhecidos. Também sou
        atleta de Cheerleading competitivo e participo de competições no alto
        rendimento do esporte, no qual fui vice-campeão pan-americano, em 2022.
      </p>
      <div class="images">
        <img src="@/assets/imgs/pan.jpeg" alt="pan" />
        <img src="@/assets/imgs/ny.jpeg" alt="ny" />
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
  height: 100%;
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
  height: 400px;
  border-radius: 8px;
}
</style>