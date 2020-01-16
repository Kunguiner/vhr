<template>
    <div class="blog" data-a="b">
        <span>title</span>
        <p>
            <button type="button" @click="enlargeText">放大字体</button>
        </p>
    </div>
</template>

<script>
    export default {
        name: "blog",
        props : ['title'],
        methods : {
            enlargeText () {
                console.log('放大字体');
                this.$emit('enlarge-text',5);
            }
        },

    }
</script>

<style scoped>

</style>