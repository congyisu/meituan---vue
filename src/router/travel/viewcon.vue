<template>
	<div class='viewcon'>
		<Loading1 v-if='flag'></Loading1>
		<div class='dlCon'>
			<dl v-for='x in filter(json)'>
				<dt><img :src="x.url"></dt>
				<dd>
					<p>
						<span>{{x.title}}</span>
						<span class='ticket'>{{x.ticket}}</span>
						<span class='line'>{{x.line}}</span>
					</p>
					<p>
						<span class='stars'>{{x.rank}}星</span>
						<span class='score'>{{x.score}}分</span>
						<span class='spend'>{{x.consumer}}人消费</span>
					</p>
					<p>
						<span class='price'><b>￥{{x.startPrice}}</b>起</span>
						<span class='distance'>{{x.address}}</span>
					</p>
				</dd>
			</dl>
		</div>
		<Footercon></Footercon>
		<travelType></travelType>
		<position></position>
		<sortArea></sortArea>
		<filterArea></filterArea>
	</div>
</template>
<script>
	import Footercon from './footer.vue'
	import travelType from './travelType.vue'
	import position from './area.vue'
	import sortArea from './sortArea.vue'
	import filterArea from './filterArea.vue'

	import bus from "./bus.js"

	export default {
		components:{
			Footercon,
			travelType,
			position,
			sortArea,
			filterArea
		},
		data:function(){
			return {
				json:[],
				flag:true,
				dataCondition:null
			}
		},
		props:{
			toChild:{
				type:Object,
				require:true
			}
		},
		mounted:function(){
			this.$http.get('../../src/assets/data/data.json').then(
				function(data){
					
					this.json=data.body
					this.flag=false

				}
			)
			bus.$on("dis",(data)=>{
				this.dataCondition=data;
			})
		},
		methods:{
			filter:function(val){
				return val.sort((a,b)=>{
					return b[this.dataCondition]-a[this.dataCondition]
				})
			}
		}
	}
</script>
<style lang='scss' >
	@import '../../assets/css/travel/viewcon.scss';
</style>