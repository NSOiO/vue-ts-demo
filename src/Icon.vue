<template>
    <div class="Icon">
        <div class="img1" :style="{ 'background-image': 'url(' + IconProps.image + ')' }"></div>
        <span class="txt1" v-html="IconProps.text" v-on:click="txt1Action" v-on:focus="txt1Focus"></span>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator"

@Component
export default class Icon extends Vue {
    @Prop() IconProps = {}
    txt1Focus() {}
    txt1Action() {}
}
</script>

<style scoped>
.Icon {
    align-items: center;
    align-self: flex-start;
    display: flex;
    flex-direction: column;
}
.img1 {
    width: 31px;
    height: 30px;
    background: no-repeat center/100% 100%;
}
.txt1 {
    margin-top: 7px;
    font-size: 11px;
    color: #929292ff;
    white-space: nowrap;
    letter-spacing: 0px;
    font-family: "PingFang SC Regular";
}
</style>
