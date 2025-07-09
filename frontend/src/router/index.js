import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue';
import RegisterView from '../views/RegisterView.vue';
import MyTicketsView from '../views/MyTicketsView.vue';

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/login', name: 'Login', component: LoginView },
  { path: '/register', name: 'Register', component: RegisterView },
  { path: '/my-tickets', name: 'MyTickets', component: MyTicketsView }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
