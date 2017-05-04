<template>
<div>
	<Navarea></Navarea>
	<Mainbody></Mainbody> 
</div>
	
</template>
<script>
	import Navarea from './Nav.vue'
	import Mainbody from './Mainbody.vue'
	export default{
		components:{
			Navarea,
			Mainbody
		}
	}
</script>
