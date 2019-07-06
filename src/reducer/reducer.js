import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
export const store = new Vuex.Store({
  state: {
    todoList: [{ name: "A" }, { name: "B" }, { name: "C" }]
  },
  mutations: {
    addTodo(state, payload) {
      state.todoList.push(payload);
    },
    deleteTodo(state, payload) {
      let newArr = state.todoList.filter(e => e.name !== payload);
      state.todoList = newArr;
    },
    editTodo(state, payload) {
        console.log(payload)
      state.todoList = payload;
    }
  },
  actions: {
    addTodo(state, payload) {
      state.commit("addTodo", payload);
    },
    deleteTodo(state, payload) {
      state.commit("deleteTodo", payload);
    },
    editTodo(state, payload) {
      state.commit("editTodo", payload);
    }
  },
  getters: {
    getTodos(state) {
      return state.todoList;
    }
  }
});
