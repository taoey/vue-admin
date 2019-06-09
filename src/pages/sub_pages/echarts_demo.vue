<template>
    <div>
        数据统计
        <!-- 句集统计 -->
        <div id="setChart" :style="{width: '300px', height: '300px'}">

        </div>
    </div>
</template>

<script>
export default {
    mounted:function(){
        this.draw_set_chart()
    },
    data(){
        return{

        }
    },
    methods:{

        draw_set_chart(){
            let setChart = this.$echarts.init(document.getElementById('setChart'))
            setChart.setOption({
                title: { text: '在Vue中使用echarts' },
                tooltip: {},
                xAxis:{
                     data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
                },
                yAxis: {},
                series:[
                    {
                        name: '销量',
                        type: 'bar',
                        data: [5, 20, 36, 10, 10, 20]
                    }
                ]
            })
        }

    }
}
</script>

<style>

</style>
