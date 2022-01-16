<template>
  <div id="section">
    <h1 class="section-title">Nuestros Clientes</h1>
    
    <!-- <video src="">ACA VA VIDEO</video> -->
    <Carrousel :images="clientsImages"> </Carrousel>

  </div>
  
</template>

<script>

import data from "@/data.json";
import Carrousel from "./Carrousel.vue";

export default {
  name: "Clients",
  components: {
    Carrousel,
  },
  data () {
   return {
      clientsImages: []
    }
  },

  mounted() {
    this.clientsImages = data.data.clientsImages;
  },
}
</script>