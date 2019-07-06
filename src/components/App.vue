<template>
<div id="app">
  <nav>
    <ul>
      <li>
        <router-link to="/" class="t-white">Home</router-link>
      </li>
      <li>
        <router-link to="/add" class="t-white">Add todo</router-link>
      </li>
      <li>
        <router-link to="/delete" class="t-white">Delete todo</router-link>
      </li>
      <li>
        <router-link to="/edit" class="t-white">Edit todo</router-link>
      </li>
    </ul>
  </nav>
  <router-view></router-view>
</div>
</template>

<script>
export default {
  name: 'app',
}
</script>
  
<style scoped>

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  nav{
    background-color: black;
    padding: 20px;
  }
  li{
    list-style: none;
  }
  .t-white {
    color: aliceblue;
    text-decoration: none;
  }
</style>
