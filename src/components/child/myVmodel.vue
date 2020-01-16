<template>
    <div class="base-check">
        <input type="checkbox"  :id="id" :value="value"
               @change="change"
        >
        <label :for="id">{{title}}</label>
    </div>
</template>

<script>
    export default {
        name: "myVmodel",
        model: {
            event: 'change',
            prop: 'prop1'
        },
        props: ['prop1', 'id', 'title', 'value'],
        methods: {
            change(event) {
                let value = event.target.value;
                if(event.target.checked){
                    this.prop1.push(value);
                }else{
                    let index = this.prop1.indexOf(value);
                    if(index != -1){
                        this.prop1.splice(index,1);
                    }
                }
                //
            }
        },
        mounted() {
            if(this.prop1.length > 0){

            }
        }
    }
</script>

<style scoped>

</style>