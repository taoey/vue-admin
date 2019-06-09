<template>
    <div>
        <div>
            {{search_form}}
        </div>
        <!-- 搜索栏 -->
        <div>
            <Form inline label-position="left" :label-width="80">
                <FormItem label="用户ID:">
                    <Input type="text" v-model="search_form.uid" placeholder="" style="width:80px">
                    </Input>
                </FormItem>
                <FormItem label="用户名:">
                    <Input type="text" v-model="search_form.uname" placeholder="" style="width:80px">
                    </Input>
                </FormItem>
            </Form>
        </div>
        <!-- 工具栏 -->
        <div>
            <ButtonGroup >
                <Button @click="search()">搜索</Button>
                <Button @click="resetForm()">重置表单</Button>
                <Button @click="upload()">上传句集</Button>

            </ButtonGroup>
        </div>
        <br>
        <!-- 搜索结果 -->
        <div>
            <Table border :columns="columns" :data="columns_data">
                <!-- 操作按钮 -->
                <template slot-scope="{ row,index }" slot="action">
                    <Button type="primary" size="small" style="margin-right: 5px" @click="show(row)">查看</Button>
                    <Poptip
                        confirm
                        title="删除？"
                        @on-ok="remove(index,row)"
                        >
                        <Button type="error" size="small">删除</Button>
                    </Poptip>
                </template>
            </Table>
            <br>
            <Page
                :total="total" 
                :page-size="pageSize"
                @on-change="on_change"
                show-total
            >
            </Page>
        </div>
    </div>
</template>

<script>
export default {
    mounted:function(){
        this.search()
    },
    data(){
        return{
            //分页相关
            total:-1,
            pageSize:10,

            //搜索参数
            search_form:{},
            
            //表格相关
            columns_data:[],
            columns:[
                {
                    title: 'ID',
                    key: 'id',
                    width:50
                },
                {
                    title: '操作',
                    slot: 'action',
                    width: 150,
                    align: 'center'
                }
            ],
            
        }
    },
    methods:{
        getData(){
            var data = this.search_form;
            this.$http.post('/api/sentence/list.json',data)
            .then((response)=>{
                console.log(response.data.result);
                this.columns_data = response.data.result.rows;
                this.total = response.data.result.total;
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        search(){
            this.search_form.page = 1
            this.search_form.pageSize = 6
            this.getData()
        },
        resetForm(){
            this.search_form={}
        },
        on_change(nextPage){
            this.search_form.page = nextPage
            this.search_form.pageSize = 6
            this.getData()
        },
        remove(index,row){
            console.log("set:remove")
            console.log(index,row)

            var data = row;
            this.$http.post('/api/sentence/delete.json',data)
            .then((response)=>{
                if(response.data.code==200){
                    this.columns_data.splice(index, 1);
                }else{
                    this.$Message.error(response.data.result)
                }
            })
            .catch(function (error) {
                console.log(error);
            });

        },
        show(row){
            console.log("set:show")
            console.log(row)
        }

    }
}
</script>

<style>

</style>
