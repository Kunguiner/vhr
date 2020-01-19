<template>
    <div>

        <button @click="sendRequest">发送请求</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {

                newBook: {
                    author: '',
                    name: ''
                }
            }
        },
        methods: {
            sendRequest() {
                let url = "/vhr /vue"
                this.axios.get(url)
                    .then(function (data) {
                        alert('请求成功');
                        console.log(data);
                    }).catch(function (error) {
                        alert("请求失败")
                })
            }
        },
        mounted() {
            window.vfor = this.$data;
        }
    }
</script>

<style>
</style>
