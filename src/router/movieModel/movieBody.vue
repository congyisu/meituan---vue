<template>
    <div>
        <Loading3 v-if="loading1"></Loading3>
        <div class="movie-body">
            <div class="moviebanner">
                <div class="moviebanner-tit">
                    <h3>热映影片</h3>

                    <p>查看全部<span class="iconfont icon-xiao-arrows-right"></span></p>
                </div>
                <div class="swiper-container moviebanner-cont">
                    <div class="swiper-wrapper">
                        <a href="javascript:;" class="swiper-slide item">
                            <img alt="攻壳机动队"
                                 src="//p0.meituan.net/movie/70f7bd4ecc4817ccd8d1287cbcf4dbb7772081.jpg.webp@174w_244h_1e_1c">

                            <p class="movieName">攻壳机动队</p>

                            <p class="movieScore">7.6分</p>
                        </a>
                        <a href="javascript:;" class="swiper-slide item">
                            <img alt="金刚：骷髅岛"
                                 src="//p0.meituan.net/movie/7bba601685691f8d7c2bf07a1d5af2f6155618.jpg.webp@174w_244h_1e_1c">

                            <p class="movieName">金刚：骷髅岛</p>

                            <p class="movieScore">8.3分</p>
                        </a>
                        <a href="javascript:;" class="swiper-slide item">
                            <img alt="速度与激情8"
                                 src="//p1.meituan.net/movie/af297f59e363ce96290dfea22f6fea0c153020.jpg.webp@174w_244h_1e_1c">
                            <span class="imgTag">预售</span>

                            <p class="movieName">速度与激情8</p>

                            <p class="movieScore"> 275037人想看 </p>
                        </a>
                        <a href="javascript:;" class="swiper-slide item">
                            <img alt="嫌疑人x的献身"
                                 src="//p1.meituan.net/movie/1d940cb2aee0a0b53f4977b356a74cb0737745.png.webp@174w_244h_1e_1c">

                            <p class="movieName">嫌疑人x的献身</p>

                            <p class="movieScore">8.6分</p>
                        </a>
                        <a href="javascript:;" class="swiper-slide item">
                            <img alt="非凡任务"
                                 src="//p1.meituan.net/movie/a3b74ced20ccb0e372ee9dc22a4a3772517824.jpg.webp@174w_244h_1e_1c">

                            <p class="movieName">非凡任务</p>

                            <p class="movieScore">8.7分</p>
                        </a>
                        <a href="javascript:;" class="swiper-slide item">
                            <img alt="绑架者"
                                 src="//p1.meituan.net/movie/b6a6e36d8b40335fc3aeab6953bf18ce322318.jpg.webp@174w_244h_1e_1c">

                            <p class="movieName">绑架者</p>

                            <p class="movieScore">8.4分</p>
                        </a>
                        <a href="javascript:;" class="swiper-slide item">
                            <img alt="美女与野兽"
                                 src="//p1.meituan.net/movie/acf88770d5b1d548bf8732b0691600a9697009.jpg.webp@174w_244h_1e_1c">

                            <p class="movieName">美女与野兽</p>

                            <p class="movieScore">8.2分</p>
                        </a>
                        <a href="javascript:;" class="swiper-slide item">
                            <img alt="一念无明"
                                 src="//p1.meituan.net/movie/ae29c9c2ee4528046316e15746ebb7ef560801.jpg.webp@174w_244h_1e_1c">

                            <p class="movieName">一念无明</p>

                            <p class="movieScore"> 3042人想看 </p>
                        </a>
                        <a href="javascript:;" class="swiper-slide item">
                            <img alt="有完没完"
                                 src="//p0.meituan.net/movie/5a9847f9263fa069e28cbdad7984844c755880.jpg.webp@174w_244h_1e_1c">

                            <p class="movieName">有完没完</p>

                            <p class="movieScore">7.8分</p>
                        </a>
                        <a href="javascript:;" class="swiper-slide item">
                            <img alt="冰雪大作战"
                                 src="//p1.meituan.net/movie/f085eca9158e68ce447fc5d7e47f818c1877485.jpg.webp@174w_244h_1e_1c">

                            <p class="movieName">冰雪大作战</p>

                            <p class="movieScore">7.6分</p>
                        </a>
                        <a href="javascript:;" class="swiper-slide item">
                            <img alt="大话西游之大圣娶亲"
                                 src="//p1.meituan.net/movie/df2104534a9f68065084c413ac564811767329.jpg.webp@174w_244h_1e_1c">
                            <span class="imgTag">预售</span>

                            <p class="movieName">大话西游之大圣娶亲</p>

                            <p class="movieScore"> 58929人想看 </p>
                        </a>
                        <a href="javascript:;" class="swiper-slide item">
                            <img alt="点五步"
                                 src="//p1.meituan.net/movie/c9f5847560183feb32c7687be4ac46f1968218.jpg.webp@174w_244h_1e_1c">

                            <p class="movieName">点五步</p>

                            <p class="movieScore"> 535人想看 </p>
                        </a>
                    </div>
                </div>
            </div>
            <div class="movielist">
                <div class="movielist-tit"  :class="{'mask-active':state}" >
                    <a href="javascript:;" data-id="1" @click='show($event)'>全部
                        <span class="iconfont icon-arrows-bottom"></span></a>
                    <a href="javascript:;" data-id="2" @click='show($event)'>距离最近<span
                            class="iconfont icon-arrows-bottom"></span></a>
                </div>
                <div class="movielist-cont">
                    <div class="movielists" v-for="item in movieList">
                        <div class="movielists-left">
                            <h3>{{item.nm}}</h3>
                            <span>座</span>

                            <p class="movieprice"><b>{{item.price}}</b>元起</p>
                        </div>
                        <div class="movielists-right">{{item.distance}}</div>
                    </div>
                </div>
                <div class="moviefilter" :class='{"slide":state}'>
                    <p class="layer" @click='remove' style="display:block"></p>
                    <div class="movietab-cont" v-show='allstate'>
                        <div class="movietab">
                            <p @click='changes($event)'><a href="javascript:;" class="bgs">商区</a><a href="javascript:;">地铁站</a></p>
                        </div>
                        <div class="movietab-all-cont">
                            <ul class="movietab-cont-shop" v-show='xianshi' >
                                <li><a href="javascript:;">全部</a></li>
                                <li><a href="javascript:;">朝阳区</a><span>54<em class="iconfont">&#xe64a;</em></span></li>
                                <li><a href="javascript:;">海淀区</a><span>33<em class="iconfont">&#xe64a;</em></span></li>
                                <li><a href="javascript:;">丰台区</a><span>20<em class="iconfont">&#xe64a;</em></span></li>
                                <li><a href="javascript:;">大兴区</a><span>15<em class="iconfont">&#xe64a;</em></span></li>
                                <li><a href="javascript:;">东城区</a><span>13<em class="iconfont">&#xe64a;</em></span></li>
                                <li><a href="javascript:;">通州区</a><span>11<em class="iconfont">&#xe64a;</em></span></li>
                                <li><a href="javascript:;">西城区</a><span>11<em class="iconfont">&#xe64a;</em></span></li>
                                <li><a href="javascript:;">房山区</a><span>9<em class="iconfont">&#xe64a;</em></span></li>
                                <li><a href="javascript:;">昌平区</a><span>8<em class="iconfont">&#xe64a;</em></span></li>
                                <li><a href="javascript:;">顺义区</a><span>6<em class="iconfont">&#xe64a;</em></span></li>
                                <li><a href="javascript:;">怀柔区</a><span>4<em class="iconfont">&#xe64a;</em></span></li>
                                <li><a href="javascript:;">石景山区</a><span>3<em class="iconfont">&#xe64a;</em></span></li>
                                <li><a href="javascript:;">门头沟</a><span>3<em class="iconfont">&#xe64a;</em></span></li>
                                <li><a href="javascript:;">平谷区</a><span>2<em class="iconfont">&#xe64a;</em></span></li>
                                <li><a href="javascript:;">密云区</a><span>2<em class="iconfont">&#xe64a;</em></span></li>
                                <li><a href="javascript:;">延庆区</a><span>1<em class="iconfont">&#xe64a;</em></span></li>
                            </ul>
                            <ul class="movietab-cont-subway" v-show='!xianshi'>
                                <li><a href="javascript:;">全部</a><span>195</span></li>
                                <li><a href="javascript:;">1号线</a><span>28<em class="iconfont">&#xe64a;</em></span></li>
                                <li><a href="javascript:;">2号线</a><span>24<em class="iconfont">&#xe64a;</em></span></li>
                                <li><a href="javascript:;">4号线</a><span>19<em class="iconfont">&#xe64a;</em></span></li>
                                <li><a href="javascript:;">5号线</a><span>38<em class="iconfont">&#xe64a;</em></span></li>
                                <li><a href="javascript:;">6号线</a><span>15<em class="iconfont">&#xe64a;</em></span></li>
                                <li><a href="javascript:;">7号线</a><span>16<em class="iconfont">&#xe64a;</em></span></li>
                                <li><a href="javascript:;">8号线</a><span>5<em class="iconfont">&#xe64a;</em></span></li>
                                <li><a href="javascript:;">9号线</a><span>10<em class="iconfont">&#xe64a;</em></span></li>
                                <li><a href="javascript:;">10号线</a><span>46<em class="iconfont">&#xe64a;</em></span></li>
                                <li><a href="javascript:;">13号线</a><span>18<em class="iconfont">&#xe64a;</em></span></li>
                                <li><a href="javascript:;">14号线</a><span>12<em class="iconfont">&#xe64a;</em></span></li>
                                <li><a href="javascript:;">15号线</a><span>19<em class="iconfont">&#xe64a;</em></span></li>
                                <li><a href="javascript:;">亦庄线</a><span>6<em class="iconfont">&#xe64a;</em></span></li>
                                <li><a href="javascript:;">八通线</a><span>8<em class="iconfont">&#xe64a;</em></span></li>
                                <li><a href="javascript:;">大兴线</a><span>9<em class="iconfont">&#xe64a;</em></span></li>
                                <li><a href="javascript:;">房山线</a><span>3<em class="iconfont">&#xe64a;</em></span></li>
                                <li><a href="javascript:;">昌平线</a><span>2<em class="iconfont">&#xe64a;</em></span></li>
                                <li><a href="javascript:;">机场线</a><span>3<em class="iconfont">&#xe64a;</em></span></li>
                            </ul>
                        </div>
                    </div>
                    <div class="movietab-order" v-show='!allstate'>
                        <ul class="movietab-cont-order">
                            <li>距离最近</li>
                            <li>评价最高</li>
                            <li>价格最低</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="es6">

    export default {
        data () {
            return {
                movieList: [],
                loading1: true,
                state:false,
                allstate:true,
                xianshi:true

            }
        },
        methods: {
            //遮罩层
            show(e){
                this.state=true;
                var target=e.target;
               var targetId=target.getAttribute("data-id");
               if(target.tagName=='SPAN'){
                    target=target.parentNode;
                }
                //如果点击的上面箭头的朝上的 则将整个大盒子隐藏
                if(target.className=='ac'){
                    this.state=false;
                    document.querySelector(".wrap").scrollTop=0;
                    this.hide();
                    return;
                }
                //首先先将a标签置为初始状态
                this.hide();
                //给点击的a标签添加样式
                target.classList.add("ac");
               target.children[0].className='iconfont icon-arrows-top'
             
              
               
               //如果点击的是全部将全部对应的div显示出来
                if(targetId==1){ 
                    this.allstate=true;
                    
                }else{
                    this.allstate=false;
                }
                
            },
            //遍历a标签将a标签还原成初始的状态
            hide(){
                var as=document.querySelectorAll(".movielist-tit a"); 
                this.xianshi=true;
                for(var i=0;i<as.length;i++){
                as[i].classList.remove('ac');
                as[i].children[0].className='iconfont icon-arrows-bottom'
               }
            },
         
           //点击遮罩层将盒子隐藏并且将滚动条置顶
            remove(){
                this.state=false;
                this.hide();
                document.querySelector(".wrap").scrollTop=0;
            },
            //点击商圈和地铁的时候切换
            changes(e){
                var target=e.target,
                    as=document.querySelectorAll(".movietab a")
                this.xianshi=!this.xianshi;
                for(var i=0;i<as.length;i++){
                        as[i].className='';
                }
                target.className='bgs';
            }
        },
        mounted () {
            //轮播图
            var swiper = new Swiper('.swiper-container', {
                slidesPerView: 3.5,   //控制显示张数
                freeMode: true,
                spaceBetween: 15      //控制图与图之间的间隔
            });
            //渲染数据
            this.$http.get('../../src/assets/data/movies.json')
                    .then(function (response) {
                        this.movieList = response.body.cinemas;
                        this.loading1 = false;
                      
                    })
                    .catch(function (response) {
                        console.log(response);
                    });
            //固定导航栏:当滚动高度高于导航栏上方的高度时，将导航栏定位在最顶端
            var movieContainer = document.querySelector(".wrap");
            var navbar = document.querySelector(".movielist-tit");
            movieContainer.addEventListener("scroll", ()=> {
                if (movieContainer.scrollTop >= 273.78) {
                    navbar.classList.add("mask-active");
                } else {
                    navbar.classList.remove("mask-active");
                }
            }, false)
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../assets/css/movieBody.scss";
</style>