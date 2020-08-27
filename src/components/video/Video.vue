<template>
  <div class="player" >  
   
    <div v-for="(trailer, index) in trailers" :key="index">
      
      <iframe 
        width="450" 
        height="300" 
        :src="'https://www.youtube.com/embed/'+trailer.key" 
        frameborder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
      </iframe>   
    </div>
         
  </div>
</template>

<script>

export default {
props:['trailers']
}
</script>
 
<style>
.player{
    margin: 2rem 0rem;
}
iframe{
    width: 100%;
    height: 55vw;
}
@media(min-width: 700px){
  iframe{
    width: 100%;
    height: 600px;
  }
}
</style>
   