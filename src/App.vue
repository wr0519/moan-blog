<template>
  <div id="app">
    <el-container>
      <el-header>
        <div class="logo" v-show="isPC">
          <el-link :href="logopath" target="" :underline="false">
          
              MoAn..
            
          </el-link>
        </div>

        <div class="logo" v-show="!isPC" style="margin-top: 3%;">
          <el-link :href="logopath" target="" :underline="false">
            MoAn..
          </el-link>
        </div>

        <div style="height: 100%;width: 650px;">
        <el-menu
          text-color="#000000"
          :default-active="defaultActive"
          mode="horizontal"
          @select="handleSelect"
          :router="router"
          v-show="isPC"
        >
          <el-menu-item index="/Syllabus">Syllabus</el-menu-item>
          <el-submenu index="2" style="font-size: 20px !important;margin-left: 4%;">
              <template slot="title">Note</template>
              <el-menu-item index="/week1">Note1 Machine-Learning</el-menu-item>
              <el-menu-item index="/week2">Note2 Advanced Algorithm Design and Analysis</el-menu-item>
              <el-menu-item index="/week3">Note3 Combinatorics</el-menu-item>
              <el-menu-item index="/week4">Note4 Matrix Analysis</el-menu-item>
              <el-menu-item index="/week5">Note5 Academic English</el-menu-item>
              <el-menu-item index="/week6">Note6 Docker</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
              <template slot="title">Projects</template>
              <el-menu-item index="/project1">project1 Student Elective Course Recommendation System</el-menu-item>
              <el-menu-item index="/project2">project2 Party Building Case Recommendation System</el-menu-item>
          </el-submenu>
          <el-menu-item index="/grades" style="margin-left: 3%;">Grades</el-menu-item>
          <el-menu-item index="/instructor" style="margin-left: 7%;">Instructor</el-menu-item>
        </el-menu>
        </div>

        <svg v-show="!isPC" style="margin-top: 5%;margin-right: 0%;" t="1690182552673" @click="drawer = true" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2427" width="500" height="50"><path d="M423.563636 296.339394h390.981819c26.375758 0 26.375758-40.339394 0-40.339394H423.563636c-24.824242 0-24.824242 40.339394 0 40.339394zM263.757576 201.69697c-40.339394 0-74.472727 32.581818-74.472728 74.472727s32.581818 74.472727 74.472728 74.472727 74.472727-32.581818 74.472727-74.472727S304.09697 201.69697 263.757576 201.69697z m0 121.018182c-26.375758 0-46.545455-21.721212-46.545455-46.545455 0-26.375758 21.721212-46.545455 46.545455-46.545455s46.545455 21.721212 46.545454 46.545455c0 26.375758-21.721212 46.545455-46.545454 46.545455zM816.09697 491.830303H425.115152c-26.375758 0-26.375758 40.339394 0 40.339394h390.981818c24.824242 0 24.824242-40.339394 0-40.339394zM263.757576 437.527273c-40.339394 0-74.472727 32.581818-74.472728 74.472727 0 40.339394 32.581818 74.472727 74.472728 74.472727s74.472727-32.581818 74.472727-74.472727c0-40.339394-34.133333-74.472727-74.472727-74.472727z m0 121.018182c-26.375758 0-46.545455-21.721212-46.545455-46.545455 0-26.375758 21.721212-46.545455 46.545455-46.545455s46.545455 21.721212 46.545454 46.545455c0 26.375758-21.721212 46.545455-46.545454 46.545455zM816.09697 727.660606H425.115152c-26.375758 0-26.375758 40.339394 0 40.339394h390.981818c24.824242 0 24.824242-40.339394 0-40.339394zM263.757576 673.357576c-40.339394 0-74.472727 32.581818-74.472728 74.472727S221.866667 822.30303 263.757576 822.30303s74.472727-32.581818 74.472727-74.472727-34.133333-74.472727-74.472727-74.472727z m0 122.569697c-26.375758 0-46.545455-21.721212-46.545455-46.545455s21.721212-46.545455 46.545455-46.545454 46.545455 21.721212 46.545454 46.545454-21.721212 46.545455-46.545454 46.545455z" fill="#A5A5A5" p-id="2428"></path></svg>

        <el-drawer
          size = "50%"
          :visible.sync="drawer"
          :with-header="false">
          <el-row class="tac">
            <el-col :span="12">
      <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      :router="router">
      <el-menu-item index="/Syllabus">
        <span slot="title">Syllabus</span>
      </el-menu-item>
      <el-submenu index="1">
        <template slot="title">
          <span>Note</span>
        </template>
        <el-menu-item-group>
              <el-menu-item index="/week1">Note1 Machine-Learning</el-menu-item>
              <el-menu-item index="/week2">Note2 Advanced Algorithm Design and Analysis</el-menu-item>
              <el-menu-item index="/week3">Note3 Combinatorics</el-menu-item>
              <el-menu-item index="/week4">Note4 Matrix Analysis</el-menu-item>
              <el-menu-item index="/week5">Note5 Academic English</el-menu-item>
              <el-menu-item index="/week6">Note6 Docker</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
              <template slot="title">Projects</template>
              <el-menu-item index="/project1">project1 Student Elective Course Recommendation System</el-menu-item>
              <el-menu-item index="/project2">project2 Party Building Case Recommendation System</el-menu-item>
          </el-submenu>
      <el-menu-item index="/grades">
        <span slot="title">Grades</span>
      </el-menu-item>
      <el-menu-item index="/instructor">
        <span slot="title">Instructor</span>
      </el-menu-item>
    </el-menu>
  </el-col>
  </el-row>
        </el-drawer>

      </el-header>

      <el-main>
        <router-view />
      </el-main>

      <!-- <div class="footer" v-show="isShow">
        <div class="footer-content">
        </div>
      </div> -->
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer:false,
      router: true,
      defaultActive: "/",
      isShow: false,
      isPC:true,
      isIndex:true,
      logopath:'https://wr0519.github.io/moan-blog/#/',
      unique_opened:true
    };
  },
  methods: {
    handleSelect(key) {
      this.isShow = this.defaultActive != key;
      window.console.log(this.isShow);
    },
    JudgePC(){
      let Adaptive = /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      if (navigator.userAgent.match(Adaptive)) {
        this.isPC = false
        } else {
        this.isPC = true
      }
    },
    JudgeIndex(){
        console.log(window.location.href)
        var urlpath = window.location.href
        var path_element = urlpath.split('/')
        this.isIndex = !(path_element[path_element.length-1].length > 1)
        if(this.isIndex){
          this.logopath = 'https://clauswilke.com/dataviz/'
        }else{
          this.logopath = 'https://bopei.github.io/data-viz-fundamentals/#/'
        }
    }
  },
  mounted(){
    // this.JudgeIndex();
    this.JudgePC();
    console.log(this.isPC);
  }
};
</script>

<style lang="scss" scoped>
::v-deep .el-menu-item{
  font-size: 20px !important;
}
.el-menu-item{
  font-size: 20px;
}
::v-deep .el-col-12{
  width:70% !important;
}
.el-link.el-link--default{
  color: #000 !important;
}
.el-link{

    font-size: 40px !important;

}
::v-deep .el-submenu__title{
  font-size: 20px !important;
}
.el-menu {
  border-right:0!important;
}
* {
  padding: 0;
  margin: 0;
}
html,
body {
  height: 100%;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.el-header {
  display: flex;
  justify-content: space-between;
  align-content: center;
  width: 100%;
  margin: 0 auto;
  margin-top: 2%;
  .logo {
    width: 20%;
    padding: 10px;
    float: left;
  }
  .el-menu-demo{
    float: left;
    font-size: 200px;
  }
}
.el-main {
  padding: 0 !important;
}

.footer {
  width: 100%;
  height: 216px;
  overflow: hidden;
  background-color: #ffffff;
  &-content {
    width: 1240px;
    margin: 0 auto;
    padding-top: 20px;
    display: flex;
    justify-content: space-between;
    .content-nav {
      display: flex;
      justify-content: space-around;
      li {
        display: flex;
        flex-direction: column;
        padding: 0 20px;
        //justify-content: center;
        align-items: flex-start;
        p {
          font-size: 20px;
          color: #d4edff;
          padding: 10px 0;
        }
        span {
          color: #f7f7f7;
          font-weight: 300;
          padding: 5px 0;
        }
      }
    }
    img {
      width: 170px;
      height: 170px;
      padding: 10px;
    }
  }
  .copyright {
    height: 30px;
    background: #125688;
    span {
      color: #fff;
      line-height: 30px;
    }
  }
}
</style>
