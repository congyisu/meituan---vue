<template>
	<div class="bottom-layer">
		<span><img src="../assets/img/logo.png" alt=""></span>
		<span>
			<b>9.9元看电影</b>
			<b>快来美团手机客户端</b>
		</span>
		<span>
			<a href="">点击下载</a>
		</span>
	</div>
</template>
<style scoped>
		.bottom-layer{
			width:100%;
			height:75px;
			background:rgba(0,0,0,0.8);
			position:absolute;
			bottom:0;
			left:0;
			z-index:10;
			display: flex;
			color:#fff;
			align-items: center;
			justify-content: space-around;
		}
		.bottom-layer b{
			display:block;
		}
		.bottom-layer span{
			flex:1;
			text-align:center;
		}
		.bottom-layer span:nth-child(2){
			flex:2;
			text-align: left;
		}
		.bottom-layer img{
			width:50px;
			height:50px;
		}
		.bottom-layer span:last-child a{
			padding:8px 10px;
			border:1px solid #06c1ae;
			color:#06c1ae;
			border-radius:5px;
			margin-right:3px;
		}
</style>