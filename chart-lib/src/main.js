import Vue from 'vue'
import App from './App.vue'
import ChartPlugin from './plugins/ChartPlugins.js'

Vue.config.productionTip = false

// install() 속성함수 실행 prototype
Vue.use(ChartPlugin);

new Vue({
  render: h => h(App),
}).$mount('#app')
