<template>
  <div>
    <h1>Home</h1>
    <ul>
        <li v-for="(todo,idx) in todoList" :key="`todo${idx}`">{{todo.name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    todoList() {
      return this.$store.getters.getTodos;
    }
  }
};
</script>

<style>
</style>
