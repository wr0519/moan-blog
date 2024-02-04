<template>
  <div class="week1">
    <el-tabs :tab-position="tabPosition" style="height: 100%; font-size: 20px;">
    <el-tab-pane label="Note pdf">
      <iframe src='note/Combinatorics.pdf' class="pptframe" width='70%' height='500px' frameborder='1'>
      </iframe>
          <el-link icon="el-icon-download" href="note/Combinatorics.pdf" download target="_blank">
            Download the PDF
          </el-link>
          
    </el-tab-pane>
    <el-tab-pane label="Source File">
      
          <el-link icon="el-icon-download" href="sourcefile/Combinatorics.zip" download target="_blank">
            Download the Source File(Markdown Syntax & Typora Software)
          </el-link>
          
    </el-tab-pane>

    <el-tab-pane label="More Resources">
      <p id="information">
        If you want to obtain this information, please connect to the campus network and click on the provided link.The password is the abbreviation of the school, consisting of four letters.
      </p>
      <el-link icon="el-icon-download" href="http://101.7.173.50:12345/s/BxtG" download target="_blank">
        Click Me
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
#information{
  font-size: 30px;
  margin-left: 15%;
  margin-right: 10%;
  font-weight: 200;
}
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
  font-size: 25px;
  margin-top: 2%;
  margin-left: 15%;
}
.week1{
  margin-top: 3%;
  width: 100%;
  height: 100%;
}
</style>