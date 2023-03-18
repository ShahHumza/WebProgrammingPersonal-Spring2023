<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useSession, addWorkout } from '@/model/session';

export default defineComponent({
  setup() {
    const session = useSession();
    const newWorkoutName = ref('');

    const addWorkoutHandler = () => {
      addWorkout(newWorkoutName.value);
      newWorkoutName.value = '';
    };

    return {
      user: session.user,
      newWorkoutName,
      addWorkout: addWorkoutHandler,
    };
  },
});
</script>

<template>
  <main>
    <h1 class="title">
      <div>
      <label>Workout Name: </label>
      <input type="text" v-model="newWorkoutName">
      <button @click="addWorkout">Add Workout</button>
    </div>
<br>
    <ul>
      <li v-for="workout in user?.workouts" :key="workout">{{ workout }}</li>
    </ul>
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