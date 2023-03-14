<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import LoginBadge from './LoginBadge.vue';
import { RouterLink } from 'vue-router';


    // Create a reactive variable for the current mode
    const isDarkMode = ref(false);

    // Function to toggle the mode
    function toggleMode() {
    isDarkMode.value = !isDarkMode.value;
    const html = document.documentElement;
    html.classList.toggle('dark-mode');
    }

    // Watch for changes in the mode and save the setting in the local storage
    watchEffect(() => {
    const html = document.documentElement;
    if (isDarkMode.value) {
        html.classList.add('dark-mode');
        localStorage.setItem('mode', 'dark');
    } else {
        html.classList.remove('dark-mode');
        localStorage.setItem('mode', 'light');
    }
    });

    // Check the local storage for the previous setting
    const savedMode = localStorage.getItem('mode');
    if (savedMode === 'dark') {
    isDarkMode.value = true;
    }
</script>


<template>
    
   <!-- SIDEBAR -->
   <div :class="{ 'dark-mode': isDarkMode }">
<section id="sidebar">
  <RouterLink to="/" class="brand">
    <i class='bx bxs-smile'></i>
    <span class="text">HumSite</span>
  </RouterLink>
  <ul class="side-menu top">
    <li>
      <RouterLink to="/dashboard" class="active">
        <i class='bx bxs-dashboard'></i>
        <span class="text">Dashboard</span>
      </RouterLink>
    </li>
    <li>
      <RouterLink to="/products">
        <i class='bx bxs-shopping-bag-alt'></i>
        <span class="text">Friends</span>
      </RouterLink>
    </li>
    <li>
      <RouterLink to="/about">
        <i class='bx bxs-doughnut-chart'></i>
        <span class="text">Workout</span>
      </RouterLink>
    </li>
    <li>
      <RouterLink to="/message">
        <i class='bx bxs-message-dots'></i>
        <span class="text">Messages</span>
      </RouterLink>
    </li>
    <li>
      <RouterLink to="/team">
        <i class='bx bxs-group'></i>
        <span class="text">Team</span>
      </RouterLink>
    </li>
  </ul>
  <ul class="side-menu">
    <li>
      <RouterLink to="/settings">
        <i class='bx bxs-cog'></i>
        <span class="text">Settings</span>
      </RouterLink>
    </li>
    <li>
      <RouterLink to="/logout" class="logout">
        <i class='bx bxs-log-out-circle'></i>
        <span class="text">Logout</span>
      </RouterLink>
    </li>
  </ul>
</section>
<!-- SIDEBAR -->

<!-- CONTENT -->
<section id="content">
  <!-- NAVBAR -->
  <nav>
    <i class='bx bx-menu'></i>
    <RouterLink to="/categories" class="nav-link">Categories</RouterLink>
    <form action="#">
      <div class="form-input">
        <input type="search" placeholder="Search...">
        <button type="submit" class="search-btn"><i class='bx bx-search'></i></button>
      </div>
    </form>
    <RouterLink to="/" class="notification">
      <i> <LoginBadge /></i>
      <span class="num">8</span>
    </RouterLink>
    <input type="checkbox" id="switch-mode" hidden>
    <label for="switch-mode" class="switch-mode"></label>
    <RouterLink to="/notification" class="notification">
      <i class='bx bxs-bell'></i>
      <span class="num">8</span>
    </RouterLink>
    <RouterLink to="/profile" class="profile">
      <img src="img/people.png">
    </RouterLink>
  </nav>
  <!-- NAVBAR -->
  



		
	</section>
   </div>



</template>



<style scoped>

</style>