<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

import BDashBoard from './components/BDashBoard.vue';
import NavBar from './components/NavBar.vue';



</script>

<template>
    <!-- <Dashboard2 /> -->
    <NavBar />
    <BDashBoard />
    

    <div class="container">
        <RouterView />
    </div>
</template>

<style scoped></style>
