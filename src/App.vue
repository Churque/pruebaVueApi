<template>
  <div>
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  background: linear-gradient(to right, rgb(255, 81, 0), rgb(132, 0, 255));
  
}
html {
  background: linear-gradient(to right, rgb(255, 81, 0), rgb(132, 0, 255));
  background-size: cover;
}



</style>
