import Vue from 'vue';
import App from './App';
import router from './router';
import './theme/index.less';
import iView from 'iview';
import './assets/css/index.scss';

Vue.use(iView);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
