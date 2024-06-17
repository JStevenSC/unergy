<template>
    <div> 
        <div class="card-group mt-4 me-4 ms-4">
            <div class="card border ">
                <div class="card-body text-center">
                    <h5 class="card-title">{{ proyecto.nombre_corto_l[0].text }}</h5>
                </div>
                <img :src="'https://api.unergy.io' + proyecto.project_file[0].nomfile_img" alt="proyecto" class="card-img-top rounded imagen-pequena">
                
                <div class="  card-body ">                
                    <ul class="list-unstyled ">
                        <li>
                        <strong ><i class="bi bi-bar-chart icono-margi"></i>Porcentaje de financiación:</strong> {{ proyecto.porc_avance_financiacion }}
                        </li>
                        <li>
                        <strong><i class="bi bi-graph-up icono-margi"></i>Rentabilidad estimada:</strong> {{ proyecto.rentabilidad.toFixed(3)  }}
                        </li>
                        <li>
                        <strong><i class="bi bi-geo-alt-fill icono-maargi"></i> Localización:</strong> {{ proyecto.id_caracterizacion.ciudad }}
                        </li>
                        <li>
                        <strong><i class="bi bi-calendar-event icono-margi"></i> Fecha ini. rentabilidad:</strong> {{ proyecto.fecha_inicio_rentabilidad }}
                        </li>
                    </ul>
                    
                    <button type="button" class="btn" @click="openModal(proyecto)">Mas información </button>
                </div>
            </div>
        </div>


    <div class="modal fade" ref="Modalsteven" >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" > {{ proyecto.nombre_corto_l[0].text }}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">

            <div class="card-body text-center">
              <strong ><h5 class="card-title">{{ proyecto.nombre_corto_l[0].text }}</h5></strong>
            </div>
            
            <img :src="'https://api.unergy.io' + proyecto.project_file[0].nomfile_img" alt="proyecto" class="card-img-top rounded imagen-pequena m-3">
            
            <div class="  card-body border border-2 ">                
                    <ul class="list-unstyled m-3">
                        <strong><p>General</p></strong>
                        <li>
                        <strong ><i class="bi bi-bar-chart icono-margi"></i>Porcentaje de financiación:</strong> {{ proyecto.porc_avance_financiacion }}
                        </li>
                        <li>
                        <strong><i class="bi bi-graph-up icono-margi"></i>Rentabilidad estimada:</strong> {{ proyecto.rentabilidad.toFixed(3)  }}
                        </li>
                        <li>
                        <strong><i class="bi bi-geo-alt-fill icono-maargi"></i> Localización:</strong> {{ proyecto.id_caracterizacion.ciudad }}
                        </li>
                        <li>
                        <strong><i class="bi bi-calendar-event icono-margi"></i> Fecha ini. rentabilidad:</strong> {{ proyecto.fecha_inicio_rentabilidad }}
                        </li>
                        <hr>

                        <strong><p>Metricas</p></strong>
                        <li>
                        <strong><i class="bi bi-lightning icono-maargi"></i> Energia Total:</strong> {{ proyecto.metrics.energia_total.toFixed(3) }}
                        </li>
                        <li>
                        <strong><i class="bi bi-cloud-sun icono-maargi"></i> CO2 Ahorrado:</strong> {{ proyecto.metrics.co2_ahorrado.toFixed(3)}}
                        </li>
                        <li>
                        <strong><i class="bi bi-tree icono-maargi"></i> Arboles Salvados:</strong> {{ proyecto.metrics.arboles_salvados.toFixed(3) }}
                        </li>
                    </ul>                   
                   
                </div>    

            <div class="m-3 ">
                {{ proyecto.description_l[0].text }}
                
            </div>            

          </div>
          <div class="modal-footer d-flex justify-content-center">
            <button type="button" class="btn" data-bs-dismiss="modal" @click="redireccionar2(proyecto.nombre_corto_l[0].text)">
              Participar
            </button>
            
          </div>
        </div>
      </div>
    </div>

    </div>

</template>

<script>
import bootstrapBundleMin from 'bootstrap/dist/js/bootstrap.bundle.min';
import {useCounterStore} from '../stores/counter';
import {storeToRefs} from 'pinia'

export default {
  setup() {
    const store = useCounterStore();
    const { proyectoContacto, nombre } = storeToRefs(store);
    const redireccionar = (proyecto) => store.redireccionar(proyecto); 

    return {
      proyectoContacto,
      nombre,
      redireccionar
    };
  },
    data() {
      return {

        }
    },
    methods: {
        openModal(proyecto) {
            const modal = new bootstrapBundleMin.Modal(this.$refs.Modalsteven)
            modal.show(),
            console.log(proyecto)
        },

        redireccionar2(proyecto) {
        this.$router.push({ name: 'contactanos' });
        this.redireccionar(proyecto)
       
      }
 

    },
    props: ["proyecto"]
};

</script>

<style lang="scss">

.imagen-pequena {
  width: 200px;
  height: auto;
  margin: 0 auto;
}
.icono-margi {
  margin: 10px; 
}
.btn{
  background-color: #400D7E;
  color: #ffffff;
}
.btn:hover {
  background-color: #6415c5; 
}


</style>
