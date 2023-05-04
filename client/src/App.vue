<script setup lang="ts">
import { RouterView } from 'vue-router'

import BDashBoard from './components/BDashBoard.vue';
import NavBar from './components/NavBar.vue';



</script>

<template>
    <div class="backgroundPicture">
      <NavBar />
      <!-- <BDashBoard /> -->
  
      <div class="container">
        <RouterView />
      </div>
    </div>
  </template>
  
  <style scoped>
     .backgroundPicture {
      background-image: url('https://phantom-marca.unidadeditorial.es/746e69f29df0fa7da1f9df1cffc2af10/crop/0x20/1499x861/resize/1320/f/jpg/assets/multimedia/imagenes/2022/01/12/16419960151339.jpg');
      background-size: cover;
      background-repeat: no-repeat;
      min-height: 10vh;
     }
  </style>
  
  
  
  
  
  