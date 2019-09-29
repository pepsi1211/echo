<template>
<header class="headerv3">
	<div class="headerv3-nav">
		<a href="javascsript:;" class="nav index active">首页</a>
		<div class="nav has_list" @mouseenter="show" @mouseleave="show">
			<a href="javascript:;" :class="{changeColor:navshow}">发现</a>
			<ul class="navlist" :class="{do_show:navshow}">
				<li>
					<a href="javascript:;">频道</a>
				</li>
				<li>
					<a href="javascript:;">名人</a>
				</li>
				<li>
					<a href="javascript:;">商城</a>
				</li>
				<li>
					<a href="javascript:;">活动</a>
				</li>
				<li>
					<a href="javascript:;">专题</a>
				</li>
				<li class="last">
					<a href="javascript:;">echo回声音乐节</a>
				</li>
			</ul>
		</div>
		<a href="javascript:;" class="nav friend">好友圈</a>
		<a href="javascript:;" class="nav">下载客户端</a>
	</div>
	<a href="javascript:;" class="headerv3-logo">
		<img src="../../public/img/echo_logo.png">
	</a>
	<div class="headerv3-user">
		<!-- <img src="img/pic.jpg" class="avatar"> -->
		<!-- <a href="_login.html" class="headerv3-login" @click="loginshow">登录</a> -->
		<a href="javascript:;" class="headerv3-login">登录</a>
	</div>
	<a href="javascript:;" class="headerv3-upload-audio">上传作品</a>
	<div class="headerv3-search">
		<input type="text" placeholder="搜索内容">
	</div>
<!-- <div>
  <div class="login-modal-bg"></div>
  <div class="login-modal">
    <h2>请先登录</h2>
    <em class="close" @click="loginfuns"></em>
    <div class="tab-title">
      <span class="on">手机号登录</span>
      <span class>邮箱登录</span>
    </div>
    <div class="js-error"></div>
    <div class="phone-area">
      <p class="areacode">
        +86
      </p>
      <input type="text" class="phone" placeholder="请输入手机号码" name="username">
    </div>
    <input type="password" placeholder="输入密码" class="password">
    <button type="submit" class="login-btn">登录</button>
    <div class="other">
      <div class="other-login">
        其他登录方式:
        <a href="javascript:;" title="使用微博账号登录" class="weibo-btn" target="_blank">微博登录</a>
        <a href="javascript:;" title="使用微博账号登录" class="weixin-btn" target="_blank">微信登录</a>
      </div>
      <div class="forget-reg">
        <a href="javascript:;" class="forget-password" target="_blank">忘记密码?</a>
        <a href="javascript:;" class="reg" target="_blank">立即注册</a>
      </div>
    </div>
  </div>
</div> -->
</header>
</template>
<script>
export default {
  data() {
   return{
     navshow:false,
    //  green:{
    //    changeColor:this.navshow
    //  }
   }
  },
methods: {
    show(){
      // e.target.querySelector(".has_list>a").ClassList.add('changeColor')
      this.navshow=!this.navshow;
      console.log(1)
      console.log(this.navshow)
    }
  },
watch: {
  },
computed: {
  },
}
</script>
<style lang="scss">
.changeColor{
  color:#6ed56c !important;
}
.do_show{
  display: block !important;
}
header{
  display: block;
}

.headerv3{
  padding:0 20px;
  position:relative;
  height:80px;
  background:#fff;
  box-shadow: 0 2px 6px rgba(0,0,0,0.04);
  min-width:1000px;
  .headerv3-login{
    color: #6ed56c;
    font-size: 16px;
    line-height: 50px;
  }
  .headerv3-nav{
    float:left;
    .nav.index{
      margin-left:14px;
    }
    .nav.active{
      border-bottom:4px solid #6ed56c;
    }
    .nav{
      float: left;;
      display: inline-block;
      padding:0 15px;
      height:76px;
      color:#666;
      font-size:14px;
      line-height: 80px;
      border-bottom:4px solid transparent;
      &:hover{
        color:#6ed56c;
      }
      a{
        color:#666;
      }
    }
    .has_list{
      position:relative;
      .navlist{
        display:none;
        position: absolute;
        left:0;top:80px;
        z-index:100;
        background:#fff;
        width:137px;height:288px;
        border-radius: 4px;
        box-shadow: 0 2px 10px rgba(0,0,0,.1);
        &:hover{
          display: block;
        }
        li{
          line-height: 48px;
          background: #fff;
          &:hover{
            background-color: #f0f0f0;
          }
          a{
            line-height: 48px;
            font-size:13px;
            color:#666;
            display: block;
            padding-left: 15px;
            &:hover{
              color:#6ed56c;
            }
          }
        }
        li.last{
          border-radius: 4px;
        }
      }
    }
  }
  .headerv3-logo{
    position:absolute;
    top:22px;
    left:50%;
    margin-left:-37px;
    width:74px;
    height:28px;
    img{
      display:inline-block;
      width:100%;
      height:100%;
      vertical-align: top;
    }
  }
  .headerv3-user{
    position:relative;
    float:right;
    width:76px;height:80px;
    line-height:80px;
    margin:0 15px 0 0;
    text-align: center;
    .avatar{
      display: inline-block;
      vertical-align: middle;
      width:50px;height:50px;
      border-radius: 50%;
    }
  }
  .headerv3-upload-audio{
    float:right;
    margin:24px 0 0;
    width:90px;height:32px;
    border-radius: 16px;
    background:#6ed56c;
    color:#fff;
    text-align:center;
    font-size: 12px;
    line-height: 32px;
  }
  .headerv3-search{
    position:relative;
    float:right;
    input{
      margin:24px 24px 0 0;
      padding:8px 28px 8px 32px;
      width:150px;height:14px;
      border:1px solid #e8e8e8;
      border-radius:50px;
      background: url("../../public/img/search.png") 10px 50% no-repeat #f7f7f7;
      background-size: 12px 12px;
      font:400 12px/14px "Microsoft Yahei";
      outline-style:none;
    }
  }
}
</style>