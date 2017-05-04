<template>
	<div class="listmenu">
		<p class="like">猜你喜欢</p>
		<dl class="list-item" v-for="(item,index) in list">
			<dt><img :src="item.image_path" alt=""></dt>
			<dd>
				<p class="food-name">{{item.name}}</p>
				<p class="food-des">{{item.description}}</p>
				<p class="food-price"><b class="price">{{item.average_cost}}<i>元</i></b> <span>门市价:{{item.float_delivery_fee}}元</span><span class="saled">已售{{item.recent_order_num
}}</span></p>
			</dd>
		</dl>
		
	</div>
</template>
<style lang='scss'>
	@import '../../assets/css/listmenu.scss';
</style>
<script>


	export default{
		data(){
			return {
				list:[]
			}
		},
		mounted:function(){
			//this.fetchData();
		},
		methods:{
		
		},
		computed:{

		},
		created:function(){
			//console.log(this.$http.get)
			this.$http.get("../../src/assets/data/restaurants.json").then((data)=>{
			this.list=data.data;
		 })
		}


		}
			

	
</script>