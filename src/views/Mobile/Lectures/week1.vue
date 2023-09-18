<template>
  <div class="week1">
    <el-tabs :tab-position="tabPosition" style="height: 100%; font-size: 20px;">
    <el-tab-pane label="Course Slide">
      <iframe src='https://view.officeapps.live.com/op/view.aspx?src=https://bopei.github.io/data-viz-fundamentals/ppt/Chapter01/Introduction%20and%20Principles%20of%20Data%20Visualization.pptx' width='90%' height='300px' class="pptframe" frameborder='1'>
      </iframe>
          <el-link icon="el-icon-download" href="ppt/Chapter01/Introduction and Principles of Data Visualization.pptx" download target="_blank">
            Download the slides
          </el-link>
    </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // tabPosition: 'left',
    };
  },
  components: {
    
  },
};
</script>

<style lang="scss" scoped>
.el-link{
  font-size: 20px;
  margin-top: 10%;
  margin-left: 5%;
}
.pptframe{
  margin-top: 10%;
  margin-left: 5%;
}
.week1{
  margin-top: 10%;
  width: 100%;
  height: 100%;
}
</style>