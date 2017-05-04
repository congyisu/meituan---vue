<template>
	<div class='navs'>
		<ul class='list'>
			<li class='iconfont icon-arrows-top' @click='tabFn($event)' num='1'>周边游</li>
			<li class='iconfont icon-arrows-top' @click='tabFn($event)' num='2'>位置区域</li>
			<li class='iconfont icon-arrows-top' @click='tabFn($event)' num='3'>智能排序</li>
			<li class='iconfont icon-arrows-top' @click='tabFn($event)' num='4'>筛选</li>
		</ul>
	</div>
</template>
<script>
	

	export default {
		data(){
			return {
				msg:'hello'
			}
		},
		methods:{
			tabFn:function(ev){
				let lis = $('.list li');
				let divs = $('.common');
				let target = ev.target;
				let att= $(target).attr('num');

				if($(target).hasClass('high')){
					target.className='iconfont icon-arrows-top';
					$(divs).each(function(i,val){
						if($(val).attr('num')==att){
							$(val).removeClass('show')
						}
					})
				}else{
					$(lis).each(function(i,val){
						val.className='iconfont icon-arrows-top';
					})
					target.className='iconfont icon-arrows-bottom high';
					$(divs).each(function(i,val){
						if($(val).attr('num')==att){
							$(val).addClass('show').siblings().removeClass('show')
						}
					})
				}
			}

		}
	}
</script>
<style lang='scss'>
	@import '../../assets/css/travel/navigator.scss';
</style>