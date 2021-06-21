import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './views/Home.vue';
const Foo = { template: '<div>Foo</div>' };
const Login = { template: '<div>Login</div>' };

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/home', name: 'home', component: Home },
    { path: '/foo', name: 'foo', component: Foo },
    { path: '/login', name: 'login', component: Login },
    { path: '*', redirect: '/login' }
  ]
});

Vue.use(VueRouter);

const app = new Vue({
  // router,
  el: '#app',
  template: '<Home/>'
});
