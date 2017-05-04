import LoadingComponent1 from './loading1.vue'
import LoadingComponent2 from './loading2.vue'
import LoadingComponent3 from './loading3.vue'


const Loading1={
	install:function(Vue){
		Vue.component("Loading1",LoadingComponent1)
	}
}
const Loading2={
	install:function(Vue){
		Vue.component("Loading2",LoadingComponent2)
	}
}
const Loading3={
	install:function(Vue){
		Vue.component("Loading3",LoadingComponent3)
	}
}


export {Loading1,Loading2,Loading3}