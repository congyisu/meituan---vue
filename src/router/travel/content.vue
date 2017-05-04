<template>
	<div class='content' @scroll='reload'>
		<Navigator></Navigator>
		<Viewcon></Viewcon>
	</div>	
</template>
<script>
	import Navigator from './nav.vue'
	import Viewcon from './viewcon.vue'

	
	export default {
		components:{
			Navigator,
			Viewcon
		},
		data:function(){
			return {
				datajson:null,
				flag:true
			}
		},
		methods:{
			reload:reloadData
		}
	}

	function reloadData(){
		console.log("asdd")
		if($(".content").scrollTop()>($(".dlCon").outerHeight()-$("body").outerHeight())){
			//多次请求数据 进行逻辑处理
			if(this.flag){
				this.$http.get('./src/assets/data/data.json').then(
					(data)=>{
						//console.log(this.reload)
						let str=``;
						$.each(data.data,function(i,val){
							str+=`<dl>
										<dt><img src=`+val.url+`></dt>
										<dd>
											<p>
												<span>`+val.title+`</span>
												<span class='ticket'>`+val.ticket+`</span>
												<span class='line'>`+val.line+`</span>
											</p>
											<p>
												<span class='stars'>`+val.rank+`</span>
												<span class='score'>`+val.score+`</span>
												<span class='spend'>`+val.consumer+`</span>
											</p>
											<p>
												<span class='price'><b>`+val.startPrice+`</b>起</span>
												<span class='distance'>`+val.address+`</span>
											</p>
										</dd>
								  </dl>`
						})
						$('.dlCon').append($(str))
						this.flag=true;
					}
				)
			}

			this.flag=false;
		}
	}
</script>
<style lang='scss' >
	.content{width:100%;flex:1;overflow:auto}
</style>