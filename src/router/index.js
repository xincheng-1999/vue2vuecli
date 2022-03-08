import routes from "./routes";
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default (app)=>{
  app.use(router)
  return app
}