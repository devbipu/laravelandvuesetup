import Vue from 'vue'
import Router from 'vue-router'


// Components
// import ExampleComponent from '../components/EC'



/* ---------------------
All imported pages start 
-----------------------*/

import HomePage from '../pages/home';
import TagList from '../pages/tags';

/* ------------------
All imported pages end 
---------------------*/


Vue.use(Router)

const routes = [
	{
	  path: '/',
	  name: 'HomePage',
	  component: HomePage
	},
	{
	  path: '/tags',
	  name: 'Tags',
	  component: TagList
	}
	//admin route
	// {
	// 	path: '/admin',
	// 	name: 'dashbord',
	// 	component: Dashboard
	// }
]



export default new Router({
  mode: 'history',
  routes,
})

