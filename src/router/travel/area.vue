<template>
	<div class='area common' num='2' @click='remove'>
		<div class='areaItems'>
			<p @click='touggle'>附近</p>
			<p @click='touggle'>热门地标</p>
			<p @click='touggle'>商圈</p>
			<p @click='touggle'>地铁站</p>
			<p @click='touggle'>不限</p>
		</div>
	</div>
</template>
<script>
	
	export default {
		methods:{
			touggle:function(){
				$('.areaItems').on('click','p',function(){
					$(this).addClass('active').siblings().removeClass('active');
					$('.area').removeClass('show')
					
					$('.list li').eq(1).text($(this).text())
				})

			},
			remove(ev){
				let target = ev.target;
				if($(target).hasClass('area')){
					$('.area').removeClass('show');
				}
			}
		}
	}
</script>
<style >
	.area{
		width:100%;
		height:100%;
		background:rgba(0,0,0,.5);
		position:absolute;
		left:0;
		top:0;
		display:none;
	}
	.area .areaItems{
		width:100%;
		background:#fff;
	}
	.area .areaItems p{
		line-height:44px;
		height:44px;
		font-size:12px;
		color:#666;
		text-indent:23px;
	}
	.area .areaItems p.active{
		background:#eee;
		color:#06C1AE;
	}
</style>