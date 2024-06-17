<template>
    <div >
      <h1 class="m-3" >Nuestros Proyectos </h1>
      <div class="card-group  justify-content-center">
        <ProjectsCard v-for="(proyecto, index) of proyectos" v-bind:key="index" v-bind:proyecto="proyecto"/>
      </div>
    </div>
</template>


<script>
 import  axios from  'axios';
 import ProjectsCard from '../components/ProjectComponent.vue'

  export default {
    components:{
      ProjectsCard
    },
    data(){
      return {
        proyectos: [],
      }
    },
    methods:{
    async fetch1() {
        console.log("Consulta API");
        this.loading = true; // Indicar que los datos están siendo cargados
        this.error = null; // Restablecer el estado de error

        const cachedProjects = localStorage.getItem('projects');
        if (cachedProjects) {
          this.proyectos = JSON.parse(cachedProjects);
          this.loading = false;
          return;
        }
        try {
          const response = await axios.get("https://api.unergy.io/api/landing/project/");
          this.proyectos = response.data;
          localStorage.setItem('projects', JSON.stringify(this.proyectos)); // Almacenar en caché los datos
          console.log(this.proyectos);
        } catch (err) {
          console.error('Error al obtener proyectos:', err);
          this.error = 'Hubo un error al obtener los proyectos. Por favor, intenta nuevamente.';
        } finally {
          this.loading = false; // Finalizar la indicación de carga
        }
      }      
    },
    created () {
      this.fetch1()
    }
  }    
  </script>
  