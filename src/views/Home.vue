<template>
  <div id="home">
    <div class="portada">
      <div class="img-portada"></div>
      <div class="reservar-button">RESERVAR AQUÍ</div>
    </div>
    
<!--<div class="div-video">  VIDEO  </div> -->
     
    <Section1/>
    <Precios/>
    <Clients/>

  
  </div>
</template>

<script>

import Section1 from "./../components/Section1.vue";
import Precios from "./../components/Precios.vue";
import Clients from "./../components/Clients.vue";


export default {
  name: "Home",
  components: { Section1, Precios, Clients },
  data() {
    return {
      position: 0,
      onTopScroll: false,
      scrollY: null,
    };
  }  
};
</script>
