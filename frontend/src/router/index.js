import { createRouter, createWebHistory } from "vue-router"
import Home from "../views/Home.vue"
import Contact from "../views/Contact.vue"
import Login from "../views/Login.vue"
import Register from "../views/Register.vue"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    }
  ],
})

export default router