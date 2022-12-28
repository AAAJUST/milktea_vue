<template>
    <div>
    <div id="echarts" style="width:600px;height:400px"></div>
</div>
</template>
<script>
import * as echarts from 'echarts'
export default{
    name:'echarts',
    created(){
      this.mcharts();
    },
    methods:{
    mcharts(){
        const myChart = echarts.init(document.getElementById('echarts'));
        const option = {
            title: {
              text:'饮品可视化销售单'
            },
            tooltip:{},
            xAxis:{ //x轴下标
                data:["奶茶","咖啡","乳茶"]
            },
            yAxis:{
                type:'value'
            },
            series:[{
              name:'销量',
              type:'line',
              data:[20,5,20]
            }]
        };
        myChart.setOption(option)
      }
    }
}
</script>