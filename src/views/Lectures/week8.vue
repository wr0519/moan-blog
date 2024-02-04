<template>
    <div class="week1">
      <el-tabs :tab-position="tabPosition" style="height: 100%; font-size: 20px;">
      <el-tab-pane label="Course Slide">
        <iframe src='https://view.officeapps.live.com/op/view.aspx?src=https://bopei.github.io/data-viz-fundamentals/ppt/Chapter08/chapter 11 Visualizing nested proportions.pptx' width='70%' height='500px' class="pptframe" frameborder='1'>
        </iframe>
            <el-link icon="el-icon-download" href="ppt/Chapter08/chapter 11 Visualizing nested proportions.pptx" download target="_blank">
              Download the slides 
            </el-link>
            <el-link icon="el-icon-top-right" href="https://nbviewer.org/github/boPei/data-viz-fundamentals/blob/master/code/Chapter08/Chapter11.ipynb" target="_blank">
              Go to the Source Code
            </el-link>
      </el-tab-pane>
      <!-- <el-tab-pane label="Source Code">
        <el-link icon="el-icon-download" href="ppt/Chapter08/Chapter11.ipynb" download target="_blank" style="margin-left: 30%;">
              Download this chapter's Source Code
            </el-link>
            <pdf
                v-for="item in 8"
                :src="'https://bopei.github.io/data-viz-fundamentals/ppt/Chapter08/Chapter11.pdf'"
                :key="item"
                :page="item"
            ></pdf>
      </el-tab-pane> -->
      </el-tabs>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        tabPosition: 'left',
      };
    },
    components: {
    }
    
  };
  </script>

<style lang="scss" scoped>
  ::v-deep .el-tabs__item {
    font-size: 20px;
    font-weight: 1000;
  } 
  ::v-deep .el-carousel__container{
    height: 800px !important;
  }
  .pptframe{
    margin-left: 15%;
    height: 600px !important;
  }
  .el-button{
    font-size: 50px;
  }
  .el-link{
    font-size: 20px;
    margin-top: 2%;
    margin-left: 15%;
  }
  .week1{
    margin-top: 3%;
    width: 100%;
    height: 100%;
  }
  </style>