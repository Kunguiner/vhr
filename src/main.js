import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import {
    Form,
    FormItem,
    Input,
    InputNumber,
    Button
} from 'element-ui';

Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(InputNumber);
Vue.use(Button);
Vue.prototype.axios = axios;
Vue.config.productionTip = false

const vue = new Vue({
    router,
    store,
    render: h => h(App)
});
vue.$mount('#app');
window.vue = vue;
