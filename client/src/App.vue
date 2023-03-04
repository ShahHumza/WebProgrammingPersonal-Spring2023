<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';
import ReactiveNavBar from './components/ReactiveNavBar.vue';


</script>

<template>
    
    <!-- <NavBar /> -->
    <ReactiveNavBar />
    

    <div class="container">
        <RouterView />
    </div>
   
</template>

<style scoped>
    
</style>
