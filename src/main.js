import Vue from 'vue';

import './styles/main.scss';

import App from './App.vue';

import money from 'v-money';


Vue.config.productionTip = false;

Vue.use(money, { precision: 4 });

new Vue({
  render: h => h(App),
}).$mount('#root');
