<template>
  <div>

    <button>发送请求</button>
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
      sendRequest(){
        let url = "localhost:8888/vue"

      }
    },
    mounted() {
      window.vfor = this.$data;
    }
  }
</script>

<style>
</style>
