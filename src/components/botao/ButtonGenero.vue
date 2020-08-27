<template>
     <div class="button">
        
        <div v-for="(id, index) in generoIds" :key="index">
            <div v-for="(tipoGenero, index) in genres" :key="index">
                <div v-if="tipoGenero.id === id">
                    <button>
                        {{tipoGenero.name}}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import Topo from './Topo.vue'
import listFilmes from '../../services/config'

export default {
props:['generoIds'],
created() {
    listFilmes.getAllGenres(genres => {
      this.genres = genres.data.genres;
    })
},
data(){
    return{
      genres:[]
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 @import './botao.css';
</style>
