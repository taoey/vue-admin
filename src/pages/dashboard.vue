<template>
        <Layout>
            <Header>
                <tao-top-menu></tao-top-menu>
            </Header>
            <Layout style="height:100vh">
                <Sider>
                    <tao-left-menu></tao-left-menu>
                </Sider>
                <Layout>
                    <Content :style="{padding:'24px'}">
                        <Card>
                            <router-view></router-view>
                        </Card>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
</template>

<script>
import taoMenuTop from "@/components/menu_top.vue"
import taoMenuLeft from "@/components/menu_left.vue"

export default {
    components:{
        "tao-left-menu":taoMenuLeft,
        "tao-top-menu":taoMenuTop,
    },
}
</script> 


<style scoped>

</style>