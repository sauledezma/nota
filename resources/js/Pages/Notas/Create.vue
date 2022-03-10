<template>
    <app-layout title="Dashboard" >
        <template #header style="backgroubd-color:blue">
            
            <h2 class="font-bold text-l text-gray-1000 leading-tight">
                ESCRIBE AQUI LA HISTORIA
            </h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="mb-3 bg-blue overflow-hidden shadow-xl sm:rounded-lg">
                    
                      
                     <form @submit.prevent="enviar">

                        <label class="block font-medium text-m text-blue-700 form-label">
                            Titulo
                        </label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="1"
                        v-model="form.titulo"
                        ></textarea>

                        <label class="block font-medium text-sm text-blue-700">
                            Contenido
                        </label>
                        <textarea class="form-input w-full rounded-md shadow-sm"
                        v-model="form.contenido"
                        rows="5"
                        ></textarea>

                       <button 
                            class="bg-orange-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md"
                        >Crear</button>
                     </form>



                </div>
            </div>
        </div>
    </app-layout>
</template>

<script>
    import { defineComponent } from 'vue'
    import AppLayout from '@/Layouts/AppLayout.vue'
    

    export default defineComponent({
        components: {
            AppLayout,
            
        },
        data(){
            return{
                form:{
                 titulo:"",
                 contenido: ""  
                }
            

            }
            
        },
         methods:{
             enviar(){
                 this.$inertia.post(this.route("notas.store"),
                 this.form)
             }
         }
    })
</script>
