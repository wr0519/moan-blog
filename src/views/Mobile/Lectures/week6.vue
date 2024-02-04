<template>
  <div class="week1">
    <el-tabs :tab-position="tabPosition" style="height: 100%; font-size: 20px;">
      <el-tab-pane label="Note pdf">
      <iframe src='note/Docker.pdf' class="pptframe" width='90%' height='500px' frameborder='1'>
      </iframe>
      <el-link icon="el-icon-download" href="note/Docker.pdf" download target="_blank">
            Download the PDF
          </el-link>
          
    </el-tab-pane>
    <el-tab-pane label="Source File">
      
          <el-link icon="el-icon-download" href="sourcefile/Docker.zip" download target="_blank">
            Download the Source File(Markdown Syntax & Typora Software)
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
#information{
  font-size: 20px;
  font-weight: 300;
  margin-left: 5%;
  margin-right: 5%;
}
.el-link{
  font-size: 20px;
  margin-top: 10%;
  margin-left: 5%;
}
.pptframe{
  margin-top: 10%;
  margin-right: 5%;
  margin-left: 5%;
}
.week1{
  margin-top: 10%;
  width: 100%;
  height: 100%;
}
</style>