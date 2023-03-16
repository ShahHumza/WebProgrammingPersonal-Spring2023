import { reactive } from "vue";
import { useRouter } from "vue-router";

const session = reactive({
    user: null as User | null,
})

interface User {
    id?: number;
    name: string;
    email?: string;
    photo?: string;
    token?: string;
    role?: string
}

export function useSession() {
    return session;
}

export function login(user: string) {
  if (user === "Humza Shah") {
      session.user = {
          name: "Humza Shah",
          role: "admin",
      };
  } else if (user === "Tanner Festa") {
      session.user = {
          name: "Tanner Festa",
      };
  } else {
      console.error("Invalid user selected");
  }
}

export function useLogout() {
    const router = useRouter();
    
    return function(){
        console.log({router});
        session.user = null;

        router.push("/login");
    }
}