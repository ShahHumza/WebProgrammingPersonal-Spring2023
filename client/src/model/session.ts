import { reactive } from "vue";
import { useRouter } from "vue-router";
import workoutData from "../data/workouts.json";

const session = reactive({
  user: null as User | null,
  workouts: [] as string[],
});

export const Humza: User = {
  name: "Humza Shah",
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
  email?: string;
  photo?: string;
  token?: string;
  role?: string;
  friends: User[];
  status: boolean;
  workouts: {
    date?: string;
    duration: number;
    name: string;
  }[];
  pfp: string;
}

export function useSession() {
  while (session == null)
  {
    console.log("waiting for session");
  }
  return session;
}

export function useUser() {
  const username = session.user?.name ?? "Unknown User";
  return username;
}

export function login(user: string) {
  if (user === "Humza Shah") {
    session.user = {
      name: "Humza Shah",
      role: "admin",
      friends: [Tanner, Tom],
      status: true,
      workouts: workoutData[user],
      pfp: "C:\Users\humza\OneDrive\Desktop\Web ClassPersonal\WebProgrammingPersonal-Spring2023\client\src\assets\ProfilePictures\Patrick-PNG-File.png",
    };
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

