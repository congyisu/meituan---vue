<template>
	<div class="content">
	<NavList></NavList>
	<CenterItem></CenterItem>
	<ListMenu></ListMenu>
	<FooterArea></FooterArea>
	</div>
</template>
<script>
	import NavList from './NavList.vue';
	import CenterItem from './CenterItem.vue';
	import ListMenu from './ListMenu.vue'
	import FooterArea from './Footer.vue'
	export default{
		components:{
			NavList,
			CenterItem,
			ListMenu,
			FooterArea
		}
	}
</script>
<style scoped>
	.content{
		background:#F0EFED;
		width:100%;
	}	
</style>
