import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home.vue"
import AddTodo from "../components/AddTodo.vue"
import EditTodo from "../components/EditTodo.vue"
import DeleteTodo from "../components/DeleteTodo.vue"
Vue.use(VueRouter);
const routes = [
  { path: "/", component: Home },
  { path: "/add", component: AddTodo },
  { path: "/delete", component: DeleteTodo },
  { path: "/edit", component: EditTodo }
];
export const router = new VueRouter({
  routes
});
