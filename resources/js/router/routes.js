import Vue from 'vue'
import Router from 'vue-router'


// Components
import ExampleComponent from '../components/EC'
import AboutUs from '../components/AboutUs'



/* ------------------
All imported pages start 
---------------------*/

import LoginPage from '../pages/login'

/* ------------------
All imported pages end 
---------------------*/


Vue.use(Router)

const routes = [
	{
	  path: '/',
	  name: 'HelloWorld',
	  component: ExampleComponent
	},
	{
	  path: '/about',
	  name: 'AboutUS',
	  component: AboutUs
	}
]



export default new Router({
  mode: 'history',
  routes,
})

