import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

const Fly = require('flyio/dist/npm/wx')
const fly = new Fly()
Vue.prototype.$http = fly // 将fly实例挂在vue原型上

const app = new Vue(App)
app.$mount()
