<template>
  <div id="section">
    <h1 class="section-title">Precios / Horarios</h1>
    <div class="horarios-container">
      <p class="horario-text">Temporada Alta: 9:00 a 14:00 / 18:00 a 23:00</p>
      <p class="horario-text">Temporada Baja: 14:00 a 18:00</p>
    </div>


    <div class="prices-tables-container">

      <!-- RESERVA DE CANCHAS -->
      <div class="prices-table">
        <div class="table-item">
          <h1 class="item-title">Reserva de cancha</h1>
          <div class="item-row-three">
            <p class="col-title">Reserva</p>
            <p class="col-title">Baja</p>
            <p class="col-title">Alta</p>
          </div>

          <div class="item-row-three">
            <p class="col-info">60 minutos</p>
            <p class="col-info price">$16.000</p>
            <p class="col-info price">$20.000</p>
          </div>

          <div class="item-row-three">
            <p class="col-info">90 minutos</p>
            <p class="col-info price">$24.000</p>
            <p class="col-info price">$30.000</p>
          </div>
          <div class="item-row-two">
            <p class="col-info">Arriendo de pala</p>
            <p class="col-info price">$4.000</p>
          </div>
        </div>
      </div>

      <!-- CLASES  -->
      <div class="prices-table">
        <div class="table-item">
          <h1 class="item-title">Clases de padel</h1>
          <div class="item-row-three">
            <p class="col-title">Jugadores</p>
            <p class="col-title">Baja</p>
            <p class="col-title">Alta</p>
          </div>

          <div class="item-row-three">
            <p class="col-info">1</p>
            <p class="col-info price">$26.000</p>
            <p class="col-info price">$30.000</p>
          </div>

          <div class="item-row-three">
            <p class="col-info">2</p>
            <p class="col-info price">$30.000</p>
            <p class="col-info price">$40.000</p>
          </div>
          <div class="item-row-one">
            <p class="col-info-text">*La duración de la clase es de 60 minutos y su valor incluye la reserva</p>
            <p class="col-info-text">Profesor Sebastián Zuleta</p>
            <p> 
              <b-icon                 
                  pack="fab"
                  icon="whatsapp"
                  size="is-medium">
            </b-icon> 
            +56 9 5828 2024</p>
          </div>
        </div>
      </div>

      <!-- OTROS  -->
      <div class="prices-table">
        <div class="table-item">
          <h1 class="item-title">Otros valores</h1>

          <div class="item-row-three">
            <img src="@/assets/padeltourx.png" class="col-image" alt="">
            <img src="@/assets/tretorn.png" class="col-image" alt="">
            <img src="@/assets/varlion.png" class="col-image" alt="">
            <img src="@/assets/headpro.png" class="col-image" alt="">
          </div>

          <div class="item-row-three">
            <p class="col-info-name">Padel Tour X</p>
            <p class="col-info-name ">Tretorn</p>
            <p class="col-info-name ">Varlion Pro W</p>
            <p class="col-info-name ">Head Padel Pro</p>
          </div>
          <div class="item-row-three">
            <p class="col-info price">$8.000</p>
            <p class="col-info price">$8.500</p>
            <p class="col-info price">$9.000</p>
            <p class="col-info price">$10.000</p>
          </div>

        </div>
      </div>

    
    
        
      
      
    </div>
    <!-- <video src="">ACA VA VIDEO</video> -->

    
    
  </div>
  
</template>

<script>

export default {
  name: "Precios",

  data () {
   return {
     options: {
        currentPage: 0,
        speed: 200,
        itemAnimation: true,
        centeredSlides: true,
        loopedSlides: 3,
        slidesToScroll: 2,
        loop: true,
        preventDocumentMove:false,
        effect:'slide',
        pagination: false,
        thresholdDistance:'100',
        thresholdTime:'500',
        freeze: true,
        autoplay:'5000'
     },

     //IMAGENES CLUB
     imageList:[
       {
         
         style: {
           
           'image': 'fotoEntrada1.jpg',
           'width': '500px',
           'padding': '20px',
           
           
           
         }
       },
       {
         
         style: {
           'image': 'fotoEntrada2.jpg',
           'width': '500px',
           'padding': '20px'
           
         }
       },
       {
         
         style: {
           'image': 'fotoEntrada3.jpg',
           'width': '500px',
           'padding': '20px'
           
           
         }
       },
       
       
     ],
     //Slider configuration [obj]
     
   }
 },
 methods: {
      getImgUrl(pic) {
        console.log(pic);
        console.log('pic style', pic.style.image);
          return pic.style.image
      }
    }
}
</script>


