<template>
<div>
	<router-view>
		
	</router-view>
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
