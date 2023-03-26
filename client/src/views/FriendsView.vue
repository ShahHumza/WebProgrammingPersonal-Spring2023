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

    <ul class="friends">
      <li v-for="friend in session.user?.friends" :key="friend.name">
        
        <div class="box">
      <article class="media">
        <div class="media-left">
          <figure class="image is-64x64">
            <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
          </figure>
        </div>
        <div class="media-content">
          <div class="content">
            <p>
              <strong>{{ friend.name }}</strong> <!-- <small>@johnsmith</small> <small>31m</small> -->
              <br>
              <span v-if="friend.status" class="active">Active</span>
              <span v-else class="inactive">Inactive</span>
              
            </p>
          </div>
          <nav class="level is-mobile">
            <div class="level-left">
              <a class="level-item" aria-label="reply">
                <span class="icon is-small">
                  <i class="fas fa-reply" aria-hidden="true"></i>
                </span>
              </a>
              <a class="level-item" aria-label="retweet">
                <span class="icon is-small">
                  <i class="fas fa-retweet" aria-hidden="true"></i>
                </span>
              </a>
              <a class="level-item" aria-label="like">
                <span class="icon is-small">
                  <i class="fas fa-heart" aria-hidden="true"></i>
                </span>
              </a>
            </div>
          </nav>
        </div>
      </article>
    </div>




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