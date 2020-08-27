<template>
    <div class="container">
        <router-link :to="{ path: 'detalhe/'+id}"  style="text-decoration: none; color: inherit;"> 

            <div class="card" v-for="(movie, index) in filme" :key="index" v-on:click="selectMovie(movie.id)">
                    <div class="poster">
                        <img :src="'https://image.tmdb.org/t/p/original/'+movie.poster_path" alt="poster">
                    </div>
                    <div class="dados">
                        <!-- <Topo/> -->
                    <div class="navbar">
                        <div class="text">
                                <p class="title">{{movie.title}}</p>
                        </div>
                        </div>
                        <div class="corpo">
                            <div class="header-card">
                                <CardNumber :numero="movie.vote_average.toString()"/>
                                <h4>{{movie.release_date}}</h4>
                            </div>
                            <p>{{movie.overview}}</p>
                            <div class="footer-card">
                                <ButtonGenero :generoIds="movie.genre_ids"/>
                            </div>
                        </div>
                    </div>
            </div>
        </router-link>
    </div>
</template>

<script>
import ButtonGenero from './ButtonGenero.vue'
import CardNumber from './CardNumber.vue'


export default {
props:['filme'],

components: {
    ButtonGenero,
    CardNumber
  },
data(){
    return{
        id:0
    }
},
methods: {
    selectMovie(movie) {
        this.id =  movie;
    }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .container{
        align-items: center;
        justify-content: center;
        text-decoration: none;
        border: none;
        outline:none;
       
    }
   .card{
        background: #ebebeb;
        margin: 2rem 0rem;
        display: grid;
        grid-template-rows: 250px 1fr;
        grid-template-columns: 25% 75%;
        grid-template-areas:
            "poster"
            "dados";
           
    }
    .navbar {
        background: #116193;
        
    }
    .text{
        margin-left: 27% !important;
        overflow-x: scroll;
    }
     /* Hide scrollbar for Chrome, Safari and Opera */
     .text::-webkit-scrollbar {
        display: none;
    }

    /* Hide scrollbar for IE, Edge and Firefox */
    .text {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    }
    .navbar p{
        margin: 0%;
       
    }
    .title{
        width: 200vw;
        display: flex;  
        justify-content: start;  
        padding: 1rem 0rem 0rem;
        font: 500 1.8rem 'Abel', sans-serif;
        color: #01dfdf;
        letter-spacing: 1px;
    }
    .corpo .header-card{
        display: flex;
        margin-bottom: 1rem;
    }
    .corpo .header-card h4{
        margin: 0% 4%;
        color: #939393;
         font: 500 1rem 'Lato', sans-serif;
    }
    .corpo > p{
        padding: 1rem;
        margin-top: -7%;
        text-align: start;
        height: 2rem;
        overflow: hidden;
        font: 500 0.8rem 'Lato', sans-serif;
        color: #989898;
        overflow-y: scroll;
        display: flex;
    }
     /* Hide scrollbar for Chrome, Safari and Opera */
     .corpo::-webkit-scrollbar {
        display: none;
    }

    /* Hide scrollbar for IE, Edge and Firefox */
    .corpo {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    }
    .poster img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    @media(min-width: 00px){
        .card{
            background: #ebebeb;
            margin: 2rem 0rem;
            display: grid;
            grid-template-rows: 300px 1fr;
            grid-template-columns: 25% 75%;
            grid-template-areas:
                "poster"
                "filme dados";
        }
        main{
            margin: 0rem 15rem;
        }
        .text{
            margin-left: 5rem !important;
            overflow-x: scroll;
        }
         .title{
            display: flex;  
            justify-content: start;  
            padding: 1rem 0rem 0rem;
            font: 500 1.8rem 'Abel', sans-serif;
            color: #01dfdf;
            letter-spacing: 1px;
           
        }
        
        .poster img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        .corpo .header-card h4{
            margin: 0% 1.5%;
            color: #939393;
            font: 500 1rem 'Lato', sans-serif;
        }
        .corpo > p{
            padding: 1rem 1.2rem;
            margin-top: -4%;
            text-align: start;
            height: 5rem;
            overflow: hidden;
            font: 500 1rem 'Lato', sans-serif;
            color: #989898;
         }
    }
</style>
