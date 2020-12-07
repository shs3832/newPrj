import Vue from "vue";
import VueRouter from "vue-router";
import Main from '../views/main.vue';
import portfolio from '../views/portfolio.vue';
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/main/'
  },
  {
    path: '/main/',
    name:'main',
    component: Main
  },
  {
    path: '/works/',
    name:'works',
    component: portfolio
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
