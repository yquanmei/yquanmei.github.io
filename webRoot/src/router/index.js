import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  }
];

const router = new Router({
  mode: 'history',
  routes: routes
});

router.afterEach((to, from, next) => {
  document.title = to.name;
  next();
});

export default router;
