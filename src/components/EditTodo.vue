<template>
  <div>
    <h1>Edit</h1>
    <div v-for="(todo,idx) in todoList" :key="`todo${idx}`" class="parent">
      <div v-if="idx === index">
        <input type="text" v-model="todo.name" />
        <button :name="idx" @click="handleClick(idx,true)">Save</button>
      </div>
      <div v-else>
        <div>{{todo.name}}</div>
        <button :name="idx" @click="handleClick(idx,false)">Edit</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created(){
    this.todoList =  this.$store.getters.getTodos;
  },
  data() {
    return {
      todoList:[],
      index:""
    };
  },
  methods: {
    handleClick(idx, isSaving) {
        if (isSaving) {
            this.$store.dispatch("editTodo",this.todoList);
            this.index = "";
        } else {
            this.index = idx;
        }
    }
  }
};
</script>

<style>
.parent {
  display: flex;
}
.parent button {
  margin-left: 10px;
}
</style>
