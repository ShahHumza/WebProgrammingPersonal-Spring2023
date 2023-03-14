<script setup lang="ts">

</script>

<template>
  <main>
    <h1 class="title">
        This is our home page
        <LoginBadge />
    </h1>
  </main>
</template>

<style>
@media (min-width: 1024px) {
  .title {
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
