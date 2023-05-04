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
  <div class="color-box">
    <div class="auth-buttons" v-if="!session.user">
      <div class="dropdown is-hoverable">
        <div class="dropdown-trigger" style="margin-right: 150px;">
          <button class="button is-primary" aria-haspopup="true" aria-controls="dropdown-menu" style="outline: none;">
            <span class="icon">
              <i class="fas fa-user"></i>
            </span>
            <span>Login</span>
          </button>
        </div>
        <div class="dropdown-menu" id="dropdown-menu" role="menu">
          <div class="dropdown-content">
            <a href="#" class="dropdown-item" @click="login('H@101', '123456')">
              Humza Shah
            </a>
            <a href="#" class="dropdown-item" @click="login('john@doe.com','123456')">
              Tanner Festa
            </a>
            <a href="#" class="dropdown-item" @click="login('jane@doe.com','hi')">
              Tom Coffey
            </a>
          </div>
        </div>
        <a class="button is-info" style="margin-right: 150px;">
          <span class="icon">
            <i class="fas fa-user-plus"></i>
          </span>
          <strong>Sign up</strong>
        </a>
      </div>
    </div>
    <div v-else>
      <div class="navbar-item" style="outline: none;">
        Welcome, {{ session.user.name }}(<a @click="logout2()">logout</a>)
      </div>
    </div>
  </div>
</template>

<style scoped>
.color-box {
  background-color: transparent;

}

.auth-buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>