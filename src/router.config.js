import Mainbody from './components/ContentModel/Content.vue'
import Home from './components/Home.vue'
import Person from './router/person/Person.vue'
import Search from './router/search/Search.vue'
import NotFoundComponent from './router/NotFoundComponent.vue'
import LoginAccount from './router/person/login/LoginAccount.vue'
import SearchPwd from './router/person/login/SearchPwd.vue'
import Login from './router/person/Login.vue'
import City from './router/city/City.vue'
import Travel from './router/travel/Travel.vue'
import Movie from './router/movieModel/movie.vue'
import Ktv from "./router/ktv/Ktv.vue"


export default[
{
	path:'/person',
	component:Person,
	children:[
	{path:'/person/loginAccount',component:LoginAccount},
	{path:'/person/searchPwd',component:SearchPwd},
	{path:'/person/loginAccount/signup',component:LoginAccount},
	{path:'/',component:Login}
	]
},
{
	path:'/home',
	component:Home
},
{
	path:"/ktv",
	component:Ktv
},

{
	path:'/city',
	component:City
},
 {
 	path:'/search',
 	component:Search
 },
 {
 	path:'/travel',
 	component:Travel
 },
 {
 	path:'/movie',
 	component:Movie
 },
{ 
    path: '*', 
    redirect: '/home' 
  }


]