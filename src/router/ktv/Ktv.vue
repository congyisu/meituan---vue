<template>
  <div id="ktv">
    <header class="head">
      <p> <a href="javascript:history.back()">
      <i class="icon-arrows-left iconfont"></i> 
      </a></p>
      
      <p>分类</p>
      <p>
        <router-link tag='span' to='/person'>
          <i class="icon-ren iconfont"></i><br>
          <a href="#" class="my">我的</a>
        </router-link>
        <router-link tag='span' to='/search'>
          <i class="icon-search iconfont"></i><br>
          <a href="#" class="s">搜索</a>
      </router-link>
      </p>
    </header>
    <section class="banner">
       <img src="//p1.meituan.net/mmc/dbc70b32f22415bc55d1523d7141735c18365.jpg" alt="iphone客户端下载">
    </section>
    <div class="nav-bar">
      <ul class="nav">
        <li>KTV<span></span></li>
        <li>全城<span></span></li>
        <li>默认排序<span></span></li>
        <li>筛选<span></span></li>  
      </ul>
    </div>
    <dealBox></dealBox>
    
    <div class="location">
      当前位置：<span>北京团购 ></span><span> ktv团购</span>
    </div>
    <div class="footer">
      <div class="login">
        <span>登录</span>
        <span>注册</span>
        <span>城市：<label>北京</label></span>
      </div>
      <div class="foot-list">
        <a href="javascript:;">首页</a>
        <a href="javascript:;">我的</a>
        <a href="javascript:;">美团下载</a>
        <a href="javascript:;">电脑板</a>
        <a href="javascript:;">帮助</a>
      </div>
      <div class="lian">
        <span>友情链接：</span>
        <span>
          <a href="javascript:;">猫眼电影</a>
          <a href="javascript:;">大众点评</a>
          <a href="javascript:;">大众点评下载</a>
        </span>
      </div>
      <div class="foot-last">
        <p>@2017 美团网 京ICP证070791号</p>
        <p class="kong"></p>
      </div>
    </div>
    <div class="jiantou">
      <i class="icon-top iconfont"></i>
    </div>
    
  </div>
</template>

<script>
import dealBox from './list.vue';   //定义组件
export default {
  components:{
    dealBox
  },
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{

  },
  mounted:function(){
    $('.nav li').click(function(){
      //切换上下箭头
      if(!$(this).hasClass('bar-active')){
        $(this).addClass('bar-active').siblings().removeClass()
        $("#ktv").scrollTop(96);
        $('.filter-box').addClass('filter-box-active');
        $('.nav').addClass('position');
        $('.banner').css('margin-bottom','52px');
      }else{
        $('.banner').css('margin-bottom',0);
        $(this).removeClass('bar-active')
        $('.filter-box').removeClass('filter-box-active');
        setTimeout(function(){
          $('.nav').removeClass('position');
        },300)
      }
      var ind=$(this).index();
      $('.filter-box').css('left','-'+ind+'00%');
      //商区地铁站切换
      $('.city-nav span').click(function(){
        $(this).addClass('city-active').siblings().removeClass();
        var ind=$(this).index();
        $('.city-list div').eq(ind).removeClass('none').siblings().addClass('none');
      })
    })
  }
}
</script>

<style lang="scss">
  $baseColor:#06c1ae;

  body,html{
    height:100%;
  }
  .none{
    display:none !important;
  }
  .position{
    position: absolute;
    z-index: 99;
    top: 0;
    background: #fff;
  }
  #ktv{
    width:100%;
    height:100%;
    background: #eee;
    overflow:scroll;
    .list{
      display: block;
    }

    .head{
      height:4rem;
      line-height: 4em;
      width:100%;
      display:flex;
      justify-content:space-between;
      background:$baseColor;
      color:#fff;
      i:before{
        font-size:18px;
      }
      .my{
        position:absolute;
        right: 14%;
        top: 28px;
      }
      p{
        font-size:3em;
        &:nth-child(1){
          margin-left:10px;
          font-size:4em;
        }
        &:nth-child(2){
          
        }
        &:nth-child(3){
          margin-right:10px;
          span{
            line-height:1em;
            float:left;
            margin-top:.5em;
            text-align:center;
            margin-left:1em;
            a{
              font-size:.5em;
              color:#fff;
            }
          }
        }
      }
    }
    .banner{
      height:4rem;
      img{
        width:100%;
        height:100%;
      }
    }
    .nav-bar{
      width:100%;
      .nav{
        height:3.5rem;
        display:flex;
        width:100%;
        li{
          flex:1;
          text-align:center;  
          line-height: 3.5rem;
          border-bottom:1px solid #999;
          border-right:1px solid #999;
          color:#999;
          span{
            &:before{
              content:'';
              width:0;
              height:0;
              margin-left:5px;
              display:inline-block;
              border-width: 8px 5px 0 5px;
              border-style: solid;
              border-color: #999 transparent;
            }
          }
          &.bar-active{
            color:$baseColor;
            span{
              &:before{
                content:'';
                width:0;
                height:0;
                margin-left:5px;
                display:inline-block;
                border-width: 0 5px 8px 5px;
                border-style: solid;
                border-color: $baseColor transparent;
              }
            }
          }
        }
      }
      background: #fff;
    }
    .deal-list{
      background:#fff;
      margin-top:10px;
      .list-top{
        border-bottom:1px solid #eee;
        dl{
          display:flex;
          padding:10px;
          dt{
            width:5em;
            height:5em;
            margin-right:10px;
            img{
              min-width:100%;
              height:100%;
            }
          }
          dd{
            font-size:1.5rem;
            flex:1;
            width: 0;
            p{
              width:100%;
              &:nth-child(1){
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
              }
              &:nth-child(2){
                color:#f90;
                i{
                  font-size:.5rem;
                }
                span{
                  font-size:.5rem;
                }
              }
              &:nth-child(3){
                font-size:.5rem;
                span{
                  &:nth-child(1){
                    color:$baseColor;
                    b{
                      font-size:1.5rem;
                    }
                  }
                  &:nth-child(2){
                    float:right;
                    em{
                      font-style:normal;
                      &:nth-child(2){
                        margin-left:15px;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      .list-bottom{
        padding-left:6.5rem;
        p{
          line-height:2.5rem;
          i{
            font-style:normal;
            padding:2px;
            color:#fff;
            margin-right:5px;
            background:#f5716e;
          }
          &:nth-child(2){
            i{
              background:$baseColor;
            }
          }
        }
      }
    }
    .prev-next{
      height:3.5rem;
      background:#fff;
      margin:10px 0;
      span{
        margin:0 10px;
        margin-top:5px;
        border-radius:5px;
        display:inline-block;
        padding:5px 15px;
        color:$baseColor;
        border:1px solid $baseColor;
        &.disab{
          background:#ccc;
          border:#ccc;
          color:#999;
        }
      }
    }
    .location{
      line-height:30px;
      color:$baseColor;
      padding-left:10px;
    }
    .footer{
      .login{
        overflow: hidden;
        span{
          padding:5px 10px;
          border-radius:4px;
          color:$baseColor;
          margin-left:10px;
          border:1px solid $baseColor;
          &:nth-child(1){
            float:left;
          }
          &:nth-child(2){
            float:left;
          }
          &:nth-child(3){
            float:right;
            margin-right:10px;
            border:none;
            color:#333;
            label{
              padding:5px 20px;
              border-radius:4px;
              color:$baseColor;
              border:1px solid $baseColor;
            }
          }
        }
      }
      .foot-list{
        padding-top:20px;
        height:50px;
        a{
          display:inline-block;
          padding:0 4.5%;
          color:$baseColor;
          border-right:1px solid #ccc;
          &:last-child{
            border:none;
          }
        }
      }
      .lian{
        padding-left:15px;
        span{
          a{
            margin-right:15px;
            color:$baseColor
            ;
          }
        }
      }
      .foot-last{
        border-top:1px solid #ccc;
        margin-top:20px;
        position:relative;
        background:#eee;
        p{
          position:absolute;
          top:-9px;
          left:50px;
          background:#eee;
          padding:0 13px;
          z-index:5;
          &.kong{
            position:absolute;
            width:100%;
            z-index:4;
            height:20px;
            left:0;
            top:0;
            background:#eee;
          }
        }
      }
    }
    .jiantou{
      position:fixed;
      right:15px;
      bottom:15px;
      z-index:10;
      width:40px;
      height:40px;
      border-radius:50%;
      background:$baseColor;
      text-align:center;
      line-height:40px;
      color:#fff;
      i{
        font-size:20px;
      }
    }
    .filter-box-active{
      transform:translate(0,0) !important;
    }
    .filter-box{
      transform:translate(0,-125%);
      transition: transform 0.3s ease-in-out;
      background:rgba(0,0,0,.5);
      position:absolute;
      z-index:10;
      top:0;
      left:0;
      width:400%;
      height:100%;
      padding-top:3.5rem;
      .filter-list{
        background:#fff;
        height:500px;
        float:left;
        width:25%;
        position:relative;
        &:nth-child(1){
          display:flex;
          div{
            flex:1;
            border-left:1px solid #ddd;
            overflow: scroll;
            p{
              line-height:40px;
              border-bottom:1px solid #ddd;
              padding:0 10px;
              span{
                color:#ccc;
                float:right;
              }
            }
            &.ktv-left{
              p{
                span{
                  line-height: 1;
                  margin-top:15px;
                  padding:0 10px;
                  height:12px;
                  float:right;
                  border-radius:6px;
                  background:#ccc;
                  color:#fff;
                }
              }
            }
            &.ktv-right{
              background:#f6f4f0;
            }
          }

        }
        &:nth-child(2){
          padding-top:40px;
          .city-nav{
            height:40px;
            position:absolute;
            left:0;
            top:0;
            width:100%;
            display:flex;
            justify-content: center;
            span{
              display:inline-block;
              width:120px;
              height:30px;
              text-align:center;
              line-height:26px;
              border:1px solid #ddd;
              margin-top:5px;
              &.city-active{
                background:#666;
                color:#fff;
              }
            }
            border-bottom:1px solid #ddd;
          }
          .city-list{
            height:460px;
            overflow: scroll;
            .city-list-all{
              p{
                line-height: 40px;
                border-bottom:1px solid #ccc;
                padding:0 20px;
                &.area-active{
                  background:#f6f4f0;
                  color:$baseColor;
                }
                &.station-active{
                  background:#f6f4f0;
                  color:$baseColor;
                }
                span{
                  line-height: 1;
                  margin-top:15px;
                  padding:0 10px;
                  height:12px;
                  float:right;
                  border-radius:6px;
                  background:#ccc;
                  color:#fff;
                }
              }
            }
          }
        }
        &:nth-child(3){
          height:205px;
          p{
            line-height: 40px;
            border-bottom:1px solid #ccc;
            padding:0 20px;
            &.area-active{
              background: #f6f4f0;
              color:$baseColor;
            }
          }
        }
        &:nth-child(4){
          height:160px;
          p{
            padding:0 20px;
            line-height:40px;
            border-bottom:1px solid #ccc;
            span{
              float:right;
              width:24px;
              height:24px;
              margin-top:8px;
              border:1px solid #ccc;
              border-radius:3px;
            }
            &.filter-active{
              span{
                background:$baseColor;
                &:before{
                  content:"";
                  width:8px;
                  height:12px;
                  display:block;
                  border-bottom:1px solid #fff;
                  border-right:1px solid #fff;
                  transform: rotate(47deg);
                  margin: 3px 0 0 6px;
                }
              }
            }
            &.reset-save{
              background:#f6f4f0;
              color:$baseColor;
              a{
                float:right;
                color:$baseColor;
              }
            }
          }
        }
      }
    }
  }
</style>
