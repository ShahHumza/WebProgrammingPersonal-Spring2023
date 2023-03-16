
import { createRouter, createWebHistory, type NavigationGuardNext, type RouteLocationNormalized } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductsVue from '@/views/Products.vue'
import LoginVue from '@/views/Login.vue'
import { useSession } from '@/model/session'
import Dashboard2View from '@/views/Dashboard2View.vue';
import AdminView from '@/views/AdminView.vue';
import FriendsView from '@/views/FriendsView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/products', name: 'products', component: ProductsVue, beforeEnter: secureRoute },
    { path: '/login', name: 'login', component: LoginVue },
    { path: '/dashboard', name: 'dashboard', component: Dashboard2View },
    { path: '/admin', name: 'admin', component: AdminView, beforeEnter: secureAdmin},
    { path: '/friends', name: 'friends', component: FriendsView },



    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})



export default router

function secureAdmin (to : RouteLocationNormalized, from : RouteLocationNormalized, next : NavigationGuardNext ) {
  const session = useSession();
  if (session.user?.role == "admin") {
      next()
  } else { 
      next('/login')
  }
}

function secureRoute (to : RouteLocationNormalized, from : RouteLocationNormalized, next : NavigationGuardNext ) {
    const session = useSession();
    if (session.user) {
        next()
    } else { 
        next('/login')
    }
}
