import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueRouter from 'vue-router'
import VueResourse from 'vue-resource'
import store from './store'
import routes from './router.config.js'
import {Loading1,Loading2,Loading3} from './components/Loading'


// 

Vue.use(VueResourse);
Vue.use(VueRouter);

	const router=new VueRouter({
		routes,
    mode:'history'
	})


//配置发送请求 //axios的一些配置，比如发送请求显示loading，请求回来loading消失之类的
axios.interceptors.request.use(function (config) {  //配置发送请求的信息
  store.dispatch('showLoading')  
  return config;
}, function (error){
  return Promise.reject(error);
});

//配置请求回来的信息
axios.interceptors.response.use(function(config){
	store.dispatch('hideLoading')
},function(error){
	return Promise.reject(error)
})

// Vue.prototype.$http=axios;

Vue.use(Loading1)
Vue.use(Loading3)

new Vue({
  el: '#app',
  render: h => h(App),
  store,
  router
})
