<template>
  <div class="player">  
        <iframe 
        width="450" 
        height="300" 
        src="https://www.youtube.com/embed/ODqPGttjjOY" 
        frameborder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
        </iframe>    
  </div>
</template>

<script>

export default {

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
   