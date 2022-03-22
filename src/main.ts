// import Vue from 'vue'
// import App from './App.vue'

// Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')

import Vue from "vue"
import Main from "./Icon.vue"

var propsData = {
    IconProps: {
        image: require("./assets/57256DB3-8DAA-4A71-B393-E3ACDA97F941.png"),
        text: "全站免费",
    },
}

new Vue({
    components: { Main },
    template: "<Main v-bind=propsData></Main>",
    data: { propsData: propsData },
}).$mount("#app")
