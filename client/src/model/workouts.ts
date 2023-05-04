import { ref } from "vue";
import type { DataEnvelope, DataListEnvelope } from "./myFetch";
import  { api } from "./myFetch";


export interface Workout {
  date: string;
  id?: number;
  duration: number;
  name: string;
}

export function getWorkouts(name: string): Promise<DataListEnvelope<Workout>>{
  return api('users/getWorkouts/'+ name);
}

//name perameter is the workout name
export function addWorkouts(user: string, name: string, duration: number){
  const newWorkout = { date: "2022-02-02", name: name, duration: duration }

  console.log(user);
  // workouts.value.push(newWorkout)

  return api('users/addWorkout/' + user, newWorkout)
}


export function deleteWorkout(user: string, name: string, duration: number){
  
  return api('users/deleteWorkout/' + user, {user: name, name: name})
}

export function countWorkout(user: string){
  
  return api('users/totalWorkouts/' + user)
}

