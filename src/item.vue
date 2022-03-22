<template>
    <div class="item" v-show="itemShow">
        <Icon class="Icon1" :IconProps="IconProps"></Icon>
        <Icon class="Icon2" :IconProps="IconProps1"></Icon>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator"
import Icon from "./Icon.vue"

@Component({
    components: { Icon },
})
export default class item extends Vue {
    IconProps = {
        image: require("./assets/57256DB3-8DAA-4A71-B393-E3ACDA97F941.png"),
        text: "全站免费",
    }
    IconProps1 = {
        image: require("./assets/B070E62B-BE76-4657-BC71-56216339BEAB.png"),
        text: "专属月票",
    }
    get itemShow() {
        return true
    }
}
</script>

<style scoped>
.item {
    height: 103px;
    align-items: flex-end;
    align-self: stretch;
    display: flex;
    border-radius: 8px;
    background-color: #ffffffff;
}
.Icon1 {
    margin: 0px 0px 20px 22px;
}
.Icon2 {
    margin: 0px 0px 20px 38px;
}
</style>
