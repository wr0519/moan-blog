<template>
  <div>
    <!-- <div class="gradechart" id="gradechart">
    </div> -->
    <h1>Sorry,We are working on it</h1>
  </div>
</template>
<script>
import * as echarts from "echarts";
export default {
  components: {
    echarts
  },
  data() {
    return {
      loading: true,
    };
  },
  mounted() {
    this.initEcharts();
  },
  methods:{
    initEcharts() {
      const option = {
        tooltip: {},
        legend: {
          data: ["销量"]
        },
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar", //类型为柱状图
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      };
      const myChart = echarts.init(document.getElementById("gradechart"));// 图标初始化
      myChart.setOption(option);// 渲染页面
      //随着屏幕大小调节图表
      window.addEventListener("resize", () => {
        myChart.resize();
      });
    }
  }
};
</script>

 <style lang="scss" scoped>
.gradechart{
  width:1000px;
  height: 600px;
  margin-top: 5%;
  margin-left: 20%;
}
h1{
  font-size: 50px;
  margin-left: 10%;
  margin-top: 15%;
}
</style>