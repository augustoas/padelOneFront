<template>
    <div id="sidemenu" class="sidemenu">
        <div class="sidebar-header">
          <!-- <img src="/img/LogoToteat600x160.png" alt="Toteat" class="toteat-icon-sidebar"/> -->
          <a class="closebtn" v-on:click="closeSidemenu()">
            <b-icon 
              pack="fab"
              icon="whatsapp"
              size="is-medium">
            </b-icon>
          </a>
        </div>

        <div class="section-container">
          <h1 class="section-title">{{ "OPCIONES"}}</h1> <!-- OPCIONES -->
          <div class="ruta" >
            <b-icon 
              pack="fab"
              icon="whatsapp"
              size="is-medium">
            </b-icon>
            <span class="ruta-text" :class="{ active : isAtHome }" v-on:click="cambiaRuta()">{{"Inicio"}} </span><!-- Inicio -->
          </div>
          <div class="ruta" >
            <b-icon 
              pack="fab"
              icon="whatsapp"
              size="is-medium">
            </b-icon>
            <span class="ruta-text" :class="{ active : isAtHome }" v-on:click="cambiaRuta()">{{"Inicio"}} </span><!-- Inicio -->
          </div>
          <div class="ruta" >
            <b-icon 
              pack="fab"
              icon="whatsapp"
              size="is-medium">
            </b-icon>
            <span class="ruta-text" :class="{ active : isAtHome }" v-on:click="cambiaRuta()">{{"Inicio"}} </span><!-- Inicio -->
          </div>
        </div>
      </div>
</template>

<script>

export default{
  name: "Sidebar",
  data(){
      return{
          nodo:null,
          isOpen:false,
      }
  } ,
  computed:{

      ruta(){
          return this.$route.name
      },
  }  ,
  methods:{
      openSidemenu(){
          this.nodo.style.width="80%"
          this.isOpen=true
      },
      closeSidemenu(){
          this.nodo.style.width="0"
          this.isOpen=false
      },
      
      cambiaRuta(nombre){
         console.log("Cambia ruta a "+nombre)
          this.closeSidemenu()
          this.$router.push({"name":nombre})
      },




  } ,
  mounted() {

      this.nodo=document.getElementById("sidemenu")
      this.closeSidemenu()
      this.$eventBus.$on("closesidebar", ()=>{
          if (this.nodo)
           this.closeSidemenu()
       })
      this.$eventBus.$on("opensidebar", ()=>{
          if (this.nodo)
           this.openSidemenu()
       })
      this.$eventBus.$on("togglesidebar", ()=>{
          if (this.nodo){
              if (this.isOpen)
                  this.closeSidemenu()
              else
                  this.openSidemenu()
          }
       })
  },

}
</script>
