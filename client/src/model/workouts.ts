import type { DataEnvelope, DataListEnvelope } from "./myFetch";
import  { api } from "./myFetch";



export interface Workout {
  name: string;
  duration: number;
}

export function getWorkouts(name: string): Promise<DataEnvelope<Workout[]>> {
  return api('workouts/' + name);
}

export function addWorkouts(name: string, duration: number): Promise<DataEnvelope<Workout>> {
  return api('workouts', 'POST', { name, duration });
}


export function deleteWorkout(index: number): Promise<DataEnvelope<Workout[]>> {
  return api(`workouts/${index}`);
}