<template>
	<div>
	<NavArea></NavArea>
	<div class="progress">
		<p :class="{'active':true}">输入手机号</p>
			<span class="icon iconfont icon-arrows-right"></span>
		<p :class="{'active':this.$root.yanzheng}">输入验证码</p>
		<span class="icon iconfont icon-arrows-right"></span>
		<p :class="{'active':this.$root.mima}">设置密码</p>
	</div>
	<div class="phone">
		<input type="text" :placeholder="alert" :id="id" @input='validate'>
	</div>
	<div class="check" v-if='show'>
		<input type="checkbox" id="check" class="ck" v-model='checked'   @click='change'>
		<label for="check">
			我已阅读并同意<span>《美团网用户协议》</span>
		</label>
	</div>

		<button :class="{'sub':!flag,'sub on':flag}" @click='jump' >
			{{this.$root.btnName}}
		</button>

	</div>
</template>
<style lang='scss'>
	@import '../../../assets/css/navCommon.scss';
	.progress{
		width:100%;
		height:45px;
		line-height:45px;
		display: flex;
		justify-content: space-around;
		align-items: center;
		padding:0 10px;
		font-size:12px;
		background: #fff;
		span{
			font-size:12px;
			&:before{
				font-size:12px;
			}
		}
		.active{
		color:$titleColor;
		}
	}
	.phone{
		width:100%;
		height:48px;
		line-height:48px;
		padding:0 10px;
		background:#fff;
		margin-top:10px;
		input::-webkit-input-placeholder{
			font-size:14px;
		}
		input{
			width:100%;
			height:100%;
		}
	}
	.check{
		margin:20px 10px;
		color:#999;
		input.ck[type=checkbox] {
		    -webkit-appearance: none;
		    width: 22px;
		    height: 22px;
		    margin: -5px 0;
		    border-radius:3px;
		    border: 1px solid #DDD8CE;
		    text-align: center;
		    vertical-align: middle;
		    line-height: 22px;
		    outline: 0;
				&:checked{
					background:$titleColor;
				}
				&:checked:after{
					    content: "✓";
					    font-size: 16px;
					    color:#fff;
					    font-family:base_icon;
				};
			}
		label span{
			color:$titleColor;
			margin-left:5px;
		}
	}

	.sub{
		display: block;
		width:96%;
		margin:0 auto;
		height:50px;
		height:50px;
		border:none;
		background: #DCDCDC;
		color:#B2B2B2;
		font-size:18px;
		border-radius:5px;
	}
	.on{
		background:$titleColor;
		color:#fff;
	}

</style>
<script scoped>
	import NavArea from '../Nav.vue';
	export default{
		components:{
			NavArea
		},
		data(){
			return {
				checked:true,
				flag:false,
				show:true,
				alert:'请输入手机号',
				id:'phone'
			}
		},
		methods:{
			validate(){ //手机验证
				var phone=document.querySelector("#phone").value;
				var reg=/^1(3|4|5|7|8)\d{9}/;
         			if(reg.test(phone) && this.checked){
         				this.flag=true;
         			}else{
         				this.flag=false;
         			}
   				 },
   			change(){ //改变复选框的
   				this.checked=!this.checked;
   				this.flag=this.checked;
			},
			jump(){
				this.$router.push({path:'/person/loginAccount'});
				document.querySelector(".title").innerHTML='美团网';
				document.querySelector(".sub").innerHTML='提交验证码';
				this.id='yanzhengma';
				this.show=false;
				this.$root.yanzheng=true;

			}

   			}
		
	}
</script>