<template>
  <div>  
    <Topo title="Movies"/>
    <main>
        <CardDetalhe :detalhe="detail"/>
        <Video/>
    </main>
  </div>
</template>

<script>
import Topo from '../components/Topo'
import CardDetalhe from '../components/CardDetalhe'
import Video from '../components/Video.vue'
import listFilmes from '../services/config'

export default {
  // props: ['movieId'],
  components: {
    Topo,
    CardDetalhe,
    Video
  },
  data(){
    return{
        detail:[]
    }
  },
  created(){
    this.movieId = 503880;
     listFilmes.getDetailMovies('603', movie => {
       this.detail = movie.data;
        
      });
  }
}
</script>

<style scoped>
main{
  align-items: center;
  justify-content: center;
  margin: 0rem 1rem;
}
footer{
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0rem 1rem 1rem;
}
@media(min-width: 1100px){
  main{
    margin: 0rem 1rem;
  }
}
</style>
