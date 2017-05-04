<template>
	<div class="mainbody">
		<div class="nav">
			<span class="active" @click='move($event)' data-id='0'>
				美团账号登录
			</span>
			<span data-id='1'  @click='move($event)'>
				手机验证登录
			</span>
		</div>
		<p class="line">
			
		</p>
		<div class="content">
			
			<div class="account">
				<p><input type="text" placeholder="帐户名/手机号/Email"></p>
				<p><input type="text" placeholder='请输入您的密码'></p>
			</div>
			<div class="validate" v-show='false'>
				<p><input type="text" placeholder="请输入手机号" class="phone"><span class="code">获取验证码</span></p>
				<p><input type="text" placeholder='请输入短信验证码'></p>
			</div>
			
		</div>
		<button class="btn">登录</button>
		<div class="btn-area">
			<router-link to='/person/loginAccount' tag='span'>
				立即注册
			</router-link>
			<router-link to='/person/searchPwd' tag='span'>
			找回密码
			</router-link>
		</div>
	</div>
</template>
<style scoped lang='scss'>
		$titleColor:#06C1AE;
		.nav{
			display: flex;
			height: 40px;
			line-height:40px;
			background: #fff;
			font-size:12px;
			color:#666;
			span{
				flex: 1;
				text-align: center;
				&.active{
					color:$titleColor;
				}
			}
		}
		.line{
			height:4px;
			width:45%;
			background: $titleColor;
			margin:0 5px;
			transition:transform .3s ease-in;
		}

		.content{
			width:100%;
			overflow: hidden;
			background: #fff;
			.code{
				padding:8px 20px;
				background:#DCDCDC;
				border-radius:2px;
				color:#999;
			}		
				p{
					height:45px;
					line-height:45px;
					text-align: center;

					&:first-child{
						border-bottom:1px solid #eee;
					};
					input{
						width:90%;
						height:80%;
						border-radius:5px;
					}
					.phone{
						width:60%;
					}
				}

		}
				.btn{
				width:90%;
				height:45px;
				line-height: 45px;
				background:$titleColor;
				text-align: center;
				display: block;
				border:none;
				color:#fff;
				font-size:20px;
				margin:15px auto;
				border-radius:5px;
			}
		.btn-area{
			font-size:12px;
			padding:0 10px;
			color:$titleColor;
			display:flex;
			justify-content: space-between;
			align-items: center;
			a{
				color:$titleColor;
			}
		}

</style>
<script>
	export default{
		methods:{
			move(e){
				var target=e.target;
				var spans=document.querySelectorAll(".nav span"),
					line=document.querySelector(".line"),
					content=document.querySelectorAll(".content div"),
					index=target.getAttribute("data-id");
				for(var i=0;i<spans.length;i++){
					spans[i].classList.remove("active");
					content[i].style.display='none';
				}
				content[index].style.display='block';
				target.classList.add("active");
				line.style.transform='translateX('+index*110+'%)';
			},
			validate(){ //手机验证
				var phone=document.querySelector("#phone").value;
				var reg=/^1(3|4|5|7|8)\d{9}/;
         			if(reg.test(phone) && this.checked){
         				this.flag=true;
         			}else{
         				this.flag=false;
         			}
   				 },
		}
	}
</script>