<template>
  <div class="list">
    <div class="filter-box">
      <div class="filter-list">
          <div class="ktv-left">
            <p>美食<span>0</span></p>
            <p>美食1<span>0</span></p>
            <p>美食2<span>0</span></p>
            <p>美食3<span>0</span></p>
            <p>美食4<span>0</span></p>
            <p>美食5<span>0</span></p>
            <p>美食6<span>0</span></p>
            <p>美食7<span>0</span></p>
            <p>美食8<span>0</span></p>
            <p>美食9<span>0</span></p>
            <p>美食10<span>0</span></p>
            <p>美食11<span>0</span></p>
            <p>美食12<span>0</span></p>
            <p>美食13<span>0</span></p>
            <p>美食14<span>0</span></p>
            <p>美食15<span>0</span></p>
            <p>美食16<span>0</span></p>
            <p>美食17<span>0</span></p>
          </div>
          <div class="ktv-right">
            <p>运动<span>0</span></p>
            <p>运动1<span>0</span></p>
            <p>运动2<span>0</span></p>
            <p>运动3<span>0</span></p>
            <p>运动4<span>0</span></p>
            <p>运动5<span>0</span></p>
            <p>运动6<span>0</span></p>
            <p>运动7<span>0</span></p>
            <p>运动8<span>0</span></p>
            <p>运动9<span>0</span></p>
            <p>运动10<span>0</span></p>
            <p>运动11<span>0</span></p>
            <p>运动12<span>0</span></p>
            <p>运动13<span>0</span></p>
            <p>运动14<span>0</span></p>
            <p>运动15<span>0</span></p>
            <p>运动16<span>0</span></p>
            <p>运动17<span>0</span></p>
          </div>
      </div>
      <div class="filter-list">
        <div class="city-nav">
          <span class="city-active">商区</span>
          <span>地铁站</span>
        </div>
        <div class="city-list">
          <div class="city-area city-list-all">
            <p @click="areaFn('全城')" class="area-active">全城<span>670</span></p>
            <p @click="areaFn('海淀区')">海淀区<span>670</span></p>
            <p @click="areaFn('朝阳区')">朝阳区<span>670</span></p>
            <p @click="areaFn('通州区')">通州区<span>670</span></p>
            <p @click="areaFn('大兴区')">大兴区<span>670</span></p>
          </div>
          <div class="city-station city-list-all none">
            <p class="station-active">1号线<span>670</span></p>
            <p>2号线<span>670</span></p>
            <p>3号线<span>670</span></p>
            <p>4号线<span>670</span></p>
            <p>5号线<span>670</span></p>
            <p>6号线<span>670</span></p>
            <p>7号线<span>670</span></p>
          </div>
        </div>
      </div>
      <div class="filter-list">
        <p class="area-active">默认排序</p>
        <p @click="orderFn('distance')">离我最近</p>
        <p>评价最高</p>
        <p>人气最高</p>
        <p @click="orderFn('price')">价格最低</p> 
      </div>
      <div class="filter-list">
        <p class="filter-active">只看可预订KTV <span></span></p>
        <p>只看免预约 <span></span></p>
        <p>节假日可用 <span></span></p>
        <p class="reset-save">重置 <a href="javascript:;">保存</a></p> 
      </div>
    </div>
    <div class="deal-list" v-for="item in filter(arr)">
      <div class="list-top">
        <dl>
          <dt><img :src="item.image" alt=""></dt>
          <dd>
            <p>{{item.name}}</p>
            <p>
              <i class="icon-star-checked iconfont"></i>
              <i class="icon-star-checked iconfont"></i>
              <i class="icon-star-checked iconfont"></i>
              <i class="icon-star-checked iconfont"></i>
              <i class="icon-star-checked iconfont"></i>
              <span>4.3分</span>
            </p>
            <p>
              <span class="price"><b>{{item.price}}</b>元起</span>
              <span class="area"><em>{{item.district}}</em><em>{{item.distance}}km</em></span>
            </p>
          </dd>
        </dl>
      </div>
      <div class="list-bottom">
          <p>
              <i>订</i>
              <span>小包4小时249元,中包4小时359元</span>
          </p>
          <p>
              <i>团</i>
              <span>45元/券，3小时欢畅</span>
          </p>
      </div>
    </div>
    <div class="prev-next">
      <span :class="{'disab':disP}" @click="prevPage">上一页</span>
      <label>{{num}}</label>
      <span :class="{'disab':disN}" @click="nextPage">下一页</span>
    </div>
  </div>

</template>

<script>
export default {
  data:function(){
    return {
      data:[],
      arr:[],
      num:1,
      disP:true,
      disN:false,
      areaFilter:''
    }
  },
  mounted:function(){
    this.$http.get("../src/assets/data/hotel.json").then(function(res){
      this.data=res.body.data;
      this.arr=this.data.slice(0,10);
    },function(err){
      console.log(err)
    })
    $('.filter-list').find('p').click(function(){
      var text=$(this).text().match(/[\u4e00-\u9fa5]+/)[0];
      $(this).addClass('area-active').siblings().removeClass();
      $('.banner').css('margin-bottom',0);
      $('.bar-active').html(text+'<span></span>')
      $('.bar-active').removeClass('bar-active')
      $('.filter-box').removeClass('filter-box-active');
      setTimeout(function(){
        $('.nav').removeClass('position');
      },300)
      /*this.areaFilter=$(this).text().match(/[\u4e00-\u9fa5]+/)[0];
      //console.log(this.areaFilter)*/
    })
  },
  methods:{
    orderFn:function(data){
      this.arr=this.arr.sort(function(a,b){
        return a[data]-b[data];
      })
    },
    areaFn:function(data){
      this.areaFilter=data;

      this.arr=this.data.slice(0,this.data.length)
      this.disP=true;
      this.disN=true;
      this.prevPage=null;
      this.nextPage=null;
    },
    filter:function(arr){  
        return arr.filter((item)=>{  
            //console.log(this.areaFilter)
            if(this.areaFilter=="全城" || this.areaFilter==""){
              return item;
            }else{
              return item.district==this.areaFilter;
            }
        }) 
        /*return arr.sort(function(a,b){
            return a.price-b.price;
        }) */
        /*return arr.filter(function(item){
            return item;
        })*/
    },  
    prevPage:function(){
      this.disN=false;
      if(this.num>1){
        this.num--;
        //$('#ktv').scrollTop(0);
      }
      if(this.num==1){
        this.disP=true;
      }
      this.arr=this.data.slice((this.num-1+'0')*1,(this.num+'0')*1)
    },
    nextPage:function(){
      var len=Math.ceil((this.data.length)/10);
      this.disP=false;
      if(this.num<len){
        this.num++;
        //$('#ktv').scrollTop(0);
      }
      if(this.num==len){
        this.disN=true;
      }
      this.arr=this.data.slice((this.num-1+'0')*1,(this.num+'0')*1)
      
    }
  }
}
</script>

