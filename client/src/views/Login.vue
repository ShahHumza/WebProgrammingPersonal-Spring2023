<script setup lang="ts">

</script>

<template>
    <div>
        <h1 class="title">
            Login
        </h1>
        <h2 class="subtitle">
            If you got here then you are not logged in. <br>
            To login just click the button on the top right corner.
        </h2>
    </div>
</template>


<style scoped>
    @media (min-width: 1024px) {
  .subtitle {
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