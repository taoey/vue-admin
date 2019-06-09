<template>
    <div :style="backimage">
    </div>
</template>
<script>
export default {
    data(){
        return{
            backimage: {
                backgroundImage: "url(" + require("../../../static/404.jpg") + ")",
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
                width:"100%",
                height:"100%",
            },
        }
    }
}
</script>
<style>
html,body{
    width: 100%;
    height: 100%;
}
</style>
