<template>
    <div id="app">
        <router-view name="full_screen"></router-view>
        <router-view name="dashboard"></router-view>
    </div>
</template>

<script>
import taoMenuTop from "@/components/menu_top.vue"
import taoMenuLeft from "@/components/menu_left.vue"

export default {
    name: 'App',
    components:{
        "tao-left-menu":taoMenuLeft,
        "tao-top-menu":taoMenuTop,
    },
}
</script> 


<style scoped>
html,body{
    width: 100%;
    height: 100%;
}
body{
    margin: 0;
}
#app{
    width: 100%;
    height: 100%;
}
</style>