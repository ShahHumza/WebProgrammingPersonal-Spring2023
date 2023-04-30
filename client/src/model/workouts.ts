
import { ref } from "vue";
import type { DataEnvelope, DataListEnvelope } from "./myFetch";
import  { api } from "./myFetch";


export interface Workout {
  id: number;
  name: string;
  duration: number;
}

export function getWorkouts(name: string): Promise<DataListEnvelope<Workout>>{
  return api('workouts/' + name);
}

//name perameter is the workout name
export function addWorkouts(user: string, name: string, duration: number){
  const newWorkout = { username: user, name: name, duration: duration }

  // console.log(newWorkout);
  // workouts.value.push(newWorkout)

  return api('workouts', newWorkout)
}


export function deleteWorkout(user: string, name: string, duration: number){
  
  return api('workouts/deleteWorkout', {username: user, name: name, duration: duration})
}