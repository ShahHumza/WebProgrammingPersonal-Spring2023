<script setup lang="ts">
import { onMounted, ref, watchEffect } from 'vue';
import { useSession, useUser, type User } from '@/model/session';
import { type Workout, deleteWorkout } from "@/model/workouts";
import { addWorkouts, getWorkouts, getAllUsers } from "@/model/workouts";
import AutoComplete from 'primevue/autocomplete';
// import { type User } from "@/model/session";

const session = useSession();
const newWorkout = ref({ date: '', duration: 0, name: '' });
const workouts = ref<Workout[]>([]);

const user = session.user;
const username = user?.name
// console.log(username)
const userId = useUser()

async function addToWorkouts(name: string, duration: number) {
  await addWorkouts(userId, name, duration);
  await getUserWorkouts()
}

async function removeWorkout(name: string, duration: number) {
  await deleteWorkout(userId, name, duration);
  await getUserWorkouts()
}

async function getUserWorkouts() {
  getWorkouts(userId).then((data) => {
    workouts.value = data.data;
    // console.log(data.data);
    // data.data.push({ name, duration });
  });
}
// async function searc() {
//   const usernames = await getAllUsers().then((data) => {
//     return data.data;
//   });
//   console.log(usernames)
// }

onMounted(async () => {
  getUserWorkouts(); ""
  
})


const usernames = ref([] as String[])
async function search(){
  usernames.value = await getAllUsers().then((data) => {
    return data.data;
  });
}

const suggestions = ref([]);
const items = ref([] as String[])
async function updateSuggestions() {
      const usernames = await getAllUsers().then((data) => data.data);
      items.value = usernames;
      console.log(items.value)
    }

    updateSuggestions();
   

const searchTerm = ref('');


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
        <!-- adding friend final
        <div class="field">
          <label class="label">AddFriend</label>
          <div class="control">
            <input type="text" id="search" placeholder="Type here...">
          </div>
        </div> -->
        <div class="field">
          <label class="label">Tag friend</label>
          <AutoComplete v-model="searchTerm" :suggestions="items" @complete="search" />
        </div>
        
        <div class="field">
          <div>
            <button type="button" class="button is-primary"
              @click="addToWorkouts(newWorkout.name, newWorkout.duration)">Add</button>
          </div>
          <!-- <div class="control">
        <button class="button is-link">Cancel</button>
      </div> -->
        </div>
      </form>
    </div>


    <h1 class="title">
      <ul>
        <li v-for="(workout, index) in workouts" :key="workout.id">
          <div class="notification is-primary">
            <button class="delete" @click="removeWorkout(workout.name, workout.duration)"></button>
            {{ workout.name }} - {{ workout.duration }} -{{ workout.date }}
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
    margin-top: 50px;
    /* z-index: 0; */



    /* This alligns it */
    position: relative;
    width: calc(100% - 280px);
    left: 100px;
    transition: .3s ease;



  }
}
</style>