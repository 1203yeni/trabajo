
<template>
    <div class="container">

        <div class= "form-group left">
            <label for="" class="control-label col-sm-2">Nombre</label>
            <div class= "col-sm-10">
                <input type="text" class="form-control" name="nombre" id= "nombre" v-model= "form.nombre" >
            </div>
        </div>
        
        <div class= "form-group left">
            <label for="" class="control-label col-sm-2">Dirección</label>
            <div class= "col-sm-10">
                <input type="text" class="form-control" name="direccion" id= "direccion" v-model= "form.direccion" >
            </div>
        </div>

        <div class= "form-group row">
            <label for="" class="control-label col-sm-2">Correo</label>
            <div class= "col">
                <input type="text" class="form-control" name="correo" id= "correo" v-model= "form.correo" >
            </div>
        </div>

        <div class= "form-group left">
            <label for="" class="control-label col-sm-3">Código Postal</label>
            <div class= "col-sm-7">
                <input type="text" class="form-control" name="codigoPostal" id= "codigoPostal" v-model= "form.codigoPostal" >
            </div>
        </div>

        <div class= "col">
            <label for="" class="control-label col-sm-5">Nombre</label>
            <div class= "col-sm-7">
                <input type="text" class="form-control" name="nombre" id= "nombre" v-model= "form.nombre" >
            </div>
        </div>

        <div class= "form-group left row">
            <label for="" class="control-label col-sm-2">Género</label>
            <div class= "col-sm-7">
                <input type="text" class="form-control" name="genero" id= "genero" v-model= "form.genero" >
            </div>
        </div>

         <div class= "col">
            <label for="" class="control-label col-sm-2">Teléfono</label>
            <div class= "col-sm-7">
                <input type="text" class="form-control" name="telefono" id= "telefono" v-model= "form.telefono" >
            </div>
        </div>
    </div>
</template>
<script>
    import axios from 'axios';
    export default {
        name:"Editar",
        data(){
            return{
                form:{
                    "nombre" : null,
                    "direccion" : null,
                    "dni" : null,
                    "genero" : null,
                    "token" : null,
                    "telefono" : null,
                    "codigoPostal" : null,
                    "fechaNacimiento" : null,
                }
            }
        },
        components: {

        },
        methods:{

        },
        mounted: function() {
            direccion = "https://api.solodata.es/pacientes?id=454";
            axios.get(direccion).then(data => {
                this.form.nombre=data.data[0].Nombre
            });
        },
    }
</script>



