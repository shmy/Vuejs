import Vue from 'vue';
import VueResource from 'vue-resource';
import router from './router.js';
import App from './App.vue';
Vue.use(VueResource);
// 注册根组件并启动路由
router.start(Vue.extend(App), 'app');
