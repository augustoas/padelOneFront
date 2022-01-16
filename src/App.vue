<template>
  <div id="app">
    <Topbar/>
    <Sidebar/>
    <div  >
      <router-view/>
    </div>
    
  </div>
</template>

<script>

console.log('iniciandoo App.vue');

import Topbar from "./components/globals/Topbar";
import Sidebar from "./components/globals/Sidebar";

export default {
  name: 'App',
  components: {
     Topbar, Sidebar
  },

  methods:{
    onScroll(event){
      console.log("Scroll Vertical en Main")
      //console.log(event.target.scrollTop)
      this.$eventBus.$emit("mainscroll", event)
    }

  },
}

</script>


<style lang="scss">
#app {
  // font-family: Barlow;
  font-family: Barlow, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


@import "styles/global.scss";
</style>
