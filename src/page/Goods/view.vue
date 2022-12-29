<template>
  <div class="Echarts">
    <el-button type="primary" @click="xianshi()" >查看商品数据</el-button>
    <el-button type="primary" @click="xianshi2()" >查看商品数据2</el-button>
    <div id="main" style="width: 600px;height:400px;float:left" ></div>
    <div id="main2" style="width: 600px;height:400px;float:left" ></div>
  </div>
</template>
<script>
import * as echarts from 'echarts';
import {getdatagoods}  from '@/api/data'
import {getdatagoodsname}  from '@/api/data'
import {getdatagoodsnumber}  from '@/api/data'
export default{
  name: 'Echarts',
  created() {
        this.init();
  },
  data() {
    return {
      datalistgoods:[],
      goodsname:[],
      goodsnumber:[]
    };
  },
  methods:{

    xianshi(){
      this.myEcharts();
    },
    xianshi2(){
      this.myEcharts2();
    },
    async init () {
            await getdatagoods().then(res => {
              if (String(res.code) === '1') {
                this.datalistgoods = res.data
              } else {
                this.$message.error(res.msg || '操作失败')
              }
            }).catch(err => {
              this.$message.error('请求出错了：' + err)
            })

            
            await getdatagoodsname().then(res => {
              if (String(res.code) === '1') {
                this.goodsname = res.data
              } else {
                this.$message.error(res.msg || '操作失败')
              }
            }).catch(err => {
              this.$message.error('请求出错了：' + err)
            })

            await getdatagoodsnumber().then(res => {
              if (String(res.code) === '1') {
                this.goodsnumber = res.data
              } else {
                this.$message.error(res.msg || '操作失败')
              }
            }).catch(err => {
              this.$message.error('请求出错了：' + err)
            })
          },

	  myEcharts(){
      console.log(this.datalistgoods);
		  // 基于准备好的dom，初始化echarts实例
		  var myChart = this.$echarts.init(document.getElementById('main'));

		  // 指定图表的配置项和数据
      var option = {
        title: {
          text: '商品种类',
          subtext: 'Fake Data',
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          left: 'left'
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: '50%',
            data: this.datalistgoods,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      };
      console.log(option);

		  // 使用刚指定的配置项和数据显示图表。
		  myChart.setOption(option);
		  },

      myEcharts2(){
		  // 基于准备好的dom，初始化echarts实例
		  var myChart = this.$echarts.init(document.getElementById('main2'));

		  let dataAxis = this.goodsname;
    // prettier-ignore
    let data = this.goodsnumber;
    let yMax = 5;
    let dataShadow = [];
    for (let i = 0; i < data.length; i++) {
      dataShadow.push(yMax);
    }
    var option = {
      title: {
        text: '全店商品销量情况',
        subtext: 'milktea-allgoods'
      },
      xAxis: {
        data: dataAxis,
        axisLabel: {
          inside: true,
          color: '#fff'
        },
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        },
        z: 10
      },
      yAxis: {
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          color: '#999'
        }
      },
      dataZoom: [
        {
          type: 'inside'
        }
      ],
      series: [
        {
          type: 'bar',
          showBackground: true,
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#83bff6' },
              { offset: 0.5, color: '#188df0' },
              { offset: 1, color: '#188df0' }
            ])
          },
          emphasis: {
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: '#2378f7' },
                { offset: 0.7, color: '#2378f7' },
                { offset: 1, color: '#83bff6' }
              ])
            }
          },
      data: data
    }
  ]
};
// Enable data zoom when user click bar.
const zoomSize = 6;
myChart.on('click', function (params) {
  console.log(dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)]);
  myChart.dispatchAction({
    type: 'dataZoom',
    startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
    endValue:
      dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)]
  });
});

		  // 使用刚指定的配置项和数据显示图表。
		  option && myChart.setOption(option);
		  },

  },
  mounted() {
    this.init();
  }
}
</script>