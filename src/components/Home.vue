<template>
  <div class="bigbox">
  <div>

      <Navheader></Navheader>
      <Mainbody></Mainbody>
 
  </div>
  <LayerBottom></LayerBottom>
  </div>
</template>

<script>
import Navheader from './Header.vue'
import Mainbody from './ContentModel/Content.vue'
import LayerBottom from './LayerBottom.vue'
export default {
  components:{
    Navheader,
    Mainbody,
    LayerBottom
  }

}

 
</script>
</script>