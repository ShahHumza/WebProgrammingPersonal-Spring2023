<script setup lang="ts">
    import { computed, ref, onMounted } from 'vue';
    import { RouterLink } from 'vue-router';
    import LoginBadge from './LoginBadge.vue';

    const darkMode = ref(false);
    const sidebarOpen = ref(false);

    const toggleDarkMode = () => {
    darkMode.value = !darkMode.value;
    document.body.classList.toggle('dark', darkMode.value);
    };

    onMounted(() => {
    const modeToggle = ref<HTMLElement | null>(null);
    modeToggle.value = document.querySelector('.mode-toggle .switch');
    modeToggle.value?.addEventListener('click', toggleDarkMode);
    });

    

    const toggleSidebar = () => {
    sidebarOpen.value = !sidebarOpen.value;
    document.body.classList.toggle('sidebar-open', sidebarOpen.value);
    };

</script>



<template>
  <nav>
    
    <div class="logo-name">
      <div class="logo-image">
        <!--<img src="images/logo.png" alt="">-->
      </div>
      <span class="logo_name">CodingLab</span>
    </div>
    <div class="menu-items">
      <ul class="nav-links">
        <li>
          <RouterLink to="/dashboard">
            <i class="uil uil-estate"></i>
            <span class="link-name">Dashboard</span>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/about">
            <i class="uil uil-files-landscapes"></i>
            <span class="link-name">Content</span>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="#">
            <i class="uil uil-chart"></i>
            <span class="link-name">Analytics</span>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="#">
            <i class="uil uil-thumbs-up"></i>
            <span class="link-name">Like</span>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="#">
            <i class="uil uil-comments"></i>
            <span class="link-name">Comment</span>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="#">
            <i class="uil uil-share"></i>
            <span class="link-name">Share</span>
          </RouterLink>
        </li>
      </ul>

      <ul class="logout-mode">
        <li>
          <a href="#">
            <i class="uil uil-signout"></i>
            <span class="link-name">Logout</span>
          </a>
        </li>

        <li class="mode">
          <a href="#">
            <i class="uil uil-moon"></i>
            <span class="link-name">Dark Mode</span>
          </a>

          <div class="mode-toggle">
            <span class="switch" ref="modeToggle"></span>
          </div>
        </li>
      </ul>
    </div>
  </nav>

  
</template>




<style scoped>

</style>