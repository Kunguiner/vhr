<template>
    <div class="login">
        <el-form >
            <el-form-item label="用户名">
                <el-input placeholder="请输入账号" v-model="loginForm.username"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input show-password placeholder="请输入密码" v-model="loginForm.password"></el-input>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data () {
            return {
                loginForm : {
                    username:'',
                    password:''
                }
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
        margin : 180px auto;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
    }
</style>