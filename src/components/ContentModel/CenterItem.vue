<template>
	<div class="center">
			<div class="left">
				<b>我们越吧</b>
				<small>恋人家人好盆友</small>
				<span>
					<img src="../../assets/img/lover.png" alt="">
				</span>
			</div>
			<div class="right">
				<div class="r_top">
					<span>
						<b>低价超值</b>
						<small>十元惠生活</small>
					</span>
					<span><img src="../../assets/img/hanbaobao.jpg" alt=""></span>
				</div>
				<div class="r_bottom">
					<span>
						<b>名店抢购</b>
						<small>距离</small>
						<img src="../../assets/img/sanmingzhi.png" alt="">
					</span>
					<span>
						<b>低价超值</b>
						<small>距离结束还有</small>
						
						<time class="time-panel" v-cloak v-show='!getStatus' >
							<b>{{hh}}</b>:
							<b>{{mm}}</b>:
							<b>{{ss}}</b>		
						</time>
					</span>
				</div>
			</div>
	</div>
</template>

<style lang='scss' scoped>
	@import '../../assets/css/center.scss';
	[v-cloak] {
  display: none;
	}
</style>
<script>
	import {mapGetters,mapActions} from 'vuex'
	export default{
		data(){
			return {
				hh:'',
				mm:'',
				ss:''
			}
		},
		computed:mapGetters([
			'getStatus'
			]),
		methods:{
		time(fTime){ //倒计时函数
				var fulturTime=new Date(2017,4,7,20,0,0);
				var currentTime=new Date();
				var value=fulturTime-currentTime;
				this.hh=this.checkTime(Math.floor(value/1000/60/60%24));
				this.mm=this.checkTime(Math.ceil(value/1000/60%60));
				this.ss=this.checkTime(Math.floor(value/1000%60));
		},
		checkTime(i){    
               if (i < 10) {    
                   i = "0" + i;    
                }    
               return i;    
           	 } 
		},
		beforeCreated(){

		},
		mounted(){
			setInterval(function(){
				this.time()
			}.bind(this),0)
		}
	}
</script>