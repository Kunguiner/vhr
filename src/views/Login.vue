<template>
    <div class="login">
        <el-form>
            <el-form-item label="用户名">
                <el-input placeholder="请输入账号" v-model="loginForm.username"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input show-password placeholder="请输入密码" v-model="loginForm.password"></el-input>
            </el-form-item>

            <el-button @click="doLogin">登录</el-button>
            <el-button @click="other">other</el-button>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                loginForm: {
                    username: '',
                    password: ''
                }
            }
        },

        methods: {
            doLogin() {
                console.log('login form', this.loginForm);
                this.axios.post('/login', this.loginForm)
                    .then(response => {
                        // TODO 在响应拦截器中进行了处理，这里只能看见返回的数据而看不到响应信息和状态
                        // TODO 判断是否登录成功只需要判断响应数据是否为空即可
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            },
            other() {
                this.axios.get('/other')
                    .then(function (response) {
                        console.log(response.data);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
        }
    }
</script>

<style scoped>
    div.login {
        width: 350px;
        padding: 20px;
        border-radius: 15px;
        height: 219px;
        margin: 180px auto;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
    }
</style>