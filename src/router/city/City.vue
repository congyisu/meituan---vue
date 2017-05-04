<template>
	<div class="citys">
		<header class="header">
			<!-- <router-link tag='span' to='/home'> -->
			<a href="javascript:history.back()">
			<span class="icon iconfont icon-arrows-left back">
				
			</span>
			</a>	
			<!-- </router-link> -->
			<span class="title">选择城市</span>
			<span class="nav">
			<router-link to='/home'>
			<i  class="icon iconfont icon-shouye"></i><i class="daohang">首页</i>
			</router-link>	

			</span>
			<span>
			<router-link to='search'>
			<i  class="icon iconfont icon-search"></i><i class="daohang">搜索</i>
			</router-link> 
			</span>
		</header>
			<div class="content">
				<div class="location-city">
					定位城市:<span>定位失败,请手动选择</span>
				</div>
				<div class="current-location">
					<p>最近访问</p>
					<ul class="current-city">
						<li>青岛</li>
						<li>北京</li>
						<li>杭州</li>
						<li>海南</li>
					</ul>
				</div>
				<div class="hot-city">
				<!--渲染热门城市-->
					<p>热门城市</p>
					<ul class="current-city">
					<router-link tag='li' v-for='item in hotlist' :to="{path:'/home',query:{city:item}}">
						{{item}}
					</router-link>
						
					</ul>
				</div>
				<div class="charlist">
				<!--字母表-->
					<ul class="chars" @click='moveTo($event)'>
						<li v-for='x in list' :data-id='x.alpha'>{{x.alpha}}</li>
					</ul>
					<p class="clear"></p>
					<div>
					<div class="cityLists">
						
					<!--渲染城市列表-->
					<ul class="cityList" v-for='item in list'> 
						<h4 :data-id='item.alpha'>{{item.alpha}}</h4>
						<router-link tag='li' v-for='x in item.data' :data-city='x[0]' :to="{path:'/home',query:{city:x[0] }}">
						{{x[0]}}
						</router-link>
					</ul>
					</div>
				</div>
				</div>
				<FooterArea></FooterArea>
			</div>
		
		<layerBottom></layerBottom>

	
	</div>
</template>
<script>
	import LayerBottom from '../../components/LayerBottom.vue';
	import FooterArea from '../../components/ContentModel/Footer.vue';
	import axios from'axios';
	export default{
		components:{
			LayerBottom,
			FooterArea
		},
		data(){
			return {
				list:[],
				hotlist:[],
				charlist:['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
				heightCollect:{}
			}
		},
		created:function(){
			
			if(!this.list.length){
			 var promise=new Promise((resolve,reject)=>{
			 	this.$store.dispatch("showLoading");
			 	this.$http.get("../../src/assets/data/cities.json").then(function(data){
				this.list=data.body;
				this.$http.get("../../src/assets/data/hotcity.json").then(function(data){
				this.hotlist=data.body;	
				})
				resolve();
				this.$store.dispatch("hideLoading");
			})		
			 }).then(function(){
			 	//获取每个字母距离顶部的距离
			setTimeout(function(){
			var cityList=document.querySelectorAll(".cityList h4");
			var heightInfo={};
			Array.prototype.slice.call(cityList).forEach((item,index)=>{
				 heightInfo[item.getAttribute("data-id")]=item.offsetTop;	 
			})
			this.heightInfo=heightInfo;

			},10)
			 })
		};
			
			
		
		},
		mounted:function(){
			

			
		},
		methods:{
			//点击对应的城市跳转到home页面并且将点击的城市传过去
			moveTo(e){
				var target=e.target,
				char=target.getAttribute("data-id"),
				wrap=document.querySelector(".wrap");
				setTimeout(function(){
					console.log(this.heightInfo)
				console.log(this.heightInfo[char])
					wrap.scrollTop=this.heightInfo[char];
				},50)

			}

		}
	    }


	
</script>
<style lang='scss' scoped>
		@import '../../assets/css/navCommon.scss';
		@import '../../assets/css/city.scss'
		
</style>