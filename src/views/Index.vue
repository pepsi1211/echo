<template>
<main>
		<main class="main-app">
      <!-- 头部 -->
			<!-- 登陆模态框 -->
			<main class="main-center">
				<div class="web-index clearfix">
					<div style>
						<section class="main-left">
							<div class="expheader clearfix">
								<a href="#" class="expheader-box clearfix">
									<div class="header-transparent" @mouseenter="enter1" @mouseleave="leave1">
										<div class="default b1"></div>
										<img src="../../public/img/FihFH8LDnuyoy3DT29RCoqQrRmwn.gif" class="pic" :style="zIndex1">
										<div data-need-login="0" class="img_mask js-mp-play-one" :style="zIndex1"></div>
										<i class="play" :style="zIndex1"></i>
										<div class="text" :style="zIndex1">午后红茶</div>
									</div>
								</a>
								<a href="#" class="expheader-box">
									<div class="header-transparent" @mouseenter="enter2" @mouseleave="leave2">
										<div class="default b2"></div>
										<img src="../../public/img/FnCtO76a5Cs7PrIbE90QIy6ybjYI.gif" class="pic" :style="zIndex2">
										<div data-need-login="0" class="img_mask js-mp-play-one" :style="zIndex2"></div>
										<i class="play" :style="zIndex2"></i>
										<div class="text"
										:style="zIndex2">工作学习</div>
									</div>
								</a>
								<a href="#" class="expheader-box">
									<div class="header-transparent" @mouseenter="enter3" @mouseleave="leave3">
										<div class="default b3"></div>
										<img src="../../public/img/FuMDECcEhbAWAOzQiSl5XTXnZpY3.gif" class="pic" :style="zIndex3">
										<div data-need-login="0" class="img_mask js-mp-play-one" :style="zIndex3"></div>
										<i class="play" :style="zIndex3"></i>
										<div class="text"
										:style="zIndex3">深夜居酒屋</div>
									</div>
								</a>
								<a href="#" class="expheader-box">
									<div class="header-transparent" @mouseenter="enter4" @mouseleave="leave4">
										<div class="default b4"></div>
										<img src="../../public/img/FiFPKdgKFd-8UH5Rnyy3LInH6OUZ.gif" class="pic" :style="zIndex4">
										<div data-need-login="0" class="img_mask js-mp-play-one" :style="zIndex4"></div>
										<i class="play" :style="zIndex4"></i>
										<div class="text"
										:style="zIndex4">周末聚会</div>
									</div>
								</a>
								<a href="#" class="expheader-box nospace">
									<div class="header-transparent" @mouseenter="enter5" @mouseleave="leave5">
										<div class="default b5"></div>
										<img src="../../public/img/Fi0kOU7PN6q-y2KGhu0urOM5uGFI.gif" class="pic" :style="zIndex5">
										<div data-need-login="0" class="img_mask js-mp-play-one" :style="zIndex5"></div>
										<i class="play" :style="zIndex5"></i>
										<div class="text"
										:style="zIndex5">放松心情</div>
									</div>
								</a>
							</div>
							<div class="echo-common sound-hot">
								<div class="big-title">
									<span class="fl">热门回声榜</span>
									<span class="fr">
										<router-link class="fr-a" to="/rank/hot">进入榜单</router-link>
									</span>
								</div>
								<div class="sound-list clearfix">
									<div class="index1 clearfix">
										<router-link to="/rank/hot">
											<img src="../../public/img/b6718ed159e896bde882ba27b7b98015.png" class="title_bg">
										</router-link>
										<a href="_details.html">
											<img src="../../public/img/Fq-IPoutn5w4WHVpRlC696mCewjH.jpg" class="sound-bg">
										</a>
										<div class="info">
											<span class="top-index">TOP 1</span>
											<a href="#">
												<p>如何教会孩子保护自己</p>
											</a>
											<div class="use-info clearfix">
												<a href="#">
													<img src="../../public/img/Fsv70hWG9NYaI_AQb3dkOSOn9Lju.jpg">
													<span>鸦先生</span>
												</a>
											</div>
										</div>
									</div>
									<div class="index23">
										<ul>
											<li>
												<a href="#">
													<img src="../../public/img/Fv_iwR8lo029WRnmyPxA18Xj5r6H.gif">
												</a>
												<div class="sound-info">
													<div class="title clearfix">
														<i class="index">2</i>
														<a href="#">
															<span>没想到我们连流言蜚语都斗不过 「River of Gold」</span>
														</a>
													</div>
													<a href="#">
														<p>九头虫都有人用过</p>
													</a>
												</div>
											</li>
											<li>
												<a href="#">
													<img src="../../public/img/Fqjay66hxYBnCC4bY1EZZ2v-8miX.gif">
												</a>
												<div class="sound-info">
													<div class="title clearfix">
														<i class="index">3</i>
														<a href="#">
															<span>人生不就是起起落落落落落..么「All Time Low」</span>
														</a>
													</div>
													<a href="#">
														<p>Kiiroituro</p>
													</a>
												</div>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div class="echo-common sound-origin">
								<div class="big-title">
									<span class="fl">原创回声榜</span>
									<span class="fr">
											<a href="#">进入榜单</a>
									</span>
								</div>
								<div class="sound-list clearfix">
									<div class="index1 clearfix">
										<a href="#">
											<img src="../../public/img/5735c4af669429c7b43cbd3fe165d0bf.png" class="title_bg">
										</a>
										<a href="#">
											<img src="../../public/img/Fr_NbAnh9pqawOszxFKDJS8eCHC2.jpg" class="sound-bg">
										</a>
										<div class="info">
											<span class="top-index">TOP 1</span>
											<a href="#">
												<p>李炜 最新单曲「也许」（电视剧《幸福一家人》插曲）</p>
											</a>
											<div class="use-info clearfix">
												<a href="#">
													<img src="../../public/img/95f7f77128560f95e7806b28f3c0f147.png" >
													<span>听见时代传媒</span>
												</a>
											</div>
										</div>
									</div>
									<div class="index23">
										<ul>
											<li>
												<a href="#">
													<img src="../../public/img/FlHYjRUbB-9qrKzsYYYT8a9s-cf_.jpg">
												</a>
												<div class="sound-info">
													<div class="title clearfix">
														<i class="index">2</i>
														<a href="#">
															<span>逯子「幻」（电影《三国杀》片尾曲）</span>
														</a>
													</div>
													<a href="#">
														<p>逯子</p>
													</a>
												</div>
											</li>
											<li>
												<a href="#">
													<img src="../../public/img/Fsp9Zsj7cOAPBll6YFDAF25Yok-I.jpg">
												</a>
												<div class="sound-info">
													<div class="title clearfix">
														<i class="index">3</i>
														<a href="#">
															<span>曹秦「止于你」</span>
														</a>
													</div>
													<a href="#">
														<p>音乐人曹秦</p>
													</a>
												</div>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div class="echo-common mv-hot">
								<div class="big-title">
									<span class="fl">视频回声榜</span>
									<span class="fr">
											<a href="#">进入榜单</a>
									</span>
								</div>
								<div class="sound-list clearfix">
									<div class="index1 clearfix">
										<a href="#">
											<img src="../../public/img/06b1c58597a0447c6c68c4c1505663cd.png" class="title_bg">
										</a>
										<a href="#">
											<img src="../../public/img/Fsk9RSHbJZ_VOt5C8UhKMayYdULL.jpg" class="sound-bg">
										</a>
										<div class="info">
											<span class="top-index">TOP 1</span>
											<a href="#">
												<p>莫非定律MoreFeel-「爱情小说」MV</p>
											</a>
											<div class="use-info clearfix">
												<a href="#">
													<img src="../../public/img/FmTM4JcTEGwxgXEFOHgw0ZAfWGph.png" >
													<span>奔跑怪物</span>
												</a>
											</div>
										</div>
									</div>
									<div class="index23">
										<ul>
											<li>
												<a href="#">
													<img src="../../public/img/FnKHIk6pytQB55-qe58WunZ6KScm.jpg">
												</a>
												<div class="sound-info">
													<div class="title clearfix">
														<i class="index">2</i>
														<a href="#">
															<span>《想和你在一起》MV_董向科</span>
														</a>
													</div>
													<a href="#">
														<p>echo回声</p>
													</a>
												</div>
											</li>
											<li>
												<a href="#">
													<img src="../../public/img/Frnsvk7hRo8CgwiVdCEH0WwMQikf.jpg">
												</a>
												<div class="sound-info">
													<div class="title clearfix">
														<i class="index">3</i>
														<a href="#">
															<span>圈9-走在你身旁（电视剧《奋斗吧，少年！》插曲）mv</span>
														</a>
													</div>
													<a href="#">
														<p>反正靠谱</p>
													</a>
												</div>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div class="expjingxuan clearfix">
								<div class="big-title">
									<span class="fl">echo名人</span>
									<span class="fr">
										<a href="#">查看全部</a>
									</span>
								</div>
								<ul class="expjingxuan-list echo-famous">
									<li class="echo-famous" style="margin-right:35px;">
										<a href="#" class="pic">
											<img src="../../public/img/174ad02f7a7c6d9e30d9966bd639a07f.png">
										</a>
										<a href="#" class="mv-title icon-famous-album icon-famous-album1">
											<span>GEN邓紫棋</span>
										</a>
										<a class="mv-channel">
											<em class="follow">146025人</em>
											<em>关注</em>
										</a>
									</li>
									<li class="echo-famous" style="margin-right:35px;">
										<a href="#" class="pic">
											<img src="../../public/img/Fg70u3d1TYJGnJo8OmHGn6Jky11j.jpg">
										</a>
										<a href="#" class="mv-title icon-famous-album icon-famous-album5">
											<span>李健</span>
										</a>
										<a class="mv-channel">
											<em class="follow">127310人</em>
											<em>关注</em>
										</a>
									</li>
									<li class="echo-famous" style="margin-right:35px;">
										<a href="#" class="pic">
											<img src="../../public/img/37022c906aec1246868a142027bd2d02.png">
										</a>
										<a href="#" class="mv-title icon-famous-album icon-famous-album1">
											<span>谭维维</span>
										</a>
										<a class="mv-channel">
											<em class="follow">103942人</em>
											<em>关注</em>
										</a>
									</li>
									<li class="echo-famous" style="margin-right:35px;">
										<a href="#" class="pic">
											<img src="../../public/img/faed6a318449b2836bcd632f39ef01ac.png">
										</a>
										<a href="#" class="mv-title icon-famous-album icon-famous-album1">
											<span>华晨宇</span>
										</a>
										<a class="mv-channel">
											<em class="follow">152944</em>
											<em>关注</em>
										</a>
									</li>
									<li class="echo-famous" style="margin-right:35px;">
										<a href="#" class="pic">
											<img src="../../public/img/8e0661fc26f15e5342ef34b61b9a6ab6.png">
										</a>
										<a href="#" class="mv-title icon-famous-album icon-famous-album1">
											<span>黄子韬</span>
										</a>
										<a class="mv-channel">
											<em class="follow">41341人</em>
											<em>关注</em>
										</a>
									</li>
								</ul>
							</div>
							<div class="expalbum">
								<div class="big-title">
									<span class="fl">专辑</span>
									<span class="fr">
										<a href="#">查看全部</a>
									</span>
								</div>
								<ul class="expalbum-list clearfix">
									<li class>
										<a href="">
											<img src="../../public/img/lgjWLs2qfJUzXPWJxCoMBVW8rcUW.jpg" class="album-img">
											<h2>PLanB 4 What</h2>
											<h3>徐圣恩</h3>
											<ul class="clearfix">
												<li class></li>
												<li class></li>
												<li class></li>
												<li class></li>
												<li class></li>
												<li class="score">0.0</li>
											</ul>
										</a>
									</li>
									<li class>
										<a href="">
											<img src="../../public/img/Fv-3df7gdrZOdt7rtOq0eo2DB56T.jpg" class="album-img">
											<h2>SNH48 GROUP第六届偶像年度人气总决选演唱会音源</h2>
											<h3>SNH48官方</h3>
											<ul class="clearfix">
												<li class></li>
												<li class></li>
												<li class></li>
												<li class></li>
												<li class></li>
												<li class="score">0.0</li>
											</ul>
										</a>
									</li>
									<li class>
										<a href="">
											<img src="../../public/img/FlOyS5d_mPXshPUs6_pLVBS9OoPK.jpg" class="album-img">
											<h2>Iridescence</h2>
											<h3>BROCKHAMPTON</h3>
											<ul class="clearfix">
												<li class></li>
												<li class></li>
												<li class></li>
												<li class></li>
												<li class></li>
												<li class="score">8.8</li>
											</ul>
										</a>
									</li>
									<li class="no-margin-right">
										<a href="">
											<img src="../../public/img/Fm4582BjAoDB5cdif_xkMjSBistD.jpg" class="album-img">
											<h2>《那年夏天的梦》</h2>
											<h3>SNH48官方</h3>
											<ul class="clearfix">
												<li class="on"></li>
												<li class></li>
												<li class></li>
												<li class></li>
												<li class></li>
												<li class="score">0.0</li>
											</ul>
										</a>
									</li>
								</ul>
							</div>
							<div class="expmore">
								<div class="big-title">
									<span class="fl">今日推荐
										<em class="play-all js-mp-play-one" data-need-login="1">一键播放</em>
									</span>
								</div>
								<ul class="expmore-list clearfix">
									<li class="expmore-box">
										<div class="pic">
											<a href="#" class>
												<img src="../../public/img/FtBvmjraOXSaGRVJV7ht3cZlf-Af.jpg">
											</a>
											<div class="duration">
												<i class="playbtn"></i>
												03:14
											</div>
										</div>
										<a href="#" class="song-name">
												旅行团乐队《梦幻人生》（《梦幻西游》手游盛夏PK狂欢季战歌）
										</a>
										<h4>
											<a href="#" class>OP、ED收藏馆</a>
											频道
										</h4>
										<ul class="status-list">
											<li>
												<i class="share"></i>
												<span>0</span>
											</li>
											<li>
												<i class="like"></i>
												<span>0</span>
											</li>
											<li>
												<i class="comment"></i>
												<span>0</span>
											</li>
										</ul>
									</li>
									<li class="expmore-box">
										<div class="pic">
											<a href="#" class>
												<img src="../../public/img/FrAolwyzlSjUVIgiwBP48VtsJKKn.jpg">
											</a>
											<div class="duration">
												<i class="playbtn"></i>
												04:00
											</div>
										</div>
										<a href="#" class="song-name">
											飞向平和迷人的如梦之境 Peaceful & Lovely
										</a>
										<h4>
											<a href="#" class>打开暖气和音乐</a>
											频道
										</h4>
										<ul class="status-list">
											<li>
												<i class="share"></i>
												<span>0</span>
											</li>
											<li>
												<i class="like"></i>
												<span>0</span>
											</li>
											<li>
												<i class="comment"></i>
												<span>0</span>
											</li>
										</ul>
									</li>
									<li class="expmore-box">
										<div class="pic">
											<a href="#" class>
												<img src="../../public/img/776f41a32f4305cc86677f47c910c8ab42728a4f.jpg">
											</a>
											<div class="duration">
												<i class="playbtn"></i>
												04:01
											</div>
										</div>
										<a href="#" class="song-name">
											少年踏浪而来 星になった少年
										</a>
										<h4>
											<a href="#" class>器乐之美</a>
											频道
										</h4>
										<ul class="status-list">
											<li>
												<i class="share"></i>
												<span>0</span>
											</li>
											<li>
												<i class="like"></i>
												<span>0</span>
											</li>
											<li>
												<i class="comment"></i>
												<span>0</span>
											</li>
										</ul>
									</li>
									<li class="expmore-box">
										<div class="pic">
											<a href="#" class>
												<img src="../../public/img/FuiURyMo2ZYSWXrvwuKypXzQL_Wc.gif">
											</a>
											<div class="duration">
												<i class="playbtn"></i>
												12:48
											</div>
										</div>
										<a href="#" class="song-name">
											来学QUEENB英文歌「Sorry」
										</a>
										<h4>
											<a href="#" class>学外语好幸福</a>
											频道
										</h4>
										<ul class="status-list">
											<li>
												<i class="share"></i>
												<span>0</span>
											</li>
											<li>
												<i class="like"></i>
												<span>0</span>
											</li>
											<li>
												<i class="comment"></i>
												<span>0</span>
											</li>
										</ul>
									</li>
									<li class="expmore-box">
										<div class="pic">
											<a href="#" class>
												<img src="../../public/img/df3e4285feff8330a51c84c3b8ac1f73e0966d7b.jpg">
											</a>
											<div class="duration">
												<i class="playbtn"></i>
												03:58
											</div>
										</div>
										<a href="#" class="song-name">
											极致哀伤 Lana Del Rey携手科恩之子演绎「Chelsea Hotel No.2」
										</a>
										<h4>
											<a href="#" class>欧美流行指南</a>
											频道
										</h4>
										<ul class="status-list">
											<li>
												<i class="share"></i>
												<span>0</span>
											</li>
											<li>
												<i class="like"></i>
												<span>0</span>
											</li>
											<li>
												<i class="comment"></i>
												<span>0</span>
											</li>
										</ul>
									</li>
									<li class="expmore-box">
										<div class="pic">
											<a href="#" class>
												<img src="../../public/img/true.jpg">
											</a>
											<div class="duration">
												<i class="playbtn"></i>
												02:41
											</div>
										</div>
										<a href="#" class="song-name">
											调皮小清新 给每一个纯净的孩子 A Song For You
										</a>
										<h4>
											<a href="#" class>民谣万岁</a>
											频道
										</h4>
										<ul class="status-list">
											<li>
												<i class="share"></i>
												<span>0</span>
											</li>
											<li>
												<i class="like"></i>
												<span>0</span>
											</li>
											<li>
												<i class="comment"></i>
												<span>0</span>
											</li>
										</ul>
									</li>
									<li class="expmore-box">
										<div class="pic">
											<a href="#" class>
												<img src="../../public/img/FskEtJTf7uBmRvJ9s1ZK_mhuBuu1.jpg">
											</a>
											<div class="duration">
												<i class="playbtn"></i>
												03:59
											</div>
										</div>
										<a href="#" class="song-name">
											悲伤的故事写在歌里 德语民谣 Es Ist Ein Schnee Gefallen
										</a>
										<h4>
											<a href="#" class>民谣万岁</a>
											频道
										</h4>
										<ul class="status-list">
											<li>
												<i class="share"></i>
												<span>0</span>
											</li>
											<li>
												<i class="like"></i>
												<span>0</span>
											</li>
											<li>
												<i class="comment"></i>
												<span>0</span>
											</li>
										</ul>
									</li>
									<li class="expmore-box">
										<div class="pic">
											<a href="#" class>
												<img src="../../public/img/FpcgyKVVn04TCax0J8mt0y_hxGLa.jpg">
											</a>
											<div class="duration">
												<i class="playbtn"></i>
												02:47
											</div>
										</div>
										<a href="#" class="song-name">
											这男人的声音易中毒 Feels Like We Only Go Backwards
										</a>
										<h4>
											<a href="#" class>民谣万岁</a>
											频道
										</h4>
										<ul class="status-list">
											<li>
												<i class="share"></i>
												<span>0</span>
											</li>
											<li>
												<i class="like"></i>
												<span>0</span>
											</li>
											<li>
												<i class="comment"></i>
												<span>0</span>
											</li>
										</ul>
									</li>
									<li class="expmore-box">
										<div class="pic">
											<a href="#" class>
												<img src="../../public/img/FsCmmmFtGRJwQ-CF29-7ly9KGRRt.jpg">
											</a>
											<div class="duration">
												<i class="playbtn"></i>
												05:18
											</div>
										</div>
										<a href="#" class="song-name">
											夏日放空「Melt into the blue」The fin.
										</a>
										<h4>
											<a href="#" class>高手在民间</a>
											频道
										</h4>
										<ul class="status-list">
											<li>
												<i class="share"></i>
												<span>0</span>
											</li>
											<li>
												<i class="like"></i>
												<span>0</span>
											</li>
											<li>
												<i class="comment"></i>
												<span>0</span>
											</li>
										</ul>
									</li>
									<li class="expmore-box">
										<div class="pic">
											<a href="#" class>
												<img src="../../public/img/FvROs2fqxlqhm6KPpYbaaCVwMCxS.jpg">
											</a>
											<div class="duration">
												<i class="playbtn"></i>
												03:14
											</div>
										</div>
										<a href="#" class="song-name">
											「胭脂粉」-【双声道环绕】
										</a>
										<h4>
											<a href="#" class>双声道联袂馆</a>
											频道
										</h4>
										<ul class="status-list">
											<li>
												<i class="share"></i>
												<span>0</span>
											</li>
											<li>
												<i class="like"></i>
												<span>0</span>
											</li>
											<li>
												<i class="comment"></i>
												<span>0</span>
											</li>
										</ul>
									</li>
									<li class="expmore-box">
										<div class="pic">
											<a href="#" class>
												<img src="../../public/img/FhN_BHJRINspnxIsfMmux3eNoP0p.jpg">
											</a>
											<div class="duration">
												<i class="playbtn"></i>
												03:52
											</div>
										</div>
										<a href="#" class="song-name">
											【原创说唱】【特立 独行】愿你最终找到属于你自己的路与归宿
										</a>
										<h4>
											<a href="#" class>高手在民间</a>
											频道
										</h4>
										<ul class="status-list">
											<li>
												<i class="share"></i>
												<span>0</span>
											</li>
											<li>
												<i class="like"></i>
												<span>0</span>
											</li>
											<li>
												<i class="comment"></i>
												<span>0</span>
											</li>
										</ul>
									</li>
									<li class="expmore-box">
										<div class="pic">
											<a href="#" class>
												<img src="../../public/img/Fh3WeapkIZZCon0K2RYoEkVs7Lje.jpg">
											</a>
											<div class="duration">
												<i class="playbtn"></i>
												06:34
											</div>
										</div>
										<a href="#" class="song-name">
											男声走心翻唱《出现又离开》（Cover 梁博）
										</a>
										<h4>
											<a href="#" class>高手在民间</a>
											频道
										</h4>
										<ul class="status-list">
											<li>
												<i class="share"></i>
												<span>0</span>
											</li>
											<li>
												<i class="like"></i>
												<span>0</span>
											</li>
											<li>
												<i class="comment"></i>
												<span>0</span>
											</li>
										</ul>
									</li>
									<li class="expmore-box">
										<div class="pic">
											<a href="#" class>
												<img src="../../public/img/Fqjay66hxYBnCC4bY1EZZ2v-8miX.gif">
											</a>
											<div class="duration">
												<i class="playbtn"></i>
												03:21
											</div>
										</div>
										<a href="#" class="song-name">
											人生不就是起起落落落落落..么「All Time Low」
										</a>
										<h4>
											<a href="#" class>欧美流行指南</a>
											频道
										</h4>
										<ul class="status-list">
											<li>
												<i class="share"></i>
												<span>0</span>
											</li>
											<li>
												<i class="like"></i>
												<span>0</span>
											</li>
											<li>
												<i class="comment"></i>
												<span>0</span>
											</li>
										</ul>
									</li>
									<li class="expmore-box">
										<div class="pic">
											<a href="#" class>
												<img src="../../public/img/FnIQUUyf4wG1XxeP5UKjiP6fbDbJ.jpg">
											</a>
											<div class="duration">
												<i class="playbtn"></i>
												03:52
											</div>
										</div>
										<a href="#" class="song-name">
											「3D双声道」林间细雨中的相见 不期而遇的温暖
										</a>
										<h4>
											<a href="#" class>双声道联袂馆</a>
											频道
										</h4>
										<ul class="status-list">
											<li>
												<i class="share"></i>
												<span>0</span>
											</li>
											<li>
												<i class="like"></i>
												<span>0</span>
											</li>
											<li>
												<i class="comment"></i>
												<span>0</span>
											</li>
										</ul>
									</li>
									<li class="expmore-box">
										<div class="pic">
											<a href="#" class>
												<img src="../../public/img/FhHW4zeToniVlXK6yrdIFI51B9gQ.jpg">
											</a>
											<div class="duration">
												<i class="playbtn"></i>
												03:49
											</div>
										</div>
										<a href="#" class="song-name">
											清新脱俗的翻唱 Dancing In The Moonlight
										</a>
										<h4>
											<a href="#" class>那些好听的明星翻唱</a>
											频道
										</h4>
										<ul class="status-list">
											<li>
												<i class="share"></i>
												<span>0</span>
											</li>
											<li>
												<i class="like"></i>
												<span>0</span>
											</li>
											<li>
												<i class="comment"></i>
												<span>0</span>
											</li>
										</ul>
									</li>
									<li class="expmore-box">
										<div class="pic">
											<a href="#" class>
												<img src="../../public/img/FuHcm4-USuyfGkPUnATzA9zQA7U-.jpg">
											</a>
											<div class="duration">
												<i class="playbtn"></i>
												04:26
											</div>
										</div>
										<a href="#" class="song-name">
											万物皆是忧郁的蓝「Colors 」
										</a>
										<h4>
											<a href="#" class>欧美流行指南</a>
											频道
										</h4>
										<ul class="status-list">
											<li>
												<i class="share"></i>
												<span>0</span>
											</li>
											<li>
												<i class="like"></i>
												<span>0</span>
											</li>
											<li>
												<i class="comment"></i>
												<span>0</span>
											</li>
										</ul>
									</li>
								</ul>
							</div>
						</section>
						<section class="main-right">
							<div class="explistening-w">
								<h3>
									每日精选
									<i class="play-all js-mp-play-one">播放全部</i>
								</h3>
								<div class="explistening clearfix">
									<a href="#">
										<div class="pic"> 
											<img src="../../public/img/FoopmBP673yf5Th07OVzPlPvJlyu.jpg">
										</div>
										<div class="hgroup">
											<h4>「REMIX翻唱」Summertime Sadness</h4>
											<h5>高手在民间</h5>
										</div>
									</a>
									<a href="#">
										<div class="pic"> 
											<img src="../../public/img/Fm0TY3DiF0ZXhm8QuGQxMwwS7Khp.jpg">
										</div>
										<div class="hgroup">
											<h4>女声翻唱品冠「我以为」</h4>
											<h5>高手在民间</h5>
										</div>
									</a>
									<a href="#">
										<div class="pic"> 
											<img src="../../public/img/FpcmO5p5Gtl5Z0hsBQqUBBOjz1__.gif">
										</div>
										<div class="hgroup">
											<h4>「3D环绕」来瓶高能饮料吧 Energy Drink</h4>
											<h5>3D音乐奇幻旋律馆</h5>
										</div>
									</a>
									<a href="#">
										<div class="pic"> 
											<img src="../../public/img/FgLSc-fxTPqiU1JLOAgZDq3AGyL6.jpg">
										</div>
										<div class="hgroup">
											<h4>堪称完美的钢琴曲 听着迷了好久没回过神 キミを思うメロディー</h4>
											<h5>闲散的轻音乐时光</h5>
										</div>
									</a>
									<a href="#">
										<div class="pic"> 
											<img src="../../public/img/true (1).jpg">
										</div>
										<div class="hgroup">
											<h4>「徐薇翻唱」到不了</h4>
											<h5>高手在民间</h5>
										</div>
									</a>
									<a href="#">
										<div class="pic"> 
											<img src="../../public/img/FrMboJeW30NIfbOfXHak3Spedad5.jpg">
										</div>
										<div class="hgroup">
											<h4>恋人未满 加快版 Almost Lover(Remix)</h4>
											<h5>一不开心就戴耳机</h5>
										</div>
									</a>
									<a href="#">
										<div class="pic"> 
											<img src="../../public/img/FpopwaWj7fF8SeLuSdL9l0eNv12c.jpg">
										</div>
										<div class="hgroup">
											<h4>古风佳音 双笙倾情演唱「棠梨煎雪」</h4>
											<h5>古音今曲</h5>
										</div>
									</a>
									<a href="#">
										<div class="pic"> 
											<img src="../../public/img/true (2).jpg">
										</div>
										<div class="hgroup">
											<h4>Maps 男女双声道混音</h4>
											<h5>双声道联袂馆</h5>
										</div>
									</a>
									<a href="#">
										<div class="pic"> 
											<img src="../../public/img/Fn7Npt5WNmcdALJ9rg-bEecali-e.jpg">
										</div>
										<div class="hgroup">
											<h4>3D音乐 接着嗨呗 My Songs Know What You Did In The Dark</h4>
											<h5>3D音乐奇幻旋律馆</h5>
										</div>
									</a>
									<a href="#">
										<div class="pic"> 
											<img src="../../public/img/Fs48asVCBjNVFpoznqX4Wsh0nlct.jpg">
										</div>
										<div class="hgroup">
											<h4>超火的 女声翻唱「斑马斑马」</h4>
											<h5>高手在民间</h5>
										</div>
									</a>
								</div>
							</div>
						</section>
					</div>
				</div>
			</main>
		</main>
	</main>
</template>
<script>
export default {
  data() {
   return{
		 zIndex1:{"z-index":0},
		 zIndex2:{"z-index":0},
		 zIndex3:{"z-index":0},
		 zIndex4:{"z-index":0},
		 zIndex5:{"z-index":0},
	 }
  },
methods: {
			// console.log(e.target.parentElement.nodeName=="A");
			// var tar = e.target.parentElement.dataset.i;
			// for(var i=0;i<5;i++){
			// 		if(tar==i){
			// 		// this.gifPlay=!this.gifPlay;
			// 		// console.log(this.gifPlay);
			// 			this.gif[i]= tar==this.all[i];
			// 		}else{
			// 			this.gif=false;
			// 		}
			// }
			enter1(){
				this.zIndex1={"z-index":1,"color":"#6ed56c"};
				// console.log(this.zIndex1);
			},
			leave1(){
				this.zIndex1={"z-index":0};
				// console.log(this.zIndex1);
			},
			enter2(){
				this.zIndex2={"z-index":1,"color":"#6ed56c"}
			},
			leave2(){
				this.zIndex2={"z-index":0}
			},
			enter3(){
				this.zIndex3={"z-index":1,"color":"#6ed56c"}
			},
			leave3(){
				this.zIndex3={"z-index":0}
			},
			enter4(){
				this.zIndex4={"z-index":1,"color":"#6ed56c"}
			},
			leave4(){
				this.zIndex4={"z-index":0}
			},
			enter5(){
				// console.log("进来第五个")
				this.zIndex5={"z-index":1,"color":"#6ed56c"}
			},
			leave5(){
				// console.log("出去第五个")
				this.zIndex5={"z-index":0}
			}
  },
watch: {
  },
computed: {
  },
}
</script>
<style lang="scss">
//@at-root
.zIndex{
	z-index: 10;
}
// 登录模态框的背景遮罩层
.login-modal-bg{
    width:100%;height:100%;
    top:0;left:0;
    z-index: 900;
}
.login-modal, .login-modal-bg{
    position: fixed;
    background: #fff;
}
.login-modal{
    left:50%;top:40%;
    z-index: 999;
    width:530px;height: 389px;
    margin-left:-265px;
    margin-top:-194px;
    box-shadow: 0 2px 54px rgba(0,0,0,.3);
    border-radius: 4px;
    h2{
        height:60px;
        line-height: 60px;
        background: #f4f4f4;
        font-size: 16px;
        color:#999;
        padding-left:28px;
    }
    .close{
        position: absolute;
        right:17px;
        top:22px;
        width:17px;height: 16px;
        background: url(../../public/img/c453e6c0c2179039c421fa786b00045e.png) no-repeat;
        cursor: pointer;
    }
    .tab-title{
        width:243px;
        margin:35px auto 5px;
        span.on{
            color:#6ed56c;
        }
        span{
            display: inline-block;
            font-size: 18px;
            line-height: 22px;
            margin:0 10px;
            cursor: pointer;
        }
    }
    .js-error{
        font-size: 14px;
        color:#f00;
        width:303px;height: 18px;
        overflow: hidden;
        margin:0 auto;
    }
    .phone-area{
        width:316px;
        border:1px solid #e8e8e8;
        line-height: 50px;
        border-radius: 4px;
        p{
            position: relative;
            float: left;
            margin-top:10px;
            height:20px;
            line-height: 20px;
            padding:0 30px 0 10px;
            cursor: pointer;
            border-right:1px solid #e8e8e8;
            &:after{
                content:"";
                position: absolute;
                width:8.21px;
                height:5.56px;
                background:url(../../public/img/75d7e2aec676028f9a6a2925ebc14ab8.png) no-repeat;
                background-size: 8.21px 5.56px;
                top:6px;right:8px;
            }
        }
        input{
            float: left;
            border:none;
            outline: 0;
            height: 40px;
            width:200px;
            padding-left: 10px;
        }
    }
    .phone-area, input{
        height: 40px;
        margin:0 auto 22px;
        font-size: 14px;
        color:#666;
    }
    input{
        width:300px;
        padding-left:14px;
        border-radius: 4px;
        line-height: 40px;
        border:1px solid #e8e8e8;
    }
    .login-btn{
        width:300px;
        height:40px;
        line-height: 45px;
        border-radius: 4px;
        background: #6ed56c;
        color:#fff;
        font-size: 18px;
        text-align: center;
        margin:20px auto 0;
        border: none;
        cursor: pointer;
    }
    .login-btn, input{
        display: block;
        outline: 0;
    }
    .other{
        width:465px;
        height:30px;
        margin:34px auto 0;
    }
    .other-login{
        float: left;
        height:30px;
        line-height: 30px;
        color:#999;
        font-size: 14px;
        .weibo-btn, .weixin-btn{
            display: inline-block;
            width:30px;
            height:30px;
            background: url(../../public/img/89d78ddc48279e529e1d26c38c784eed.png) no-repeat;
            text-indent: -99em;
        }
        .weixin-btn{
            background: url(../../public/img/fe2597d71a4368c737e4a60f7076ecf6.png) no-repeat;
            margin-left: 30px;
        }
    }
    .forget-reg{
        float: right;
        height:14px;
        line-height: 14px;
        margin-top: 10px;
        a{
            display: inline-block;
            font-size: 14px;
            color:#999;
        }
        a.reg{
            color:#6ed56c;
            border-left: 1px solid #e8e8e8;
            padding-left: 10px;
        }
    }
}




.main-app{
    background: #ebebeb;
}
.web-index{
    width:1000px;
    margin:15px auto;
    .main-left{
        float:left;width:755px;
        background: #fff;
        border-radius: 4px;
        .expheader{
            display: block;
            .expheader-box{
                float:left;
                position:relative;
                width:150px;height:auto;
                margin-right:1px;
                cursor: pointer;
								.header-transparent{
									position:relative;
									z-index: 99;
									background:transparent;
									float:left;
									width:150px;
								}
                .default.b1{
                    background: url("../../public/img/3a9a80e2b2ba3c32b05f81fa7990215e.jpg") no-repeat;
                }
                .default.b2{
                    background: url("../../public/img/655c7dbb2e8da175dd62f273119dcb07.jpg") no-repeat;
                }
                .default.b3{
                    background: url("../../public/img/da74a09d483c2e38a7e00dbebcf21ae2.jpg") no-repeat;
                }
                .default.b4{
                    background: url("../../public/img/7334487124a8a7f7b70246172e2cb0f1.jpg") no-repeat;
                }
                .default.b5{
                    background: url("../../public/img/c96ed94cf382a4b54f9f63c100cef7fa.png") no-repeat;
                }
                .default{
										display: inline-block;
                    width:100%;height:150px;
										position: absolute;
										top:0;left:0;
										z-index:1;
                }
                .pic{
                    // display:none;

                    position:absolute;
                    top:0;left:0;width:100%;height:150px;
                }
                .img_mask{
                    // display:none;
                    position:absolute;
                    top:0;left:0;
                    width:100%;
                    height:150px;
                    line-height:150px;
                    text-align:center;
                    background: url(../../public/img/e46c51a05f17f7f49d24a438372c4e2b.png);
                    cursor: pointer;
                }
								.play{
										display: inline-block;
										width:50px;height:50px;
										position: absolute;
										top:50px;left:50px;
										background: url(../../public/img/08922ea4671b22c0c69798757f9c7278.png) no-repeat;
										vertical-align: middle;
								}
                .text{
										// position: absolute;
										// top:0;left:0;
                    display: block;
                    height:20px;
                    line-height: 20px;
                    text-align: center;
                    font-size: 14px;
                    color:#666;
                    padding:11px 0;
                    transition:all .2s ease-in-out;
										margin-top:150px;
                    &:hover{
                        color:#6ed56c;
                    }
                }
            }
            .expheader-box.nospace{
                margin:0;
                width:151px;
            }
        }
        .echo-common{
            width:695px;
            margin:35px auto;
            .sound-list{
                margin-top:19px;
                .index1{
                    float:left;
                    margin-right:5px;
                    .title_bg{
                        float:left;
                        width:90px;
                        height:150px;
                        margin-right:5px;
                    }
                    .sound-bg{
                        float:left;width:150px;
                        height:150px;
                        object-fit: cover;
                    }
                    .info{
                        float:left;width:182px;
                        height:150px;
                        background:url(../../public/img/8f312322ba5b76a63e77aaf3bc7bad8d.png) no-repeat;
                        margin-left:-10px;
                        p{
                            font-size: 14px;
                            line-height: 20px;
                            width:143px;height:39px;
                            color:#666;
                            margin:10px auto 28px;
                            overflow:hidden;
                        }
                        .top-index{
                            display:block;
                            font-size:18px;
                            line-height:18px;
                            color:#f49c9c;
                            margin:17px 0 0 20px;
                        }
                        .use-info{
                            margin-left:20px;
                            img{
                                float:left;
                                width:22px;height:22px;
                                border-radius:50%;
                                margin-right:8px;
                                object-fit: cover;
                            }
                            span{
                                float:left;
                                display: inline-block;
                                font-size: 12px;
                                color:#999;
                                line-height: 22px;
                                width:114px;overflow: hidden;
                                text-overflow: ellipsis;
                                white-space:nowrap;
                            }
                        }
                    }
                }
                .index23{
                    float:right;
                    ul{
                        height:150px;
                        li{
                            height:50%;
                            img{
                                float:left;
                                width:73px;
                                height:73px;
                                object-fit: cover;
                            }
                            .sound-info{
                                float:left;
                                width:197px;height:71px;
                                border:1px solid #f4f4f4;
                                .title{
                                    width:175px;
                                    position:relative;
                                    margin:8px auto 3px;
                                    .index{
                                        position:absolute;
                                        left:2px;
                                        top:1px;
                                        width:16px;
                                        background:#f49c9c;
                                        line-height: 16px;
                                        font-size: 12px;
                                        color:#fff;
                                        text-align: center;
                                        font-style: normal;
                                    }
                                    span{
                                        display: inline-block;
                                        width:171px;height:37px;
                                        font-size: 14px;
                                        line-height: 19px;
                                        color:#666;
                                        text-indent: 1.8em;
                                        overflow: hidden;
                                    }
                                }
                                p{
                                    color:#999;
                                    font-size:12px;
                                    line-height:12px;
                                    width:160px;
                                    margin-left: 12px;
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                    white-space: nowrap;
                                }
                            }
                        }
                    }
                }
            }
        }
				.up-space{
						margin:125px auto 35px !important;	
				}
        .expjingxuan{
        	display:block;
        	width:695px;
        	margin:50px auto 0;
        	overflow:hidden;
        	.expjingxuan-list.echo-famous{
                /*当.expjingxuan-list和.echo-famous同时引用时才生效以下样式*/
        		width:600%;
        	}
        	.expjingxuan-list{
        		 float:left;
        		 width:500%;
        		 transition:all .4s ease-in-out;
        		 li{
        		 	float:left;
        		 	.pic{/*其实不知道这里是怎么回事*/
        		 		display:block;
        		 		position:relative;
        		 		overflow:hidden;
        		 		height:150px;
        		 		img{
        		 			width:280px;
        		 			height:150px;
        		 		}
        		 	}
        		 	.mv-title{
        		 		display:block;
        		 		height:36px;
        		 		line-height:18px;
        		 		margin-top:18px;
        		 		font-size:14px;
        		 		color:#4a4a4a;
        		 		overflow:hidden;
        		 	}
        		 	.mv-channel{
        		 		display:block;
        		 		height:18px;
        		 		line-height:18px;
        		 		overflow:hidden;
        		 	}
        		 }
        		 li.echo-famous{
        		 	width:107px;
        		 	height:auto;
        		 	.pic{
        		 		width:107px;height:107px;
        		 		margin-bottom:8px;
        		 		img{
        		 			width:107px;
        		 			height:107px;
        		 			object-fit:cover;
        		 		}
        		 	}
        		 	.mv-title{
        		 		span{
        		 			display:inline-block;
        		 			max-width:111px;
        		 			height:20px;
        		 			overflow:hidden;
        		 			white-space:nowrap;
        		 			text-overflow:ellipsis;
        		 		}
        		 	}
        		 	.mv-channel{
        		 		color:#6b6b6b;
        		 		font-size:12px;
        		 		em{
        		 			float:left;
        		 			height:18px;
        		 			margin-right:4px;
        		 		}
        		 		em.follow{
        		 			max-width:110px;
        		 			overflow:hidden;
        		 			white-space:nowrap;
        		 			text-overflow:ellipsis;
        		 		}
        		 	}
        		 }
        	}
        }
        .expalbum{
            display:block;
            width:696px;
            margin:50px auto 0;
            .expalbum-list{
                margin-top:23px;
                li{
                    float:left;
                    width:150px;
                    margin-right:29px;
                    .album-img{
                        display:block;
                        width:150px;
                        height:150px;
                    }
                    h2{
                        color:#333;
                        font-size:14px;
                        margin-top:10px;
                        width:150px;
                        text-overflow: ellipsis;
                        overflow:hidden;
                        white-space:nowrap;
                    }
                    h3{
                        font-size:12px;
                        color:#666;
                        width:150px;
                        text-overflow: ellipsis;
                        overflow: hidden;
                        white-space:nowrap;
                    }
                    ul{
                        margin-top:2px;
                        li.on{
                            background:url(../../public/img/8550c78282875886bf69eaa715c49ad7.png) no-repeat;
                            background-size: 100%;
                        }
                        li{
                            width:11px;
                            height:11px;
                            float:left;
                            margin:0 5.7px 0 0;
                            background: url(../../public/img/7a06cb7b570284e3b0cec6d78ab1103d.png) no-repeat;
                            background-size: 100%;
                        }
                        li.score{
                            color:#999;
                            font-size:14px;
                            margin-left:9px;
                            position:relative;
                            top:-4px;
                            background:0 0;
                        }
                    }
                }
                li.no-margin-right{
                    margin-right:0;
                }
            }
        }
        .expmore{
            display: block;
            width:712px;
            margin:50px auto 0;
            .big-title{
                margin:0 9px;
            }
            .expmore-list{
                display: block;
                .expmore-box{
                    float:left;
                    width:160px;
                    height:284px;
                    background:#f4f4f4;
                    margin:25px 9px 0;
                    .pic{
                        display: block;
                        position:relative;
                        height:160px;
                        img{
                            width:160px;
                            height:160px;
                            object-fit: cover;
                        }
                        .duration{
                            display:block;
                            position:absolute;
                            left:0;
                            bottom:5px;
                            height:14px;
                            line-height: 14px;
                            font-size: 12px;
                            color:#fff;
                            margin-left:8px;
                            .playbtn{
                                display:inline-block;
                                width:14px;height:14px;
                                background: url(../../public/img/565347b11acc61d31c49edda7e0d9036.png) no-repeat;
                                vertical-align: top;
                                margin-right:5px;
                            }
                        }
                    }
                    .song-name{
                        display: block;
                        margin:12px 15px 0;
                        font-size: 14px;
                        line-height: 18px;
                        height:36px;
                        color:#4a4a4a;
                        word-break: break-all;
                        overflow: hidden;
                    }
                    h4{
                        margin:15px 15px 0;
                        font-size: 12px;
                        line-height: 12px;
                        height:14px;
                        color:#9b9b9b;
                        overflow: hidden;
                        white-space:nowrap;
                        text-overflow: ellipsis;
                        a{
                            color:#6ed56c;
                            font-size: 14px;
                            margin-right:5px;
                        }
                    }
                }
            }
        }
        .status-list{
            display: block;
            margin:10px 5px 0;
            height:auto;
            line-height: 14px;
            li{
                float:left;
                display:inline-block;
                width:50px;color:#6b6b6b;
                text-align: center;
                font-size: 12px;
                margin:0;
                overflow: hidden;
                white-space:nowrap;
                text-overflow: ellipsis;
                i.share{
                    background: url(../../public/img/ae488640107567b16640846a2375beb3.png) 0 -23px no-repeat;
                }
                i.like{
                    background: url(../../public/img/ae488640107567b16640846a2375beb3.png) -16px -23px no-repeat;
                }
                i.comment{
                    background: url(../../public/img/ae488640107567b16640846a2375beb3.png) -34px -23px no-repeat;
                }
                i{
                    display: inline-block;
                    height:14px;
                    width:14px;
                    vertical-align: top;
                }
                span{
                    display: block;
                    margin-top:2px;
                    overflow: hidden;
                    white-space:nowrap;
                }
            }
        }
        .big-title{
            display:block;
            height:28px;
            line-height:28px;
            font-size:24px;
            color:#666;
            .fl{
                float:left;
            }
            .fr{
                float:right;
                .fr-a{
                    font-size:16px;
                    color:#6ed56c;
                }
                a{
                    font-size:16px;
                    color:#6ed56c;
                }
            }
            .play-all{
                display: inline-block;
                height:28px;
                line-height:28px;
                font-size: 14px;
                color:#fff;
                font-style: normal;
                background-color: #6ed56c;
                background-image:url(../../public/img/b99faa6fcbf72a7ac2843043864e2236.png);
                background-repeat: no-repeat;
                background-position:4px 4px;
                border-radius: 14px;
                padding:0 10px;
                margin-left:24px;
                vertical-align: bottom;
                text-indent: 20px;
                cursor: pointer;
            }
        }
    }
    .main-right{
        float:right;
        width:230px;
        h3{
            font-size: 18px;
            height:18px;
            line-height: 18px;
            font-weight: 400;
            color:#666;
            margin-top:20px;
            .play-all{
                float:right;
                display: inline-block;
                height:22px;
                line-height: 22px;
                font-size: 12px;
                color:#fff;
                font-style: normal;
                background-color: #6ed56c;
                background-image: url(../../public/img/b99faa6fcbf72a7ac2843043864e2236.png);
                background-repeat: no-repeat;
                background-position:2px 1px;
                border-radius: 14px;
                padding:0 10px;
                margin-top:-2px;
                vertical-align: bottom;
                text-indent: 17px;
                cursor: pointer;
            }
        }
        .explistening{
            display: block;
            margin:22px 0;
            a{
                display:block;
                height:68px;
                margin-bottom:16px;
            }
            .pic{
                float:left;
                width:68px;
                height:68px;
                img{
                    width:68px;
                    height:68px;
                    object-fit: cover;
                }
            }
            .hgroup{
                float:left;
                margin-left:10px;
                width:140px;
                h4{
                    font-size: 12px;
                    color:#4a4a4a;
                    line-height: 16px;
                    height:48px;
                    overflow: hidden;
                }
                h5{
                    font-size: 12px;
                    color:#999;
                    line-height: 14px;
                    height:14px;
                    margin-top:6px;
                    overflow: hidden;
                }
            }
        }
    }
}
/*声明变量 是原创榜和视频榜的颜色*/
$sound-origin-text:#75bbe1;
$mv-hot-text:#7496d2;
/*此时所引用的.sound-origin是用于定位*/
.web-index .main-left .echo-common.sound-origin .sound-list {
    .index1 .info .top-index{
        color:$sound-origin-text;
    }
    .index23 ul li .sound-info .title .index{
        background: $sound-origin-text;
    }
}
/*此时所引用的.mv-hot是用于定位*/
.web-index .main-left .echo-common.mv-hot .sound-list{
    .index1 .info .top-index{
        color: $mv-hot-text;
    }
    .index23 ul li .sound-info .title .index{
        background: $mv-hot-text;
    }
}

.fade-enter, .fade-leave-active, .login-modal-bg, .v-photo-panel.fade-enter, .v-photo-panel.fade-leave-active{
    opacity: 0;
}
</style>