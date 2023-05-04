<script setup lang="ts">
  import { onMounted, ref } from 'vue';
  import { useSession, useUser} from '@/model/session';
  import type { Workout } from "@/model/workouts";
  import { addWorkouts, getWorkouts } from "@/model/workouts";

  const session = useSession();
  const newWorkout = ref({ date: '', duration: 0, name: '' });
  const workouts = ref<Workout[]>([]);

  const user = session.user;
  const username = user?.name
  console.log(username)
  const userId = useUser()

  async function addToWorkouts(name: string, duration: number) {
  await addWorkouts(userId, name, duration);
  await getUserWorkouts()
}

  // async function removeWorkout(name: string, duration: number) {
  //   await deleteWorkout(userId, name, duration);
  //   await getUserWorkouts()
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

    <div class="box">
  <h1 class="title is-4">Add to Workout Log</h1>
  <hr>
  <form>
    <div class="field">
      <label class="label">Exercise</label>
      <div class="control">
        <input class="input" type="text" placeholder="e.g. Bench Press" v-model="newWorkout.name">
      </div>
    </div>
    <!-- <div class="field">
      <label class="label">Weight</label>
      <div class="control">
        <input class="input" type="text" placeholder="e.g. 135 lbs">
      </div>
    </div> -->
    <div class="field">
      <label class="label">Duration</label>
      <div class="control">
        <input class="input" type="text" placeholder="e.g. 10" v-model="newWorkout.duration">
      </div>
    </div>
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
    <div class="field">
      <div>
        <button type="button" class="button is-primary" @click="addToWorkouts(newWorkout.name, newWorkout.duration)">Add</button>
      </div>
      <!-- <div class="control">
        <button class="button is-link">Cancel</button>
      </div> -->
    </div>
  </form>
</div>


    <h1 class="title">
      <!-- <div>
        <label>Workout Name:</label>
        <input type="text" v-model="newWorkout.name">
      </div>
      <div>
        <label>Workout Duration(minutes):</label>
        <input type="text" v-model="newWorkout.duration">
      </div>
      <div>
            <label>Workout Date:</label>
            <input type="text" v-model="newWorkout.date">
          </div> 
          <button @click="addToWorkouts(newWorkout.name, newWorkout.duration)">Add Workout</button>
      <br>-->
      <ul>
        <li v-for="(workout, index) in workouts" :key="workout.id">
          <div class="notification is-primary">
            <button class="delete" @click=" "></button>
            {{ workout.name }} - {{ workout.duration }}
          </div>
        </li>
      </ul>
      
    </h1>
  </main>
</template>


<style>


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