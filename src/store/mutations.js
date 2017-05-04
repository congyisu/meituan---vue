import {SHOWLOADING,HIDELOADING,SHOWROW,HIDEROW} from './types.js'
import getters from './getter.js'
import state from './state.js'


const mutations={
	[SHOWLOADING](state){
		state.flag=true
	},
	[HIDELOADING](state){
		state.flag=false
	},
	[SHOWROW](state){
		state.isShow=true;
	},
	[HIDEROW](state){
		state.isShow=false;
	}
}



export default{
	state,
	mutations,
	getters
}
