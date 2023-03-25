<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import LoginBadge from './LoginBadge.vue';
import { RouterLink } from 'vue-router';
import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'
import { useSession, useLogout } from '@/model/session';

// Allows my button to logout too// bottom left red logout button
const logout = useLogout();
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
  <main class="main">
    <!-- SIDEBAR -->
    <div :class="{ 'dark-mode': isDarkMode }">
      <section id="sidebar">
        <RouterLink to="/" class="brand">
          <i class='bx bxs-smile'></i>
          <span class="text">HumSite</span>
        </RouterLink>
        <ul class="side-menu top">
          <li>
            <RouterLink to="/" class="active">
              <i class='bx bxs-dashboard'></i>
              <span class="text">Dashboard</span>
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/friends">
              <i class='bx bxs-shopping-bag-alt'></i>
              <span class="text">Friends</span>
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/workouts">
              <i class='bx bxs-doughnut-chart'></i>
              <span class="text">Workout</span>
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/login">
              <i class='bx bxs-message-dots'></i>
              <span class="text">Messages</span>
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/admin">
              <i class='bx bxs-group'></i>
              <span class="text">Admin</span>
            </RouterLink>
          </li>
        </ul>
        <ul class="side-menu">
          <li>
            <a>
              <i class='bx bxs-cog'></i>
              <span class="text">Settings</span>
            </a>
          </li>
          <li>
            <a class="logout" @click="logout">
              <i class='bx bxs-log-out-circle'></i>
              <span class="text">Logout</span>
            </a>
            <i>
              <LoginBadge />
            </i>
          </li>
        </ul>
      </section>
      <!-- SIDEBAR -->

      <!-- CONTENT -->
      <section id="content">
        <!-- NAVBAR -->

        <nav>
          <i class='bx bx-menu'></i>
          <a class="nav-link">Categories</a>
          <form action="#">
            <div class="form-input">
              <input type="search" placeholder="Search...">
              <button type="submit" class="search-btn"><i class='bx bx-search'></i></button>
            </div>
          </form>
          <a class="notification">
          
            <!-- <span class="num">8</span> -->
          </a>
          <input type="checkbox" id="switch-mode" hidden>
          <label for="switch-mode" class="switch-mode"></label>
          <a class="notification">
            <i class='bx bxs-bell'></i>
            <span class="num">8</span>
          </a>
          <a class="profile">
            <img >
          </a>
        </nav>

        <!-- NAVBAR -->




      </section>
    </div>
  </main>
</template>



<style scoped>

@media (min-width: 600px) {

  .main {
    width: 50%;
    height: 50%;
  }
}


@media (min-width: 900px) {

  .main {
    width: 75%;
    height: 75%;
  }
}


@media (min-width: 1200px) {

  .main {
    width: 100%;
    height: 100%;
  }
}


</style>