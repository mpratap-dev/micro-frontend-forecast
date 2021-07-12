import Vue from 'vue';
import VueRouter from 'vue-router';
import About from '../views/About';
import Welcome from '../views/Welcome';

Vue.use(VueRouter);

const routes = [
  {
    path: '/forecasting',
    name: 'Welcome',
    component: Welcome
  },
  {
    path: '/forecasting/about',
    name: 'About',
    component: About
  },
];

const router = new VueRouter({
  /* eslint-disable */
  mode: 'history',
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 100, y: 0 };
  }
});

export default router;
