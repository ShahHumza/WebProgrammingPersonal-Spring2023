<script setup lang="ts">
</script>
<template>
  <div class="b">
    <div class="box" style="margin-left: 20px;">
      <h2>Today</h2>
      <div class="data">
        <p>0 ft</p>
        <p>Distance</p>
      </div>
      <div class="data">
        <p>0:0</p>
        <p>Duration</p>
      </div>
      <div class="data">
        <p>NaN mph</p>
        <p>Avg Pace</p>
      </div>
      <div class="data">
        <p>0</p>
        <p>Calories</p>
      </div>
    </div>

    <div class="box" style="margin-left: 20px;">
      <h2>This week</h2>
      <div class="data">
        <p>0 ft</p>
        <p>Distance</p>
      </div>
      <div class="data">
        <p>0:0</p>
        <p>Duration</p>
      </div>
      <div class="data">
        <p>NaN mph</p>
        <p>Avg Pace</p>
      </div>
      <div class="data">
        <p>0</p>
        <p>Calories</p>
      </div>
    </div>

    <div class="box" style="margin-left: 20px;">
      <h2>All time</h2>
      <div class="data">
        <p>3.8 mi</p>
        <p>Distance</p>
      </div>
      <div class="data">
        <p>NaN</p>
        <p>Duration</p>
      </div>
      <div class="data">
        <p>NaN mph</p>
        <p>Avg Pace</p>
      </div>
      <div class="data">
        <p>1127.5</p>
        <p>Calories</p>
      </div>
    </div>
  </div>
</template>

<style>
@media (min-width: 512px) {
  .b {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    /* This alligns it */
    position: relative;
    width: calc(100% - 280px);
    left: 280px;
    transition: .3s ease;
  }
}


.box {
  width: 300px;
  background-color: #f2f2f2;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
  margin-bottom: 20px;
}

.box h2 {
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: bold;
}

.data {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.data p:first-child {
  font-size: 32px;
  font-weight: bold;
}

.data p:last-child {
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.data p:last-child::after {
  content: "";
  display: block;
  width: 100%;
  height: 2px;
  background-color: #333;
  margin-top: 5px;
}
</style>