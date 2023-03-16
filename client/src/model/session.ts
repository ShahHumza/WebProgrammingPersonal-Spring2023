import { reactive } from "vue";
import { useRouter } from "vue-router";

const session = reactive({
  user: null as User | null,
})

const Humza: User = {
  name: "Humza Shah",
  role: "admin",
  friends: [],
  status: true,
};

const Tanner: User = {
  name: "Tanner Festa",
  friends: [],
  status: false,
};

const Tom: User = {
    name: "Thomas Coffey",
    friends: [],
    status: true,
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
    };
 
    
  } else if (user === "Tanner Festa") {
    session.user = {
      name: "Tanner Festa",
      friends: [Humza, Tom],
      status: false,
    };
 
    
  } else if (user === "Thomas Coffey") {
    session.user = {
      name: "Thomas Coffey",
      friends: [Humza, Tanner],
      status: true,
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