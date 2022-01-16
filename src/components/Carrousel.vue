<template>
  <div id="carrousel" >
    <div class="carrousel-container">
        <div class="carrousel-images"  id="style-scrollbar"> <!-- v-for="n in parseInt(3)" :key="n" -->
            <div class="carrousel-image" v-for="i in images" :key="i.id" :style="{ backgroundImage: 'url(' +  require(`../assets/`+i.imagen) + ')'}"></div>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Carrousel",
  components: {},

  props: {
    images: { type: Object, required: true },
  },  
};
</script>
