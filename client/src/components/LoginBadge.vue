<script setup lang="ts">
import { ref } from 'vue';
import { useSession, login, useLogout } from '@/model/session';


const session = useSession();
const logout = useLogout();

function logout2() {
  logout();
}


</script>

<template>
  <div>
    <div v-if="!session.user">
      <div class="dropdown is-hoverable">
        <div class="dropdown-trigger">
          <button class="button is-primary" aria-haspopup="true" aria-controls="dropdown-menu">
            <span class="icon">
              <i class="fas fa-user"></i>
            </span>
            <span>Login</span>
          </button>
        </div>
        <div class="dropdown-menu" id="dropdown-menu" role="menu">
          <div class="dropdown-content">
            <a href="#" class="dropdown-item" @click="login('Humza Shah')">
              Humza Shah
            </a>
            <a href="#" class="dropdown-item" @click="login('Tanner Festa')">
              Tanner Festa
            </a>
            <a href="#" class="dropdown-item" @click="login('Thomas Coffey')">
              Tom Coffey
            </a>
          </div>
        </div>
      </div>
      <a class="button is-info">
        <span class="icon">
          <i class="fas fa-user-plus"></i>
        </span>
        <strong>Sign up</strong>
      </a>
    </div>
    <div v-else>
      <div class="navbar-item">
        Welcome, {{ session.user.name }} (<a @click="logout2()">logout</a>)
      </div>
    </div>
  </div>
</template>



 
<style scoped>

</style>