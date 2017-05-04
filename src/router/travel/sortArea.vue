<template>
	<div class='sortArea common' num='3' @click='remove'>
		<div class='sortItems'>
			<p @click='fn'>智能排序</p>
			<p @click='fn("distance")'>离我最近</p>
			<p @click='fn("rank")'>评价最高</p>
			<p @click='fn'>最新发布</p>
			<p @click='fn("consumer")'>人气最高</p>
		</div>
	</div>
</template>
<script>
	
	import bus from "./bus.js"
	export default {
			data:function(){
				return {
					condi:null
				}
			},
			methods:{
				fn(val){
					bus.$emit('dis',val)
				},
				hide(){
					
					$('.sortArea').removeClass('show')
				},
				remove(ev){
					let target = ev.target;
					if($(target).hasClass('sortArea')){
						$('.sortArea').removeClass('show');
					}
				}

			},
			mounted:function(){
				$('.sortItems').on('click','p',function(){
					$('.list li').eq(2).text($(this).text())
					$('.sortArea').removeClass('show')
				})
			}
			

		}
</script>
<style scoped>
	.sortArea{
		width:100%;
		height:100%;
		background:rgba(0,0,0,.5);
		position:absolute;
		left:0;
		top:0;
		display:none;
	}
	.sortArea .sortItems{
		width:100%;
		background:#fff;

	}
	.sortArea .sortItems p{
		line-height:44px;
		height:44px;
		font-size:12px;
		color:#666;
		text-indent:23px;
	}
	.sortArea .sortItems p.active{
		background:#eee;
		color:#06C1AE;
	}

</style>