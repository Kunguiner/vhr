<template>
    <div :style="getFontSize">

                <my-vmodel value="皮卡丘" title="皮卡丘" v-model="pokémon" id="1">

                </my-vmodel>
                <my-vmodel value="可达鸭" title="可达鸭" v-model="pokémon" id="2">

                </my-vmodel>
<!--        <input type="checkbox" value="可达鸭" id="1" v-model="pokémon">-->
<!--        <label for="1">可达鸭</label>-->
<!--        <input type="checkbox" value="皮卡丘" id="2" v-model="pokémon">-->
<!--        <label for="2">皮卡丘</label>-->
<!--        <input type="checkbox" value="蒜头王八" id="3" v-model="pokémon">-->
<!--        <label for="3">蒜头王八</label>-->
        <p>当前选择的是：{{pokémon}}</p>
    </div>
</template>

<script>
    import blog from './child/blog'
    import customInput from "./child/customInput"
    import dc1 from "./dynamicComponents/dc1"
    import dc2 from "./dynamicComponents/dc2"
    import myVmodel from "./child/myVmodel"
    import dc3 from "./dynamicComponents/dc3";

    export default {
        components: {
            blog, customInput, dc1, dc2, dc3, myVmodel
        },
        data() {
            return {
                fontSize: 12,
                titles: ["google", "apple", "alibaba"],
                country: '',
                dynamicComponents: 'dc1',
                pokémon: ['可达鸭']
            }
        },
        computed: {
            getFontSize() {
                return 'font-size:' + this.fontSize + 'px';
            }
        },
        methods: {
            addFontSize(count) {
                this.fontSize += count;
            }
        }
    }
</script>

<style>
</style>
