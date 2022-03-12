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

                        <label class="block font-medium text-m text-blue-700 form-label"
                        required>
                            Titulo
                        </label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="1"
                        v-model="form.titulo"
                        required
                        ></textarea>
                        <label class="block font-medium text-sm text-blue-700">
                            Contenido
                        </label>
                        <label class="block font-medium text-sm text-blue-700">
                            Categoria
                        </label>

                        <select class="form-control" id="exampleFormControlTextarea1" rows="1"
                        v-model="form.categoria"
                        required >
                            <option value="">Seleccionar</option>
                            <option value="Alta">Alta</option>
                            <option value="Media">Media</option>
                            <option value="Baja">Baja</option>
                        </select>

                        <textarea class="form-input w-full rounded-md shadow-sm"
                        v-model="form.contenido"
                        rows="5"
                        required
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
                 contenido: "",
                 categoria: "", 
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
