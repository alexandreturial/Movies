<template>
  <div>  
    <Topo title="Movies"/>
    <main >
       <form id="app" v-on:submit.prevent="checkForm" >
          <Busca >
             <slot slot="search">
                <input type="search" id="busca" name="buscar" v-model="busca" placeholder="Busque um filme por nome, ano ou gênero" >
             </slot>
          </Busca>
       </form>
        <div >
           <Filmes :filme="movies"/>
        </div>
      
    </main>
    <footer>
      <Paginate>
        <slot slot="botao" v-if="totalPages > 1">
          <button  v-for="(page, index) in totalPages" :key="index" v-on:click="Changepage(page)" href="#"  v-bind:class="{'page-item':true, 'active':(page === currentPage)}">
              <span >{{page}}</span>
          </button>
        </slot>
      </Paginate>
    </footer>
  </div>
</template>

<script>
import Topo from '../components/topo/Topo'
import Busca from '../components/busca/Busca.vue'
import Filmes from '../components/filmes/Filmes.vue'
import Paginate from '../components/paginate/Paginate.vue'
import listFilmes from '../services/config'

export default {
  created() {
   
  },
  data(){
    return{
      movies:[],
      busca: '',
      totalPages:0,
      currentPage: 1
    }
  },
  components: {
    Topo,
    Busca,
    Filmes,
    Paginate
  },
 methods: {
    checkForm() {
         listFilmes.getAllMovies(this.busca, comics => {
         this.movies = comics.data.results;
         this.totalPages = comics.data.total_pages
         console.log(this.movies);
        });
    },
    Changepage (event) {
      
      listFilmes.getMoreMovies(this.busca, event, movies => {
         this.movies = movies.data.results;
        });
       this.currentPage = event   
    }
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

@media(min-width: 700px){
  main{
    margin: 0rem 15rem;
  }
}
</style>
