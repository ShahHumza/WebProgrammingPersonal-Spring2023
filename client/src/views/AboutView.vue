<template>
  <div class="about">
    <h1>This is an about pagesssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
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
