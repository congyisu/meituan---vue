<template>
      <div>
      <Headerarea></Headerarea>
      <Contentarea></Contentarea>
      </div>
</template>

<script>
  import Headerarea from './header.vue'
  import Contentarea from './content.vue'

  export default {
    components:{
      Headerarea,
      Contentarea
    },
  }
</script>


