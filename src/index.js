import Vue from 'vue'
import VueRouter from 'vue-router'
import VuexResource from 'vue-resource'
import routes from './routes'
import App from './App.vue'

Vue.use(VueRouter)
Vue.use(VuexResource)

const router = new VueRouter({mode: 'hash',routes:routes})

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
})