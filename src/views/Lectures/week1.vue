<template>
  <div class="week1">
    <el-tabs :tab-position="tabPosition" style="height: 100%; font-size: 20px;">
    <el-tab-pane label="Course Slides">
      <!-- <div class="slide_pc">
         <el-carousel trigger="click" height="37vw" @change="loadAnimate"  :interval="5000" arrow="hover">
            <el-carousel-item v-for="(item,index) in imgurl" :key="index">
              <figure>
                <img :src="item" style="width:80%;height: 1200px;margin-left: 10%;"/>
              </figure>
            </el-carousel-item>
          </el-carousel>
      </div> -->
      <iframe src='https://view.officeapps.live.com/op/view.aspx?src=https://bopei.github.io/data-viz-fundamentals/ppt/Chapter01/Introduction%20and%20Principles%20of%20Data%20Visualization.pptx' class="pptframe" width='70%' height='500px' frameborder='1'>
      </iframe>
          <el-link icon="el-icon-download" href="ppt/Chapter01/Introduction and Principles of Data Visualization.pptx" download target="_blank">
            Download the Slides
          </el-link>
          
    </el-tab-pane>
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