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
  password: "Hum123",
  role: "admin",
  friends: [],
  status: true,
  workouts: [],
  pfp: "/assets/ProfilePictures/Patrick-PNG-File.png",
};

const Tanner: User = {
  name: "Tanner Festa",
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
  const username = session.user?.name ?? "Unknown User";
  return username;
}

export function login(user: string, password: string) {

  if (user === "Humza Shah") {
    session.user = {
      name: "Humza Shah",
      email: "Hum@101",
      password: "Hum123",
      role: "admin",
      friends: [Tanner, Tom],
      status: true,
      workouts: workoutData[user],
      pfp: "C:\Users\humza\OneDrive\Desktop\Web ClassPersonal\WebProgrammingPersonal-Spring2023\client\src\assets\ProfilePictures\Patrick-PNG-File.png",
    }

  } else if (user === "Tanner Festa") {
    session.user = {
      name: "Tanner Festa",
      friends: [Humza, Tom],
      status: false,
      workouts: workoutData[user],
      pfp: "@/assets/ProfilePictures/Patrick-PNG-File.png",
    };
  } else if (user === "Thomas Coffey") {
    session.user = {
      name: "Thomas Coffey",
      friends: [Humza, Tanner],
      status: true,
      workouts: workoutData[user],
      pfp: "@/assets/ProfilePictures/Patrick-PNG-File.png",
    };
  } else {
    console.error("Invalid user selected");
  }

  const router = useRouter();
  console.log()
  return async function () {
    const response = await api("users/login", {
      "email": session.user?.email,
      "password": password
    });
    
    session.user = response.data.user;
    if (!session.user) {
      // addMessage("User not found", "danger");
      return;
    }
    session.user.token = response.data.token;

    router.push(session.redirectUrl ?? "/");
    session.redirectUrl = null;
  }

}

// export function addMessage(msg: string, type: "success" | "danger" | "warning" | "info") {
//   console.log({msg, type});
//   session.messages.push({
//       msg,
//       type,
//   })
// }



export function addMessage(msg: string, type: "success" | "danger" | "warning" | "info") {
  console.log({msg, type});
  session.messages.push({
      msg,
      type,
  })
}

export function login1(user: string) {


  if (user === "Humza Shah") {
    session.user = {
      name: "Humza Shah",
      password: "Hum123",
      role: "admin",
      friends: [Tanner, Tom],
      status: true,
      workouts: workoutData[user],
      pfp: "C:\Users\humza\OneDrive\Desktop\Web ClassPersonal\WebProgrammingPersonal-Spring2023\client\src\assets\ProfilePictures\Patrick-PNG-File.png",
    }

  } else if (user === "Tanner Festa") {
    session.user = {
      name: "Tanner Festa",
      friends: [Humza, Tom],
      status: false,
      workouts: workoutData[user],
      pfp: "@/assets/ProfilePictures/Patrick-PNG-File.png",
    };
  } else if (user === "Thomas Coffey") {
    session.user = {
      name: "Thomas Coffey",
      friends: [Humza, Tanner],
      status: true,
      workouts: workoutData[user],
      pfp: "@/assets/ProfilePictures/Patrick-PNG-File.png",
    };
  } else {
    console.error("Invalid user selected");
  }
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

