<template>
  <div>
    <h1>Delete</h1>
    <div v-for="(todo,idx) in todoList" :key="`todo${idx}`" class="parent">
      <div>{{todo.name}}</div>
      <button :name="todo.name" @click="handleClick">Delete</button>
    </div>
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
    handleClick(e) {
      this.$store.dispatch("deleteTodo", e.currentTarget.name);
    }
  }
};
</script>

<style scoped>
.parent {
  display: flex;
}
.parent button{
    margin-left: 10px;
}
</style>
