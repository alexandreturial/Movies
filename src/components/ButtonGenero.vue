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
import listFilmes from '../services/config'

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
    .button{
         overflow-x: scroll;
        display: flex;
    }
     /* Hide scrollbar for Chrome, Safari and Opera */
     .button::-webkit-scrollbar {
        display: none;
    }

    /* Hide scrollbar for IE, Edge and Firefox */
     .button {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    }
    .button button{
        margin: 0rem 0.5rem;
        background: #ffffff;
        color: #518cb0;
        border-radius: 30px;
        padding: 0 0.8rem;
        border: solid 1px #518cb0;     
        font-weight: bold;
        height: 2rem;
        line-height: 1rem;
        text-decoration: none;
        outline:none; 
       
    }    
</style>
