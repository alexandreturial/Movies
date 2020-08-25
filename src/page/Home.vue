<template>
  <div>  
    <Topo title="Movies"/>
    <main >
      <Busca/>
      <router-link  to="/detalhe" style="text-decoration: none; color: inherit;"> 
        <Filmes/>
        <Filmes/>
        <Filmes/>
      </router-link>

     
    </main>
    <footer>
      <Paginate/>
    </footer>
  </div>
</template>

<script>
import Topo from '../components/Topo'
import Busca from '../components/Busca.vue'
import Filmes from '../components/Filmes.vue'
import Paginate from '../components/Paginate.vue'

export default {
  components: {
    Topo,
    Busca,
    Filmes,
    Paginate
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
