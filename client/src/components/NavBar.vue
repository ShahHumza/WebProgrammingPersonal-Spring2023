<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import LoginBadge from './LoginBadge.vue';


    const isMenuActive = ref(false);
    const isCartActive = ref(false);

    function toggleMenu() {
        isMenuActive.value = !isMenuActive.value;
        console.log({ isMenuActive });
    }
</script>

<template>
    <nav class="navbar is-primary">
        <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item" href="">
            
            <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="22" height="22" />
            
          </a>
          <div class="navbar-burger" :class="{ 'is-active': isMenuActive }" @click="toggleMenu" >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      
        <div class="navbar-menu" :class="{ 'is-active': isMenuActive }">
          <div class="navbar-start">

            <RouterLink to="/" class="navbar-item">Home</RouterLink>
            
            <!-- <RouterLink to="/products" class="navbar-item">Products</RouterLink> -->


            
            <RouterLink to="/about" class="navbar-item">About</RouterLink>
            <RouterLink to="/friends" class="navbar-item">Friends</RouterLink>
            <RouterLink to="/admin" class="navbar-item">Admin</RouterLink>
          
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link" href="">
                Fitness
              </a>
              <div class="navbar-dropdown">
                <RouterLink class="navbar-item" to="/workouts">
                  Workouts
                </RouterLink>
                <RouterLink class="navbar-item" to="/calories">
                  Calorie Tracker
                </RouterLink>
                <RouterLink class="navbar-item" to="/weight">
                  Weight Tracker
                </RouterLink>
                
              </div>
            </div>
            
            
          </div>
      
          <div class="navbar-end">

            
            <LoginBadge />

            
          </div>
        </div>
    </div>
      </nav>
    
</template>


<style scoped>
    
</style>