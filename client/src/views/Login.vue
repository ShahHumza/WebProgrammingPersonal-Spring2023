<script setup lang="ts">

</script>

<template>
    <div>
        <h1 class="title">
            Login
        </h1>
        <h2 class="subtitle">
            If you got here then you are not logged in.
            To login just click the button on the top right corner.
        </h2>
    </div>
</template>


<style scoped>
  @media (min-width: 1024px) {
    .subtitle {
      text-align: right;
      position: absolute;
      top: 80px;
      right: 0;
      left: 0px;
      width: calc(100% - 280px);
      transition: .3s ease;
    }
  }
</style>