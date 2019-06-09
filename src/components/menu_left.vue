<template>
    <div>
        <Menu active-name="1-2" theme="dark" width="auto" :open-names="['1']">
            <MenuItem name="1">
                <div @click="clickToStatistic()">
                    <Icon type="ios-home" />
                    网站总览
                </div>
            </MenuItem>
            <!-- <Submenu name="2">
                <template slot="title">
                    <Icon type="ios-keypad"></Icon>
                    网站信息统计
                </template>
                <MenuItem name="2-1">用户活动统计</MenuItem>
                <MenuItem name="2-2">句子统计</MenuItem>
                <MenuItem name="2-3">句集统计</MenuItem>
            </Submenu> -->
            <Submenu name="7">
                <template slot="title">
                    <Icon type="md-planet" />
                    系统管理
                </template>
                <MenuItem name="7-1" >
                    <div @click="clickToNotice()" >
                        前台公告
                    </div>
                </MenuItem>
            </Submenu>
        </Menu>
    </div>

</template>
<script>
export default {
    mounted:function(){
        var admin = this.$store.getters.getAdmin
        if(typeof admin =='string'){
            console.log("转化之后")
            admin = JSON.parse(admin)
        }
        this.admin = admin
    },
    data(){
        return{
            admin:{}
        }
    },
    methods:{
        clickToSentence(){
            this.$router.push("sentence");
        },
        clickToSet(){
            this.$router.push("set")
        },
        clickToComment(){
            this.$router.push("comment")
        },
        clickToUser(){
            this.$router.push("user")
        },
        clickToNotice(){
            this.$router.push("notice")
        },
        clickToDict(){
            this.$router.push("dict")
        },
        clickToStatistic(){
            this.$router.push("statistic")
        },
        clickToBestSentence(){
            this.$router.push("best_sentence")
        },
        clickToSysUser(){
            this.$router.push("sys_user")
        },
    }
}

</script>

<style>
.badge{
    margin-left: 30px;
}
</style>
