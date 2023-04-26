<script setup lang="ts">
  import { onMounted, ref } from 'vue';
  import { useSession, addWorkout, deleteWorkout } from '@/model/session';
  import type { Workout } from "@/model/workouts";
  import { addWorkouts, getWorkouts } from "@/model/workouts";

  const session = useSession();
  const newWorkout = ref({ date: '', duration: 0, name: '' });
  const workouts = ref<Workout[]>([]);

//   const addWorkoutHandler = () => {
//   addWorkout(newWorkout.value.date, newWorkout.value.duration, newWorkout.value.name);
//   newWorkout.value = { name: '', duration: 0, date: '' };
//   getUserWorkouts();
// };

// const deleteWorkoutHandler = async (index: number) => {
//   await deleteWorkout(index);
//   getUserWorkouts();
// }

  const user = session.user;
  const username = user?.name

  async function addToWorkouts(name: string, duration: number) {
  await addWorkouts(name, duration);
  const newWorkout: Workout = { name, duration };
  workouts.value.push(newWorkout);
  console.log(newWorkout);
}

  async function getUserWorkouts() {
  getWorkouts(username || '').then((data) => {
    workouts.value = data.data;
    console.log(data.data);
  });
}

  onMounted(async () => {
    getUserWorkouts()
  })
</script>

<template>
  <main class="work">
    <h1 class="title">
      <div>
        <label>Workout Name:</label>
        <input type="text" v-model="newWorkout.name">
      </div>
      <div>
        <label>Workout Duration(minutes):</label>
        <input type="text" v-model="newWorkout.duration">
      </div>
      <!-- <div>
            <label>Workout Date:</label>
            <input type="text" v-model="newWorkout.date">
          </div> -->
          <button @click="addToWorkouts(newWorkout.name, newWorkout.duration)">Add Workout</button>
      <br>
      <ul>
        <li v-for="(workout, index) in workouts" :key="workout.id">
          <div class="notification is-primary">
            <button class="delete" @click=""></button>
            {{ workout.name }} - {{ workout.duration }}
          </div>
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

@media (min-width: 512px) {

  .work,
  .t,
  .d,
  .friends-box,
  .admin {
    min-height: 100vh;
    display: flex;
    text-align: right;
    margin-top: -350px;

    /* This alligns it */
    position: relative;
    width: calc(100% - 280px);
    left: 280px;
    transition: .3s ease;
  }
}
</style>