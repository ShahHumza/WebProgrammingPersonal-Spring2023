import type { DataEnvelope, DataListEnvelope } from "./myFetch";
import  { api } from "./myFetch";



export interface Workout {
  name: string;
  date: string;
  duration: number;
}

export function getWorkouts(user: string): Promise<DataEnvelope<Workout[]>> {
  return api('workouts/' + user);
}

export function addWorkouts(workout: Workout): Promise<DataEnvelope<Workout>> {
  const requestConfig = {
    method: 'POST',
    body: JSON.stringify(workout),
  };
  return api('workouts')
}

export function deleteWorkout(index: number): Promise<DataEnvelope<Workout[]>> {
  return api('workouts/')
}