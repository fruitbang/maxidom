import Vue from 'vue';
import App from './App.vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

Vue.use(BootstrapVue, {
    breakpoints: [`xs`, 'sm', 'md', 'lg', 'xl', 'xxl'],
});
Vue.use(IconsPlugin);

Vue.config.productionTip = false;

new Vue({
    render: (h) => h(App),
}).$mount('#app');
