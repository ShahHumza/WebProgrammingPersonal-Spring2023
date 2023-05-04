<script setup lang="ts">

</script>


<template>
  <div class="fitness">
    <div class="work">
      <div class="box">
        <h1 class="title is-4">Add to Weight Log</h1>
        <hr>
        <form>
          <!-- <div class="field">
        <label class="label">Exercise</label>
        <div class="control">
          <input class="input" type="text" placeholder="e.g. Bench Press">
        </div>
      </div> -->
          <div class="field">
            <label class="label">Weight</label>
            <div class="control">
              <input class="input" type="text" placeholder="e.g. 135 lbs">
            </div>
          </div>
          <!-- <div class="field">
        <label class="label">Reps</label>
        <div class="control">
          <input class="input" type="text" placeholder="e.g. 10">
        </div>
      </div> -->
          <div class="field">
            <label class="label">Date</label>
            <div class="control">
              <input class="input" type="date">
            </div>
          </div>
          <div class="field">
            <label class="label">Notes</label>
            <div class="control">
              <textarea class="textarea" placeholder="e.g. Felt great today"></textarea>
            </div>
          </div>
          <div class="field is-grouped">
            <div class="control">
              <button class="button is-primary">Add</button>
            </div>
            <div class="control">
              <button class="button is-link">Cancel</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>


<style scoped></style>