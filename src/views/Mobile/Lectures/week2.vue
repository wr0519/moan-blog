<template>
    <div class="week1">
      <el-tabs :tab-position="tabPosition" style="height: 100%; font-size: 20px;">

        <el-tab-pane label="Source Code">
        <!-- <el-link icon="el-icon-download" href="ppt/Chapter02/Data Visualization in Python.ipynb" download target="_blank">
              Download this PDF's Source Code
            </el-link> -->
            <!-- <pdf
                v-for="item in 13"
                :src="'https://bopei.github.io/data-viz-fundamentals/ppt/Chapter02/Data Visualization in Python.pdf'"
                :key="item"
                :page="item"
            >
            </pdf>           -->
            <el-link icon="el-icon-top-right" href="https://nbviewer.org/github/boPei/data-viz-fundamentals/blob/master/code/Chapter02/Data%20Visualization%20in%20Python.ipynb" target="_blank">
            Go to the first Source Code
          </el-link>
          <el-link icon="el-icon-top-right" href="https://nbviewer.org/github/boPei/data-viz-fundamentals/blob/master/code/Chapter02/matplotlib.ipynb" target="_blank">
            Go to the second Source Code
          </el-link>
      </el-tab-pane>
      <!-- <el-tab-pane label="Source Code2">
        <el-link icon="el-icon-download" href="ppt/Chapter02/matplotlib.ipynb" download target="_blank">
              Download this PDF's Source Code
        </el-link>
        <pdf
                v-for="item in 20"
                :src="'https://bopei.github.io/data-viz-fundamentals/ppt/Chapter02/matplotlib.pdf'"
                :key="item"
                :page="item"
            >
            </pdf>
      </el-tab-pane> -->

      </el-tabs>
    </div>
  </template>
  
  <script>
  import pdf from 'vue-pdf'
  export default {
    data() {
      return {
      };
    },
    components: {
      pdf
    },
  };
  </script>
  
  <style lang="scss" scoped>
  .el-link{
    font-size: 20px;
    margin-top: 5%;
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