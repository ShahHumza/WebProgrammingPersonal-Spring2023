<script setup lang="ts">



</script>


<template>
   <div class="admin">
    <h1>
      Welcome to the Admin Page
    </h1>
  </div>
</template>



<style scoped>


@media (min-width: 1024px) {
  .admin {
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


</style>