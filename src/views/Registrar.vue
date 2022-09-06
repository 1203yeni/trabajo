<template>
    <b-container fluid>
        <b-col sm="3">
            <label :for="nombre"></label>
            <input type="text" v-model="nombre">
        </b-col>
        <b-col sm="3">
            <label :for="DNI"></label>
            <input type="text" v-model="DNI">
        </b-col>
        <b-col sm="3">
            <label :for="correr"></label>
            <input type="text" v-model="correo">
        </b-col>
        <b-col sm="3">
            <label :for="codigopostal"></label>
            <input type="text" v-model="codigopostal">
        </b-col>
        <b-col sm="3">
            <label :for="genero"></label>
            <input type="text" v-model="genero">
        </b-col>
        <b-col sm="3">
            <label :for="Telefono"></label>
            <input type="text" v-model="Telefono">
        </b-col>
    </b-container>
        
    
    
</template>