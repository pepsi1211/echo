<template>
<footer class="footerv3">
    <div class="footerv3-cp clearfix">
        <div class="footerv3-logo">
            <img src="../../public/img/kibeylogo@2x.png" alt="启维文化"/>
        </div>
        <p class="footerv3-desc">启维文化是一个年轻人的文化品牌，旗下有多个互联网产品线，覆盖生活方式、音乐、创意，时尚等多个领域。</p>
        <div class="footerv3-contact">
            商业合作 <em>business@kibey.com</em><br/>
            广告投放 <em>ad@kibey.com</em><br/>
            echo回声渠道合作 <em>echo@kibey.com</em><br/>
            版权合作、投诉 <em>legal@kibey.com</em><br/>
            联系客服 <em>echo-service@kibey.com</em><br/>
            其他事项 <em>info@kibey.com</em><br/>
            客服电话 <em>400-820-1791</em><br/>
        </div>
    </div>
    <ul class="footerv3-nav">
        <li>
            <a href="#">青声音乐</a>
        </li>
        <li>
            <a href="#">关于echo</a>
        </li>
        <li>
            <a href="#">职位招聘</a>
        </li>
        <li>
            <a href="#">echo名人申请</a>
        </li>
        <li>
            <a href="#">下载app</a>
        </li>
        <li>
            <a href="#">手游echobeat</a>
        </li>
        <li>
            <a href="#">第三方帐号绑定</a>
        </li>
    </ul>
    <div class="copyright">
        <a href="#">沪ICP备15035783号-1</a>&nbsp;&nbsp;|&nbsp;&nbsp;网络文化经营许可证：沪网文【2015】0593-143号&nbsp;&nbsp;|&nbsp;&nbsp;
        <a href="#">
            <img src="../../public/img/FinEALw7ifYIV2baxOAzDe1ctz1S.png" style="width:16px;height:16px;"/>沪公网安备 31010602000310号
        </a>&nbsp;&nbsp;|&nbsp;&nbsp;
        <a href="">
            <img src="../../public/img/govIcon.gif" style="width: 15px;height: 20px;vertical-align: sub;">工商网监 
        </a><br>
        增值电信业务经营许可证：沪 B2-20160047&nbsp;&nbsp;|&nbsp;&nbsp;客服电话:400-820-1791<br>联系地址:上海市静安区江宁路631号3号2层<br>
        02009-2018 上海青声网络科技有限公司保留所有权力
    </div>
</footer>
</template>
<script>
export default {
  data() {
   return{}
  },
methods: {
  },
watch: {
  },
computed: {
  },
}
</script>
<style lang="scss">
  .footerv3{
  background-color:#fff;
  margin-top:25px;
  .footerv3-cp{
    margin:0 auto;
    width:1000px;
  }
  .footerv3-logo{
    float:left;
    margin:35px 0;
    width:208px;
    height:50px;
    img{
    width: 208px;
    height: 50px;
    }
  }
  .footerv3-desc{
    float:left;margin:45px 0 0 20px;
    width:318px;height:30px;
    color:#999;font-size:12px;
    line-height:15px;
  }
  .footerv3-contact{
    float:right;
    margin:10px 0;
    color:#999;
    font-size:12px;
    line-height:20px;
  }
  .footerv3-nav{
  height:80px;
  border-top:1px solid #e8e8e8;
  text-align:center;
  li{
    display:inline-block;
    margin:34px 22px 24px;
    height:14px;
    list-style:none;
    line-height:14px;
    a{
      color:#666;
      font-size:14px;
      }
    }
  }
  .copyright{
    padding-bottom:36px;
    color:#adadad;
    text-align:center;
    font-size:12px;
    a{
      color:#adadad;
    }
  }
}
</style>