<script setup lang="ts">

</script>

<template>
    <div class="t">
        <h1 class="titles">
            Login
        </h1>
        <h2 class="subtitle">
            If you got here then you are not logged in.
            To login just click the button on the top right corner.
        </h2>
    </div>
</template>

<style scoped>
 @media (min-width: 512px) {
  .t {
    min-height: 100vh;
    display: flex;
    text-align: right;
    margin-top: -700px;

    /* This alligns it */
    position: relative;
    width: calc(100% - 280px);
    left: 280px;
    transition: .3s ease;
  }
}

</style>