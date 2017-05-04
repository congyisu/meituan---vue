<template>
	<div>
	<!-- <header class="header">
		<a href="javascript:history.back()">
		<span class="icon iconfont icon-arrows-left back" >
		</span>
		</a>
		<span class="title">找回登录密码</span>
		<span class="nav">

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
		</span>	
	</header> -->
	<NavArea></NavArea>
		<form action="">
				<div>
					<input type="text" placeholder="手机/邮箱/用户名">
				</div>
				<div class="code">
					<input type="text" placeholder="请输入右图验证码">
					<span class="yanzhengma">
						验证码
					</span>
					<button class="changeCode">换一张</button>
				</div>
				<button class="next">
					下一步
				</button>
				<p class="alert-info">
					<a href="">手机号无法接受短信</a>
				</p>

		</form>
	</div>
</template>
<style lang='scss'>
	@import '../../../assets/css/navCommon.scss';
	form{
		div{
			width:100%;
			height:45px;
			line-height: 45px;
			background: #fff;
			color:#dfdfdf;
			padding-left:15px;
			&:first-child{
				input{

					width:100%;
					height:100%;
				}
			}
			.code{
				display: flex;
			}
			.yanzhengma,.changeCode{
					padding:10px;
				}
			.changeCode{
				height:30px;
				border:none;
				padding: 2px 15px;
				background:#fff;
				border:1px solid $titleColor;
				border-radius:2px;
				color:$titleColor;

			}
			input{
					flex:1;
					height:45px;
				}

		}
		.next{
				width:96%;
				display: block;
				text-align: center;
				height: 50px;
				background: $titleColor;
				line-height: 50px;
				border:none;
				margin:10px auto;
				font-size:16px;

				color:#Fff;
				border-radius:5px;
			}
		.alert-info{
			margin-top:10px;
			text-align: center;
			a{
				color:$titleColor;
			}
		}
	}
</style>
<script scoped>
	import NavArea from '../Nav.vue';
	export default{
		components:{
			NavArea
		}
		
	}
</script>