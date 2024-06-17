<template>
  <div>
    <div class="container">
      <div class="row">

        <div class="col-12 col-md-1 d-flex justify-content-center align-items-center"></div>

        <div class="col-12 col-md-10 d-flex justify-content-center align-items-center">
          <div class="container mt-5">
            <div class="row justify-content-center">
              <div class="col-md-8">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title text-center mb-4">Interesado en {{ proyectoContacto }}</h5>
                    <form @submit.prevent="handleSubmit">
                      <div class="form-group">
                        <label class="m-2" for="nombreCompleto">Nombre Completo</label>
                        <input v-model="form.nombreCompleto" type="text" class="form-control" id="nombreCompleto" placeholder="Ingrese su nombre completo" required>
                      </div>
                      <div class="form-group">
                        <label class="m-2" for="ciudad">Ciudad</label>
                        <input v-model="form.ciudad" type="text" class="form-control" id="ciudad" placeholder="Ingrese su ciudad" required>
                      </div>
                      <div class="form-group">
                        <label class="m-2" for="numeroContacto">Número de Contacto</label>
                        <input v-model="form.numeroContacto" type="tel" class="form-control" id="numeroContacto" placeholder="Ingrese su número de contacto" required>
                      </div>
                      <div class="form-group">
                        <label class="m-2" for="correoElectronico">Correo Electrónico</label>
                        <input v-model="form.correoElectronico" type="email" class="form-control" id="correoElectronico" placeholder="Ingrese su correo electrónico" required>
                      </div>
                      <div class="form-group">
                        <label class="m-2" for="proyectoInteres">Proyecto en que está interesado</label>
                        <input v-model="form.proyectoInteres" type="text" class="form-control" id="proyecto" placeholder="Ingrese su proyecto" required>
                      </div>
                      <button type="submit" class="btn btn-block m-3">Enviar</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-1 d-flex justify-content-center align-items-center"></div>
      </div>

    </div>
  </div>
</template>

<script>
import { useCounterStore } from '../stores/counter';
import { storeToRefs } from 'pinia';

export default {
  setup() {
    const store = useCounterStore();
    const { proyectoContacto } = storeToRefs(store);

    return {
      proyectoContacto
    };
  },
  data() {
    return {
      form: {
        nombreCompleto: '',
        ciudad: '',
        numeroContacto: '',
        correoElectronico: '',
        proyectoInteres: ''
      },

    };
  },
  methods: {
    handleSubmit() {
      console.log(this.form);
      alert(`Pronto nos contactaremos al ${this.form.correoElectronico} con toda la información solicitada.`)
    }

  }
};
</script>

<style>
.texto {
  text-align: center; 
}
</style>
