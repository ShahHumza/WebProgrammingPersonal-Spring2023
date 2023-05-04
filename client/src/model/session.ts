import { reactive } from "vue";
import { useRouter } from "vue-router";
import workoutData from "../data/workouts.json";

import * as myFetch from "./myFetch";


const session = reactive({
  user: null as User | null,
  isLoading: false,
  messages: [] as {
    msg: string,
    type: "success" | "danger" | "warning" | "info",
  }[],
  redirectUrl: null as string | null,
})

export const Humza: User = {
  name: "Humza Shah",
  email: "H@101",
  password: "123456",
  role: "admin",
  friends: [],
  status: true,
  workouts: [],
  pfp: "/assets/ProfilePictures/Patrick-PNG-File.png",
};

const Tanner: User = {
  name: "Tanner Festa",
  email: "john@doe.com",
  password: "123456",
  friends: [],
  status: false,
  workouts: [],
  pfp: "@/assets/ProfilePictures/Patrick-PNG-File.png",
};

const Tom: User = {
  name: "Thomas Coffey",
  friends: [],
  status: true,
  workouts: [],
  pfp: "@/assets/ProfilePictures/Patrick-PNG-File.png",
};

export interface User {
  id?: number;
  name: string;
  password?: string;
  email?: string;
  photo?: string;
  token?: string;
  role?: string;
  friends?: User[];
  status?: boolean;
  workouts: {
    date?: string;
    duration: number;
    name: string;
  }[];
  pfp: string;
  
}
export function api(url: string, data?: any, method?: string, headers?: any) {
  session.isLoading = true;
  console.log(session.user?.token)
  if(session.user?.token){
      headers = {
          "Authorization": `Bearer ${session.user.token}`,
          ...headers,
      }
  }

  return myFetch.api(url, data, method, headers)
      .catch(err => {
          console.error({err});
          session.messages.push({
              msg: err.message  ?? JSON.stringify(err),
              type: "danger",
          })
      })
      .finally(() => {
          session.isLoading = false;
      })
}

export function useSession() {
  return session;
}

export function useUser() {
  const username = session.user?.email ??"Unknown User";
  return username;
}

export async function login(user: string, password: string) {
  
  try {
    const router = useRouter();
    console.log("user" + user)
    // console.log(session.user)
    const response = await api("users/login", {
      "email": user,
      "password": "123456"
  });
    session.user = response.data.user;
    console.log(user)
    console.log(session)
    console.log(session.user)
    console.log("hi")
 

    // router.push(session.redirectUrl ?? "/");
    // session.redirectUrl = null;
  } catch (error) {
    console.error(error);
    console.log("Error in session.ts")
    // addMessage("User not found", "danger");
    return;
  }

}





export function addMessage(msg: string, type: "success" | "danger" | "warning" | "info") {
  console.log({msg, type});
  session.messages.push({
      msg,
      type,
  })
}



export function useLogout() {
  const router = useRouter();

  return function () {
    console.log({ router });
    session.user = null;

    router.push("/login");
  };
}

export function addWorkout(date: string, duration: number, name: string) {
  if (session.user !== null) {
    session.user.workouts.push({ date, duration, name });
  }
}

export function getWorkouts(): User["workouts"] {
  return session.user ? session.user.workouts : [];
}

export function isLoggedIn() {
  return session.user !== null;
}

