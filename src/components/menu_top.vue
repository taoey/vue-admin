<template>
    <Menu mode="horizontal" theme="dark" active-name="1">
        <div class="layout-logo"></div>
        <div style="float:right ">
            <!-- <MenuItem name="1">
                <Icon type="md-mail" />
                站内消息
            </MenuItem> -->
            <MenuItem name="2">
                <div>
                    <Icon type="ios-person-outline" />
                    您好，
                    <span v-if="admin.type==1">普通管理员</span>
                    <span v-if="admin.type==0">超级管理员</span>
                    {{admin.name}}
                </div>
            </MenuItem>         
            <MenuItem name="2">
                <div @click="logout()">
                    <Icon type="md-power" />
                    退出
                </div>
            </MenuItem>
        </div>
    </Menu>
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
        logout(){
            this.$store.dispatch("setAdmin",{})
            this.$router.push("/full/admin/login")
        }
    },
    destroyed:function(){
        this.logout()
    }
}
</script>

<style>
.layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 0px;
}
</style>
