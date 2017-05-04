<template>
	<div class='travelType common' num='1' @click='remove'>
		<div class='travelItems'>
			<p @click='touggle'>全部</p>
			<p @click='touggle'>景点</p>
			<p @click='touggle'>温泉</p>
			<p @click='touggle'>主题公园</p>
			<p @click='touggle'>展览馆</p>
			<p @click='touggle'>农家乐</p>
			<p @click='touggle'>水上乐园</p>
			<p @click='touggle'>动植物园</p>
			<p @click='touggle'>海洋馆</p>
			<p @click='touggle'>游船</p>
			<p @click='touggle'>滑雪</p>
			<p @click='touggle'>高空观景</p>
			<p @click='touggle'>漂流</p>
		</div>
	</div>
</template>
<script>

	export default {
		methods:{
			touggle:function(){
				$('.travelItems').on('click','p',function(){
					$(this).addClass('active').siblings().removeClass('active');
					
					$('.list li:first-child').text($(this).text())
					$('.travelType').removeClass('show');
				})
			},
			remove(ev){
				let target = ev.target;
				if($(target).hasClass('travelType')){
					$('.travelType').removeClass('show');
				}
			}
		}
	}
</script>
<style lang='scss' >
	@import '../../assets/css/travel/travelType.scss';
</style>