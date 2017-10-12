import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'


import {routes} from './routes/routes.js'
import {store} from './store/store.js'

Vue.use(VueResource);
Vue.use(VueRouter);



const router = new VueRouter({
  routes:routes

//mode:'history'
});

new Vue({
  el: '#app',
  router:router,
  store:store,
  render: h => h(App)
})
