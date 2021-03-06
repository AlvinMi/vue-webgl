import Vue from 'vue'
import App from './App.vue'
import store from '../store'

// 需要安装 three 的包， yarn add three -D
import 'imports-loader?THREE=three!three/examples/js/controls/OrbitControls.js';
import 'imports-loader?THREE=three!three/examples/js/controls/TransformControls.js';
import 'imports-loader?THREE=three!three/examples/js/loaders/GLTFLoader.js';

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
