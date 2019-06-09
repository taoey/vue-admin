<template>
    <div :style="backimage" class="outdiv">
        <Row >
            <Col span="12">
                <div style="height:100px;width:400px"></div>
            </Col>
        </Row>
        <Row type="flex" justify="center"  align="middle" class="code-row-bg"> 
            <Col>
                <Card style="height: 400px; width:320px; opacity:0.95;">
                    <div align='middle'>
                        <h3>后台管理系统</h3>
                    </div>
                    <div style="padding: 20px">
                        <Form :model="formItem" :label-width="60" style="float:left" label-position="left">
                            <FormItem label="用户名 :">
                                <Input v-model="formItem.name" placeholder="请输入用户名"></Input>
                            </FormItem>
                            <FormItem label="密码 :">
                                <Input type="password" v-model="formItem.password" placeholder="请输入密码"></Input>
                            </FormItem>
                            <!-- <FormItem label="验证码 :">
                                <Input placeholder="请输入验证码"></Input>
                            </FormItem>
                            <FormItem>
                                <img src="../../../static/login.jpg" style="width:70px; height:35px;"/>
                            </FormItem> -->
                            <FormItem>
                                <Button type="primary" @click="submit()" >登录</Button>
                                <!-- <Button type="primary" @click="setuser()" >setuser</Button>
                                <Button type="primary" @click="getuser()" >getuser</Button>
                                <Button type="primary" @click="logout()" >logout</Button> -->
                                <!-- {{admin}}
                                 -->
                                <!-- <Button style="margin-left: 8px">Reset</Button> -->
                            </FormItem>
                        </Form>
                    </div>
                </Card>
            </Col>
        </Row>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                //添加背景图片
                backimage: {
                    backgroundImage: "url(" + require("../../../static/login.jpg") + ")",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% 100%",
                },
                formItem: {
                    name: '',
                    password: '',
                },
                admin:{}
            }
        },
        methods:{
            submit(){
                if(this.formItem.name=='' || this.formItem.password==''){
                    this.$Message.warning("请完善登录表单")
                    return
                }
                
                //直接登录
                this.$router.push("/dash/index")

                //请求后端登录
                // var data = this.formItem;
                // this.$http.post('/api/admin/login.json',data)
                // .then((response)=>{
                //     if(response.data.code==200){
                //         this.$Message.success("登录成功")
                //         this.$store.dispatch("setAdmin",response.data.result)
                //         this.$router.push("/dash/statistic")
                //     }else{
                //         this.$Message.warning(response.data.result);
                //     }
                // })
                // .catch(function (error) {
                //     console.log(error);
                // });
            },
            getuser(){
                var admin = this.$store.getters.getAdmin
                if(typeof admin =='string'){
                    console.log("转化之后")
                    admin = JSON.parse(admin)
                }
                this.admin = admin
                console.log(this.admin.name==null)
            },
            setuser(){
                this.$store.dispatch("setAdmin",{"name":"tao"})
            },
            logout(){
                this.$store.dispatch("setAdmin",{})
            }

        }
    }
</script>
<style>
html,body{
    width: 100%;
    height: 100%;
}
.outdiv{
    width: 100%;
    height: 100%;
}
</style>
