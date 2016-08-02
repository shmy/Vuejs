import Vue from 'vue';
import VueRouter from 'vue-router';
import VueRouterTransition from 'vue-router-transition';
Vue.use(VueRouter);
Vue.use(VueRouterTransition, VueRouter);
// 实例化路由
let router = new VueRouter({
    hashbang: true,
    saveScrollPosition: true,
    transitionOnLoad: true
});
// 配置路由表
router.map({
    '/': {
        component: require('./view/index.vue')
    },
    '/list': {
        component: require('./view/list.vue')
    }
});
export default router;
