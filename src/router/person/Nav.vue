<template>
	<header class="header">
		<!-- <router-link tag='span' to='/home'> -->
		<a href="javascript:history.back()">
		<span class="icon iconfont icon-arrows-left back" @click='back'>
		
		</span>
		</a>
	
	<!-- 	</router-link> -->
		<span class="title">{{this.$root.title}}</span>
		<span class="nav" @click='navShow' id="nav">
		<i  class="icon iconfont icon-daohang"></i><i class="daohang">导航</i>	
		</span>
		<ul class="navList">
			<router-link to='/home'  @click.native='hide'>
			<li class="icon iconfont icon-shouye">首页</li>
			</router-link>
			<router-link to='/person' @click.native='hide'>
					<li class="icon iconfont icon-ren">我的</li>
			</router-link>
			<router-link to='/search'  @click.native='hide'>
					<li class="icon iconfont icon-search">搜索</li>
			</router-link>
		</ul>
	
	</header>
</template>
<style lang='scss'>
	@import '../../assets/css/navCommon.scss';
	.navList{
		width: 100px;
		 text-align: center;
		background: #06C1AE;
		color: #fff;
		height:0;
		position: absolute;
		-webkit-transition:height .2s ease-in;
		top: 51px;
    	right: 1px;
    	overflow: hidden;
		&.active{
			height: 120px;
			opacity: 0.9;
				}
		li{
			height:40px;
			line-height: 40px;
			border-bottom:1px solid #ccc;
			font-size: 12px;
			&:before{
				color:#fff;
				margin-right:10px;
				font-size:20px;
					};
				    }
			}
</style>
<script scoped>
	export default{
		data(){
			return {
				flag:true,
				title:'美团网'
			}
		},
		compoted:{

		},
		methods:{
			navShow(){			
					if(this.navList.classList.contains("active")){
						this.navList.classList.remove("active")
					}else{
						this.navList.classList.add("active")
					}
			},
			hide(){
				this.navShow();
			},
			back(){
			this.$router.go(-1);
			}
		},
	mounted:function(){
		this.navList=document.querySelector(".navList");
		this.nav=document.querySelector("#nav");
		var arr=location.href.split("/");
		var last=arr[arr.length-1];
		if(last=='loginAccount'){
			this.$root.title='注册账号';
		}
		},



	}	
</script>