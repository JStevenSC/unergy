import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({   
    nombre : "steven",
    proyectoContacto: ""
  }),
  actions: {
      redireccionar(proyecto){
      this.proyectoContacto=proyecto    
    }
  }
})