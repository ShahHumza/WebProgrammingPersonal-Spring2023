import { reactive } from "vue";
import { useRouter } from "vue-router";
import workoutData from "../data/workouts.json";

const session = reactive({
  user: null as User | null,
  workouts: [] as string[],
});

const Humza: User = {
  name: "Humza Shah",
  role: "admin",
  friends: [],
  status: true,
  workouts: [],
};

const Tanner: User = {
  name: "Tanner Festa",
  friends: [],
  status: false,
  workouts: [],
};

const Tom: User = {
  name: "Thomas Coffey",
  friends: [],
  status: true,
  workouts: [],
};

interface User {
  id?: number;
  name: string;
  email?: string;
  photo?: string;
  token?: string;
  role?: string;
  friends: User[];
  status: boolean;
  workouts: {
    date: string;
    duration: number;
    name: string;
  }[];
}

export function useSession() {
  return session;
}

export function login(user: string) {
  if (user === "Humza Shah") {
    session.user = {
      name: "Humza Shah",
      role: "admin",
      friends: [Tanner, Tom],
      status: true,
      workouts: workoutData[user],
    };
  } else if (user === "Tanner Festa") {
    session.user = {
      name: "Tanner Festa",
      friends: [Humza, Tom],
      status: false,
      workouts: workoutData[user],
    };
  } else if (user === "Thomas Coffey") {
    session.user = {
      name: "Thomas Coffey",
      friends: [Humza, Tanner],
      status: true,
      workouts: workoutData[user],
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