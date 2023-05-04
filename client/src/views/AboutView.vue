<template>
  <div class="about">
    <h1></h1>
    <p class = "aboutPageText">At Hum Tracker, we're passionate about helping people achieve their fitness goals. 
      We believe that exercise is not only good for your physical health, but also your mental wellbeing, and we're committed to providing our customers with the tools and resources they need to lead healthy, active lives.</p>
  </div>
</template>

<style>
@media (min-width: 512px) {
  .about {
    min-height: 100vh;
    display: flex;
    text-align: left;
    color:rgb(0, 0, 0);

    /* This alligns it */
    position: relative;
    width: calc(100% - 280px);
    left: 280px;
    transition: .3s ease;
  }
  .aboutPageText{
    margin-top: 100px;
    margin-left: -200px;
    font-size: 20px;
    font-weight: bold;
  }
}
</style>
