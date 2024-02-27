<template>
  <div class="certs">
    <article>
      <div class="title">
        <font-awesome-icon icon="certificate" />
        <h1>Meus Cursos e Certificados</h1>
      </div>
      <hr />
      <section>
        <div class="cert-card">
          <h4>Web Moderno Completo com JavaScript + Projetos</h4>
          <a
            href="https://www.udemy.com/certificate/UC-6d18e07d-060d-46dd-b8df-e7340d9c8f68/"
            ><font-awesome-icon icon="arrow-up-right-from-square"
          /></a>
        </div>
        <div class="cert-card">
          <h4>Node Avançado com Clean Architecture, NestJS e TypeScript</h4>
          <a
            href="https://www.udemy.com/certificate/UC-962a312d-4638-4c69-bdd8-ba98c21631bd/"
            ><font-awesome-icon icon="arrow-up-right-from-square"
          /></a>
        </div>
        <div class="cert-card">
          <h4>Curso Desenvolvedor NodeJS e MongoDB</h4>
          <a
            href="https://www.udemy.com/certificate/UC-f2cfa1dc-95cd-452f-bb36-7e0cfda96bfc/"
            ><font-awesome-icon icon="arrow-up-right-from-square"
          /></a>
        </div>
        <div class="cert-card">
          <h4>Acesso à dados com .NET, Dapper e SQL Server</h4>
          <a
            href="https://balta.io/certificados/613d0678-5f05-4424-8f81-e752c261013e"
            ><font-awesome-icon icon="arrow-up-right-from-square"
          /></a>
        </div>
        <div class="cert-card">
          <h4>Curso de Orquestração com Kubernetes</h4>
          <a
            href="https://www.udemy.com/certificate/UC-bc508462-217f-49fc-87b2-e3b3a403eb79/"
            ><font-awesome-icon icon="arrow-up-right-from-square"
          /></a>
        </div>
        <div class="cert-card">
          <h4>Fundamentos do ASP.NET 6</h4>
          <a
            href="https://balta.io/certificados/60d7650d-ebf4-41e9-83d8-4b6e924d9d9d"
            ><font-awesome-icon icon="arrow-up-right-from-square"
          /></a>
        </div>
        <div class="cert-card">
          <h4>Fundamentos do Azure, Git, GitHub e DevOps</h4>
          <a
            href="https://balta.io/certificados/e0516206-3835-4edb-81c0-2a0c8b7520f3"
            ><font-awesome-icon icon="arrow-up-right-from-square"
          /></a>
        </div>
        <div class="cert-card">
          <h4>Fundamentos do C#</h4>
          <a
            href="https://balta.io/certificados/821fefc0-ac63-41a7-9fd3-72c95c4fab28"
            ><font-awesome-icon icon="arrow-up-right-from-square"
          /></a>
        </div>
        <div class="cert-card">
          <h4>Fundamentos do Entity Framework</h4>
          <a
            href="https://balta.io/certificados/bd2ba0e3-0496-44f4-a425-5cffb2bea704"
            ><font-awesome-icon icon="arrow-up-right-from-square"
          /></a>
        </div>
        <div class="cert-card">
          <h4>Fundamentos do SQL Server</h4>
          <a
            href="https://balta.io/certificados/f8bba388-426c-4b09-b67f-ed669c3e9331"
            ><font-awesome-icon icon="arrow-up-right-from-square"
          /></a>
        </div>
      </section>
    </article>
  </div>
</template>

<script>
export default {
  name: "myCerts",
  methods: {
    click(url) {
      window.location = url;
    },
  },
};
</script>

<style>
.certs {
  height: 100%;
  padding: 10px;
}

.certs h4 {
  margin: 0;
}

.certs section {
  padding: 10px;
  margin-bottom: 20px;
}

.certs .cert-card {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;

  display: flex;
  align-items: center;

  border-radius: 8px;
  background-color: #0001;
}

.certs a {
  margin-left: 15px;
  text-decoration: none;
  color: #000;
}

.certs .cert-card svg {
  height: 20px;
}
</style>