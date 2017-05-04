<template>
	<div class='headerarea'>
		<a href="javascript:history.back()"><span class='iconfont icon-arrows-left back'   ></span></a>
		<span class='title'>周边游</span>
		<span class='navigator'>
			<i class='iconfont icon-daohang'></i>
			<i @click='navItems'>导航</i>
		</span>
		<div class='navItems'>
			<router-link to='/home' tag='li' class='indexPage'>
				<span class='iconfont icon-shouye'></span>
				首页
			</router-link>
			<router-link to='/person' tag='li' class='mine' >

				<span class='iconfont icon-ren'></span>
				我的
			</router-link>
		</div>
	</div>
</template>
<script>
	
	export default {
		methods:{
			navItems:function(){
				$('.navItems').slideToggle(100)
			},
			backForward:function(){
				alert('请返回前一页')
			}
		},
		watch:{
			$route(){
				$(".navItems").hide();
			}
		}
	}
</script>
<style lang='scss'>
	@import '../../assets/css/travel/header.scss';
</style>