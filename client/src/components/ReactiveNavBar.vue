<script setup lang="ts">
  import { computed, ref } from 'vue';
  import { RouterLink } from 'vue-router';
  import LoginBadge from './LoginBadge.vue';

  const isClosed = ref(false);
  const isDarkModeOn = ref(false);

  const sidebarClass = computed(() => {
    return isClosed.value ? 'close' : '';
  });

  function toggleSidebar() {
    isClosed.value = !isClosed.value;
  }

  function toggleDarkModeOn() {
    isDarkModeOn.value = !isDarkModeOn.value;
    if (isDarkModeOn.value) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }

</script>

<template>
  
  
    <nav class="sidebar" :class="{'close': isClosed, 'dark-mode': isDarkModeOn}">
    <header>
      <div class="image-text">
        <span class="image">
          <!--<img src="logo.png" alt="">-->
        </span>
        <div class="text logo-text">
          <span class="name">Humza Shah</span>
          <span class="profession">WorkOut Vue</span>
        </div>
      </div>

      <!-- <i class='bx bx-chevron-right toggle' @click="toggleSidebar"></i> -->
    </header>

    <div class="menu-bar">
      <div class="menu">
        <li class="search-box">
          <i class='bx bx-search icon'></i>
          <input type="text" placeholder="Search...">
        </li>

        
        <ul class="menu-links">
          <li class="nav-link">
            <RouterLink to="/dashboard" class="navbar-item">
              <i class='bx bx-home-alt icon' ></i>
              Home
            </RouterLink>
          </li>

          <li class="nav-link">
            <RouterLink to="/about" class="navbar-item">
              <i class='bx bx-bar-chart-alt-2 icon' ></i>
              About
            </RouterLink>
          </li>

          <li class="nav-link">
            <RouterLink to="/notifications" class="navbar-item">
              <i class='bx bx-bell icon'></i>
              Notifications
            </RouterLink>
          </li>

          <li class="nav-link">
            <RouterLink to="/products" class="navbar-item">
              <i class='bx bx-pie-chart-alt icon' ></i>
              Products
            </RouterLink>
          </li>

          <li class="nav-link">
            <RouterLink to="/likes" class="navbar-item">
              <i class='bx bx-heart icon' ></i>
              Likes
            </RouterLink>
          </li>

          <li class="nav-link">
            <RouterLink to="/workouts" class="navbar-item">
              <i class='bx bx-wallet icon' ></i>
              Workouts
            </RouterLink>
          </li>
          

        </ul>
      </div>

      <div class="bottom-content">
        <li class="">
          <RouterLink to="/logout" class="navbar-item">
            <i class='bx bx-log-out icon' ></i>
            Logout
          </RouterLink>
        </li>

        <li class="mode">
          <div class="sun-moon">
            <i class='bx bx-moon icon moon'></i>
            <i class='bx bx-sun icon sun'></i>
          </div>
          <span class="mode-text text">Dark mode</span>

          <div class="toggle-switch" @click="toggleDarkModeOn">
            <span class="switch"></span>
          </div>
        </li>

      </div>
    </div>
  </nav>
</template>


<style scoped>
   body.dark {
    background-color: #282c34;
    
    color: #fff;
  }
  

</style>