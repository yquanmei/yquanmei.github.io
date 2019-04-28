import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '@/components/HomePage';

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  }
];

const router = new Router({
  mode: 'history',
  routes: routes
});

router.beforeEach((to, from, next) => {
  document.title = to.name;
  next();
});

export default router;
