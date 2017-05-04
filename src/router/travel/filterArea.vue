<template>
	<div class='filterArea common' num='4' @click.stop='remove($event)'>
		<div class='filterItems'>
			<div class='play_method'>
				<h4>游玩方式</h4>
				<p>
					<a href="#" class='on' @click='tabPlayMethod'>不限</a>
					<a href="#" @click='tabPlayMethod'>门票</a>
					<a href="#" @click='tabPlayMethod'>自助游</a>
					<a href="#" @click='tabPlayMethod'>套餐</a>
				</p>
			</div>
			<div class='use_date'>
				<p @click='tabOrderDate'>
					<i>节假日可用</i>
					<span class='iconfont icon-yuan-checkbox'></span>
				</p>
				<p @click='tabOrderDate($event)'>
					<i>只订今日票</i>
					<span class='iconfont icon-yuan-checkbox'></span>
				</p>
			</div>
			<div class='view_rank'>
				<h4>景区级别</h4>
				<p>
					<a href="#" class='on' @click='tabViewRank'>不限</a>
					<a href="#" @click='tabViewRank'>全部A级</a>
					<a href="#" @click='tabViewRank'>5A</a>
					<a href="#" @click='tabViewRank'>4A</a>
					<a href="#" @click='tabViewRank'>3A</a>
				</p>
			</div>
			<div class='btns'>
				<a href="#" @click='reset'>重置</a>
				<a href="#" @click='complete'>完成</a>
			</div>
		</div>
	</div>
</template>
<script>

	
	export default {
		methods:{
			complete:function(){
				$('.filterArea').removeClass('show');
				console.log($('.filterArea').parents('.viewcon'))
				$('.filterArea').parents('.viewcon').prev().find('li').eq(3).attr('class','iconfont icon-icon');
			},
			tabPlayMethod:function(){
				$('.play_method').on('click','a',function(){
					$(this).addClass('on').siblings().removeClass('on')
				})
			},
			tabViewRank:function(){
				$('.view_rank').on('click','a',function(){
					$(this).addClass('on').siblings().removeClass('on')
				})
			},
			tabOrderDate:function(ev){
				let target = ev.target;
				let ele;
				if(target.tagName=='P'){
					ele =$(target).children().last();
				}else if(target.tagName=='I'){
					ele = $(target).next()
				}else{
					ele = target;
				}
				
				if($(ele).hasClass('icon-yuan-checkbox')){
					$(ele).removeClass('icon-yuan-checkbox')
					$(ele).addClass('icon-yuan-checkbox-checked')
				}else{
					$(ele).removeClass('icon-yuan-checkbox-checked')
					$(ele).addClass('icon-yuan-checkbox')
				}
			},
			remove(ev){
				let target= ev.target;
				if($(target).hasClass('filterArea')){
					$(".filterArea").removeClass('show');
				}
				
			},
			reset(){
				$('.play_method a:first-child').addClass('on').siblings().removeClass('on')
				$('.view_rank a:first-child').addClass('on').siblings().removeClass('on')
			}

		}
	}
</script>
<style lang='scss' >
	@import '../../assets/css/travel/filter.scss';
</style>