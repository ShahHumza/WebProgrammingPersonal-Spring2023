import { reactive } from "vue";
import { useRouter } from "vue-router";

const session = reactive({
  user: null as User | null,
  workouts: [] as string[],
})

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
  workouts: string[]
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
      workouts: ["Biking up a mountain",],
    };
 
    
  } else if (user === "Tanner Festa") {
    session.user = {
      name: "Tanner Festa",
      friends: [Humza, Tom],
      status: false,
      workouts: ["Fighting a bear in the Adirondacks",],
    };
 
    
  } else if (user === "Thomas Coffey") {
    session.user = {
      name: "Thomas Coffey",
      friends: [Humza, Tanner],
      status: true,
      workouts: ["Drinking Coffee",],
    };


} else {
    console.error("Invalid user selected");
  }
}

export function useLogout() {
  const router = useRouter();

  return function() {
    console.log({router});
    session.user = null;

    router.push("/login");
  }
}

export function addWorkout(workoutName: string) {
  if (session.user !== null) {
    session.user.workouts.push(workoutName);
  }
}