<template>
	<div>
	<header class="header">
	<router-link to='/city' tag='a' class="icon iconfont icon-xiaojiantou-bottom after ">
	{{city}}
	</router-link>
	<router-link to='/search' class="search" tag='a'>
	<i class="icon iconfont icon-search"></i><span><input type="text" placeholder="输入商家/品类/商圈"></span>
	</router-link>
	<router-link tag='a' to='/person'>	
	<a class="person"><span class="icon iconfont icon-ren"></span><span>我的</span></a>		
	</router-link>	
	</header>
	</div>
</template>
<script type="text/javascript">
	
</script>
<style lang='scss' scoped>

	@import '../assets/css/header.scss';

</style>
<script>
		export default{
			data(){
				return {
					city:'北京'
				}
			},
			computed:{

			},
			watch:{
				$route(to,from){
					this.city=decodeURI(location.search).split("=")[1] || '北京';
				
				}
			}
		}
		
	
</script>
