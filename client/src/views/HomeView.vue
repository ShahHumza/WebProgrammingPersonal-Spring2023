<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useSession, addWorkout } from '@/model/session';


export default defineComponent({
  setup() {
    const session = useSession();
    const newWorkout = ref({ date: '', duration: 0, name: '' });

    const addWorkoutHandler = () => {
      addWorkout(newWorkout.value.date, newWorkout.value.duration, newWorkout.value.name);
      newWorkout.value = { name: '', duration: 0, date: '' };
    };

    return {
      user: session.user,
      newWorkout,
      addWorkout: addWorkoutHandler,
    };
  },
});


</script>

<template>
  <main>
    <h1 class="title">
      <div>
        <label>Workout Title:</label>
        <input type="text" v-model="newWorkout.name">
      </div>
      <div>
        <label>Workout Duration:</label>
        <input type="text" v-model="newWorkout.duration">
      </div>
      <div>
        <label>Workout Date:</label>
        <input type="text" v-model="newWorkout.date">
      </div>
      <button @click="addWorkout">Add Workout</button>
      <br>
      <ul>
        <li v-for="(workout, index) in user?.workouts" :key="index">
          {{ workout.name }} - {{ workout.duration }} - {{ workout.date }}
        </li>
      </ul>
    </h1>
  </main>
</template>


<style>
.title {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title>div {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
}

.title>div>label {
  margin-right: 1rem;
}

.title button {
  margin-top: 1rem;
}

.title ul {
  margin-top: 1rem;
  list-style: none;
  padding-left: 0;
}

.title li {
  margin-bottom: 0.5rem;
}

@media (min-width: 1024px) {
  .title {
    min-height: 100vh;
    display: flex;
    text-align: right;
    position: relative;
    width: calc(100% - 280px);
    transition: .3s ease;
  }
}
</style>