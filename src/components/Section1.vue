<template>
  <div id="section">
    <h1 class="section-title">Padel, Golf, Mini-Golf y Restaurante</h1>
    <div class="location-container">
      <b-icon class="location-item"
            pack="fas"
            icon="map-marker-alt"
            size="is-medium">
      </b-icon>
      <p class="location-text ">Puerto Velero, Región de Coquimbo </p>
    </div>
    <!-- <video src="">ACA VA VIDEO</video> -->
    <Carrousel :images="clubImages"> </Carrousel>

  </div>
  
</template>

<script>

import data from "@/data.json";

import Carrousel from "./Carrousel.vue";

export default {
  name: "Section1",
  components: {
    Carrousel,
  },
  data () {
   return {
      clubImages: []
    }
  },

  mounted() {
    console.log('section1 mounted');
    console.log(data);
    console.log(data.data.clubImages);
    this.clubImages = data.data.clubImages;
  },
}
</script>


