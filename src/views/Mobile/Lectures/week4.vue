<template>
    <div class="week1">
      <el-tabs :tab-position="tabPosition" style="height: 100%; font-size: 20px;">
      <el-tab-pane label="Course Slide">
        <iframe src='https://view.officeapps.live.com/op/view.aspx?src=https://bopei.github.io/data-viz-fundamentals/ppt/Chapter04/Data Visualization(3rd).pptx' width='90%' height='300px' class="pptframe" frameborder='1'>
        </iframe>
            <el-link icon="el-icon-download" href="ppt/Chapter04/Data Visualization(3rd).pptx" download target="_blank">
              Download the slides 
            </el-link>
            <el-link icon="el-icon-top-right" href="https://nbviewer.org/github/boPei/data-viz-fundamentals/blob/master/code/Chapter04/Chapter%2007.ipynb" target="_blank">
              Go to the Source Code
            </el-link>
      </el-tab-pane>
      <!-- <el-tab-pane label="Source Code">
        <el-link icon="el-icon-download" href="ppt/Chapter04/Chapter 07.ipynb" download target="_blank">
              Download this chapter's Source Code
            </el-link>
            <pdf
                v-for="item in 17"
                :src="'https://bopei.github.io/data-viz-fundamentals/ppt/Chapter04/Chapter 07.pdf'"
                :key="item"
                :page="item"
            >
            </pdf>  
      </el-tab-pane> -->
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
    margin-top: 5%;
    margin-left: 5%;
  }
  .week1{
    margin-top: 10%;
    width: 100%;
    height: 100%;
  }
  </style>