import { reactive } from "vue";
import { useRouter } from "vue-router";

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

export function useSession() {
  return session;
}

export function api(url: string, data?: any, method?: string, headers?: any) {
  session.isLoading = true;
  //for some reason my session.user?.token is undefined
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

export function login(user: string, password: string) {
  const router = useRouter();
  console.log(useRouter());
  
  return async function() {
      const response = await api("users/login", {
          "email": user,
          "password": password
      });
      console.log({response});
      session.user = response.data.user;
      if(!session.user) {
          addMessage("User not found", "danger");
          return;
      }
      session.user.token = response.data.token;
      console.log(session.user.token)

      router.push(session.redirectUrl ?? "/about");
      session.redirectUrl = null;
  }
}



export function useUser() {
  const username = session.user?.email ??"Unknown User";
  return username;
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



