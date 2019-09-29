<template>
  <div>
  <a href=" " class="expheader-box"  @mouseenter="enter" @mouseleave="leave">
    <div class="posi f-left">
      <img src="http://127.0.0.1:5050/ex/FihFH8LDnuyoy3DT29RCoqQrRmwn.gif" class="img_gif gif_index" :style="z_index">
     
      <div data-need-login="0" class="img_mask js-mp-play-one" :style="z_index">
      </div>
      <div class="default b1" :style="z_index"></div>
      <i class="play"></i>
    </div>
         <!-- <div class="default b1"></div>
         <img src="http://127.0.0.1:5050/ex/FihFH8LDnuyoy3DT29RCoqQrRmwn.gif" class="pic">
         <div data-need-login="0" class="img_mask js-mp-play-one">
          <i class="play"></i>
         </div>
         <div class="text">午后红茶</div> -->
  </a>
  </div>
</template>
<script>
export default {
  data() {
   return{
     z_index:{
       "z-index":0,
     }
   }
  },
methods: {
    enter(){
      console.log("进入");
      this.z_index = { "z-index":1};
    },
    leave(){
      console.log("移出")
      this.z_index = { "z-index":0};
    }
  },
watch: {
  },
computed: {
  },
}
</script>
<style scoped>
.posi{
  position:relative;
  z-index: 999;
  background: transparent;
}
.f-left{
  float:left;
  width:150px;
}
.d-none{
  display: none;
}
.play{
  display: inline-block;
  width:100%;
  height:150px;
  position: absolute;
  top: 0;
  left: 0;
  background: url("http://127.0.0.1:5050/ex/3a9a80e2b2ba3c32b05f81fa7990215e.jpg") no-repeat; 
}
.img_mask{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 150px;
  line-height: 150px;
  text-align: center;
  background: url(http://127.0.0.1:5050/ex/e46c51a05f17f7f49d24a438372c4e2b.png);
  cursor: pointer;
  /* z-index: 1; */
}
.default{
  position: absolute;
  top: 44px;
  left: 44px;
  width: 50px;
  height: 50px;
  line-height: 150px;
  text-align: center;
  background: url(http://127.0.0.1:5050/ex/08922ea4671b22c0c69798757f9c7278.png) no-repeat;
  cursor: pointer;
  /* z-index: 1; */
}
.img_gif{
  width:100%;
  height:150px;
}
.gif_index{
  position: absolute;
  top:0;
  left:0;
  /* z-index: 1; */
}
  /* .web-index .main-left .expheader {
      display: block; }
      .web-index .main-left .expheader .expheader-box {
        float: left;
        position: relative;
        width: 150px;
        height: auto;
        margin-right: 1px;
        cursor: pointer; }
        .web-index .main-left .expheader .expheader-box .default.b1 {
          background: url("http://127.0.0.1:5050/ex/3a9a80e2b2ba3c32b05f81fa7990215e.jpg") no-repeat; } */
        /* .web-index .main-left .expheader .expheader-box .default.b2 {
          background: url("../img/655c7dbb2e8da175dd62f273119dcb07.jpg") no-repeat; }
        .web-index .main-left .expheader .expheader-box .default.b3 {
          background: url("../img/da74a09d483c2e38a7e00dbebcf21ae2.jpg") no-repeat; }
        .web-index .main-left .expheader .expheader-box .default.b4 {
          background: url("../img/7334487124a8a7f7b70246172e2cb0f1.jpg") no-repeat; }
        .web-index .main-left .expheader .expheader-box .default.b5 {
          background: url("../img/c96ed94cf382a4b54f9f63c100cef7fa.png") no-repeat; }*/
        /* .web-index .main-left .expheader .expheader-box .default {
          width: 100%;
          height: 150px; } 
        .web-index .main-left .expheader .expheader-box .pic {
          display: none;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 150px; }
        .web-index .main-left .expheader .expheader-box .img_mask {
          display: none;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 150px;
          line-height: 150px;
          text-align: center;
          background: url(http://127.0.0.1:5050/ex/e46c51a05f17f7f49d24a438372c4e2b.png);
          cursor: pointer; }
          .web-index .main-left .expheader .expheader-box .img_mask .play {
            display: inline-block;
            width: 50px;
            height: 50px;
            background: url(http://127.0.0.1:5050/ex/08922ea4671b22c0c69798757f9c7278.png) no-repeat;
            vertical-align: middle; } */
        
</style>