<template>
    <input type="text" :value="value"
            @input="$emit('input', $event.target.value)">
</template>

<script>
    export default {
        name: "customInput",
        props: ['value']
    }
</script>

<style scoped>

</style>