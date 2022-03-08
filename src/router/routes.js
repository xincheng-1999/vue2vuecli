// import Home from '../pages/Home.vue'
import FrontPage from '../pages/FrontPage.vue'
export default  [
  { path: '/Home', component: import(/* webpackChunkName: "Home" */ '../pages/Home.vue') },
  {path:'/', component: FrontPage}
]