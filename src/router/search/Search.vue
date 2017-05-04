<template>
		<div>	
			<header class="header">
			<!-- <router-link tag='span' to='/home'> -->
			<a href="javascript:history.back()">
			<span class="icon iconfont icon-arrows-left back">
				
			</span>
			</a>	
			<!-- </router-link> -->
			<span class="title">搜索</span>
			<span class="nav">
			<router-link to='/home'>
			<i  class="icon iconfont icon-shouye"></i><i class="daohang">首页</i>
			</router-link>	
			</span>
			</header>
		<form action="">
			<div class="search">
				<b class="icon iconfont icon-search"></b><input type="text" placeholder="输入商家名、品类或商圈">
			</div>	
			<button class="search-btn">
				搜索
			</button>
		</form>
		<p class="clear"></p>
		<div class="list">
			<ul>
				<li class="hot">热门搜索</li>
				<li>自助餐</li>
				<li>酒店</li>
				<li>电影</li>
				<li>火锅</li>
				<li>烤肉</li>
				<li>KTV</li>
				<li>运动健身</li>
				<li>游泳</li>
				<li>西餐</li>
				<li>美容美体</li>
				<li>日韩料理</li>
			</ul>
		</div>
		<FooterArea></FooterArea>	
		<LayrtBottom></LayrtBottom>

	</div>
</template>
<style lang='scss' scoped>
	@import '../../assets/css/navCommon.scss';
		form{
			position: relative;
			margin-top:10px;
			padding:0 10px;
			overflow: hidden;
			input{
				width:80%;
				height:40px;
			}
		}
		.icon-search{
			font-size:20px;
			padding-left: 10px;
			padding-right:5px;
			color:#999;
		}
		.search{
			width:75%;
			height:40px;
			line-height: 40px;
			float: left;
			background: #fff;
			margin-right:10px;
			border-radius:5px;
		}

		.search-btn{
			display: block;
			width:65px;
			height:40px;
			line-height: 40px;
			border:none;
			background:#DCDCDC;
			color:#999;
			float: left;
			border-radius:4px;

		}
		.list{
			background: #fff;
			margin-top:10px;
			clear: both;

		}
		.list ul{
			overflow: hidden;
			padding-bottom:40px;
		}
		.list ul li{
			width:25%;
			height:45px;
			line-height: 45px;
			float: left;
			text-align: center;
			border-bottom:1px solid #eee;
			color:#999;
			&.hot{
			color:#FED187;
		}
		}

</style>
<script>
import FooterArea from '../../components/ContentModel/Footer.vue'
import LayrtBottom from '../../components/LayerBottom.vue'

export default{
	components:{
		FooterArea,
		LayrtBottom
	}
}
	
</script>