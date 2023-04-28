
import { ref } from "vue";
import type { DataEnvelope, DataListEnvelope } from "./myFetch";
import  { api } from "./myFetch";
import type { User } from "./session";


const workouts = ref([] as User["workouts"])

export interface Workout {
  name: string;
  duration: number;
}

export function getWorkouts(name: string): Promise<DataEnvelope<Workout[]>> {
  return api('workouts/' + name);
}

export function addWorkouts(user: string, name: string, duration: number){
  const newWorkout = { username: user, name: name, duration: duration }

  // console.log(newWorkout);
  // workouts.value.push(newWorkout)

  return api('workouts', newWorkout)
}


export function deleteWorkout(index: number): Promise<DataEnvelope<Workout[]>> {
  return api(`workouts/${index}`);
}