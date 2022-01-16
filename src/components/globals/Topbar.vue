<template>
    <div id="topbar"  :class="{'topbar-scrolled':onTopScroll}" >
      <!-- Div fila superior topbar -->
      <div class="top-row">
        <div class="topbar-left">
          <div v-on:click="toggleSidebar()" :class="{'hamburguer-icon':true ,'topbar-scrolled':onTopScroll}">
            <b-icon   
              
              pack="fas"
              icon="bars"
              size="is-medium">
            </b-icon>
          </div>
          
          <div >
            <img src="@/assets/logotransparente.png" :class="{'logo-image':true ,'logo-visibility':true}" >
          </div>
        </div>
        <!-- <div class="location-topbar">
          
          <div class="location-text">Club de Padel Puerto Velero </div>
        </div>    -->       
         <div class="topbar-right">
          <b-icon 
                :class="{'social-icon':true ,'topbar-scrolled':onTopScroll}"
                pack="fab"
                icon="whatsapp"
                size="is-medium">
          </b-icon>
          <b-icon :class="{'social-icon':true ,'topbar-scrolled':onTopScroll}"
                pack="fab"
                icon="instagram"
                size="is-medium">
          </b-icon>
          <b-icon :class="{'social-icon':true ,'topbar-scrolled':onTopScroll}"
                pack="far"
                icon="envelope"
                size="is-medium">
          </b-icon>
        </div>
      </div>
     

      <!-- Div fila inferior topbar / carrousel -->
    </div>
</template>


<script>

export default {
  name: "Topbar",
  components: { },
  data() {
    return {
      position: 0,
      onTopScroll: false,
      scrollY: null
    };
  },

  methods: {
    toggleSidebar(){
      console.log('toggle sidebar');
      this.$eventBus.$emit("togglesidebar",true)
    },
  },

  mounted() {
    console.log('topbar mounted');
    window.addEventListener('scroll', () => {
      this.scrollY = Math.round(window.scrollY);
    });
  },

  watch: {
    scrollY(newValue) {
      if (newValue === 0) {
        this.onTopScroll = false
      }
      else {
        this.onTopScroll = true
      }
      console.log('en watch scroll', newValue);

    }
  }
};
</script>