import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import { Message } from 'element-ui';
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

// 配置 axios
axios.defaults.baseURL = 'http://localhost:8081';
axios.defaults.withCredentials=true;
// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    let status = response.status;
    if (status && status == 200) {
        Message({
            message: response.message,
            type: "success"
        })
    } else {
        Message({
            message: response.message,
            type: "warning"
        })
    }
    return response.data;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});


Vue.prototype.axios = axios;
Vue.config.productionTip = false;

const vue = new Vue({
    router,
    store,
    render: h => h(App)
});
vue.$mount('#app');
window.vue = vue;
