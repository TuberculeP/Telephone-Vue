import { createRouter, createWebHistory } from 'vue-router'
import KeyboardView from '../views/KeyboardView.vue'
import HistoryView from "@/views/HistoryView";
import ContactView from "@/views/ContactView";
import AddContact from "@/components/AddContact";

const routes = [
  {
    path: '/',
    name: 'keyboard',
    component: KeyboardView
  },
  {
    path: '/history',
    name: 'history',
    component: HistoryView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/add',
    name: 'add',
    component: AddContact
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
