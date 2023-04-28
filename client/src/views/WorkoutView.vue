<script setup lang="ts">
  import { onMounted, ref } from 'vue';
  import { useSession, addWorkout, deleteWorkout, useUser} from '@/model/session';
  import type { Workout } from "@/model/workouts";
  import { addWorkouts, getWorkouts } from "@/model/workouts";

  const session = useSession();
  const newWorkout = ref({ date: '', duration: 0, name: '' });
  const workouts = ref<Workout[]>([]);

  const user = session.user;
  const username = user?.name
  const userId = useUser()

  async function addToWorkouts(user: string, name: string, duration: number) {
  await addWorkouts(userId,name, duration);
  // getUserWorkouts(name, duration)
  getUserWorkouts()
}
// Figure out how to get User, replace 'Humza Shah' with user variable and then ur good
//should be in session.ts


  // async function deleteFromWorkouts(index: number) {
  //   await deleteWorkout(index);
  //   getUserWorkouts();
  // }

  async function getUserWorkouts() {
    getWorkouts(username || '').then((data) => {
      workouts.value = data.data;
      // console.log(data.data);
      // data.data.push({ name, duration });
    });
  }

  onMounted(async () => {
    getUserWorkouts();""
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
          <button @click="addToWorkouts(userId, newWorkout.name, newWorkout.duration)">Add Workout</button>
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