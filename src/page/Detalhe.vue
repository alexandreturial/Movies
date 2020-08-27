<template>
  <div>  
    <Topo title="Movies"/>
    <main>
      
        <CardDetalhe :detalhe="detail" />
       
        <Video :trailers="videos"/>
    </main>
  </div>
</template>

<script>
import Topo from '../components/topo/Topo.vue'
import CardDetalhe from '../components/cardDetalhe/CardDetalhe.vue'
import Video from '../components/video/Video.vue'
import listFilmes from '../services/config'

export default {
   props: ['movieId'],
  
  components: {
    Topo,
    CardDetalhe,
    Video
  },

  data(){
    return{
        detail:[],
        videos:[]
    }
  },
  created(){
     listFilmes.getDetailMovies(this.movieId, movie => {
       
       this.detail = movie.data;
      
       
      });
      listFilmes.getMoviesTrailer(this.movieId, trailer => {
       this.videos = trailer.data.results;
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
