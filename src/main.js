import Vue from 'vue';

import VueRouter from 'vue-router';
import App from './App.vue';
Vue.use(VueRouter);

import Home from './page/Home.vue'
import Detalhe from './page/Detalhe.vue'


const router = new VueRouter({
  mode: 'history',
  routes:[
    {
      path:'/', 
      component: Home
    },
    {
      path:'/home', 
      component: Home
    },
    {
      path:'/detalhe', 
      component: Detalhe
    }
  ]
})

Vue.config.productionTip = false



new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
