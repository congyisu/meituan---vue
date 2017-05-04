<template>
  <div class="bigbox">
  <div id="app" class="wrap">
        <Loading1 v-if='getStatus'></Loading1> 
        <keep-alive>
          <router-view >
            
          </router-view>
        </keep-alive>
        <Row v-show='isShow' @click.native='back'></Row>
  </div>
  </div>
</template>

<script>
import Row from './components/Row.vue'
import{mapActions,mapGetters} from 'vuex'
export default{
  components:{
    Row
  },
  data(){
    return{
      city:'北京',
      path:''
    }
  },
   computed:mapGetters([
    'isShow',//是否显示返回顶部小图标
    'getStatus'
    ]),
  methods:{
    back(){
      document.querySelector('.wrap').scrollTop=0;
    },
  },
  mounted:function(){
    //当滚动的距离超过页面的高度的时候出现返回顶部图标
  var wrap=document.querySelector(".wrap");
    wrap.addEventListener("scroll",()=>{
       if(wrap.scrollTop>document.body.clientHeight){
        console.log("aa")
      this.$store.dispatch('showRow') //当滚动的高度超过一屏的时候出发showRow函数
    }else{
      this.$store.dispatch('hideRow')
    }
    })

  
  },
  watch:{
    $route(to,from){
     document.querySelector(".wrap").scrollTop=0;
     this.path=to.path;
     switch(this.path){
      case '/person/loginAccount':
      this.$root.title='注册账号';
      this.$root.yanzhengma=true;
      break;
      case '/person/searchPwd':
       this.$root.title='找回密码';
       break;
       case '/person':
       this.$root.title='美团网';
       case '/person/loginAccount':
       this.$root.btnName='获取验证码';
       break;
       case '/person/loginAccount/signup':
       console.log("aa")
       this.$root.title='美团网';
       this.$root.btnName='提交验证码';
       break;

     }
    }
  }
}
</script>

<style scoped>
  .wrap{
    width:100%;
    height:100%;
    overflow:auto;
    background-color: #f0efed;
  }
  .bigbox{
    width:100%;
    height:100%;
  }
  
</style>
