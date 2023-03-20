<script setup lang="ts">
  import { reactive } from "vue";
  import { useSession } from '@/model/session';

  const session = useSession();

  
</script>

<template>
  <div class="friends-box">
    <div class="title">
      <h2>Your friends:</h2>
    </div>
    <ul class = "friends">
        <br>
        <br>
        <br>
      <li v-for="friend in session.user?.friends" :key="friend.name">
        <span>{{ friend.name }}</span>
        <span v-if="friend.status" class="active">Active</span>
        <span v-else class="inactive">Inactive</span>
      </li>
    </ul>
  </div>
</template>
  
  <style scoped>


@media (min-width: 512px) {
  .friends-box {
    min-height: 100vh;
    display: flex;
    text-align: right;

    /* This alligns it */
    position: relative;
    width: calc(100% - 280px);
    left: 280px;
    transition: .3s ease;
  }
}


    .friends {
        margin-left: 1000px;
    }
  .friends-box {
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 5px;
  }
  
  .friends-box h2 {
    margin-top: 0;
  }
  
  .friends-box ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .friends-box li {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  
  .friends-box li img {
    margin-right: 10px;
    border-radius: 50%;
  }
  
  .friends-box li span {
    margin-right: 10px;
  }
  
  .friends-box .active {
    color: green;
  }
  
  .friends-box .inactive {
    color: red;
  }
  </style>