<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Dashboard2 from './components/Dashboard2.vue';

import NavBar from './components/NavBar.vue';
import ReactiveNavBar from './components/ReactiveNavBar.vue';


</script>

<template>
    <!-- <NavBar /> -->
    <!-- <ReactiveNavBar /> -->

    <Dashboard2 />



    <div class="container">
        <RouterView />
    </div>
</template>

<style scoped></style>
