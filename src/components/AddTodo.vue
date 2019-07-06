<template>
  <div>
    <h1>Add todo</h1>
    <ul>
      <li v-for="(todo,idx) in todoList" :key="`todo${idx}`">{{todo.name}}</li>
    </ul>
    <form @submit="handleSubmit">
      <input type="text" />
    </form>
  </div>
</template>

<script>
export default {
  computed: {
    todoList() {
      return this.$store.getters.getTodos;
    }
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.$store.dispatch("addTodo", {
        name: e.target[0].value
      });
      e.target[0].value = "";
    }
  }
};
</script>

<style scoped>
</style>
