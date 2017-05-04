<template>
	<ul class="navlist">
		<li><a href="javascript:;"><span class="circle icon iconfont icon-meishi meishi"></span><span>美食</span></a></li>
		<router-link to='/movie' tag='li'>
		<a href="javascript:;"><span class="circle xiaochikuaican icon iconfont icon-cat-movie"></span><span>猫眼电影</span></a>
		</router-link>
		<li><a href="javascript:;"><span class="circle jiudian icon iconfont icon-hotel"></span><span>酒店</span></a></li>
		<li><a href="javascript:;"><span class="circle xiuxianyule icon iconfont icon-xiuxianyule"></span><span>休闲娱乐</span></a></li>
		<li><a href="javascript:;"><span class="circle waimai icon iconfont icon-waimai"></span><span>外卖</span></a></li>
		<router-link to='/ktv' tag='li'>
		<a href="javascript:;"><span class="circle liren icon iconfont icon-KTV"></span><span>KTV</span></a></router-link>
		<router-link to='/travel' tag='li'>
		<a href="javascript:;"><span class="circle xuexipeixun icon iconfont icon-dingdan"></span><span>周边游</span></a>
		</router-link>
		<li><a href="javascript:;"><span class="circle jinrixindan icon iconfont icon-dingdan"></span><span>丽人</span></a></li>
		<li><a href="javascript:;"><span class="circle quanbufenlei icon iconfont icon-xiaochikuaican"></span><span>小吃快餐</span></a></li>
		<li><a href="javascript:;"><span class="circle huocepiao icon iconfont icon-huochepiao"></span><span>机票/火车票</span></a></li>
	</ul>
</template>
<style lang='scss'>
	@import '../../assets/css/navlist.scss';
</style>