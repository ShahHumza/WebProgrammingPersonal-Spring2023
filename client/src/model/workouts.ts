import type { DataEnvelope, DataListEnvelope } from "./myFetch";
import  { api } from "./myFetch";



  export interface Workout {
    name: string;
    date: string;
    duration: number;
}

export function getWorkouts(user: string): Promise<DataEnvelope<Workout[]>> {
  return api('workouts/' + user)
}

export function addWorkouts(workout: Workout): Promise<DataEnvelope<Workout>> {
    return api('workouts')
}
  export interface User {
    [key: string]: Workout[];
  }
  