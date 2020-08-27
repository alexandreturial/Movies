<template>
    <div class="container" >
        <div class="title">
            <h2>{{detalhe.title}}</h2>
            <h4>{{detalhe.release_date}}</h4>
        </div>
        <div class="card"> 
            <div class="dados">
                <div class="corpo">
                    <div class="sinopse">
                        <h3>Sinopse</h3>
                        <hr>
                        <p>
                            {{detalhe.overview}}                         
                        </p>
                    </div>
                     <div class="info">
                        <h3>Informações</h3>
                        <hr>
                        <ul class="info-itens">
                            <li>
                                <h5>Situação</h5>
                                 <p>{{detalhe.status}}</p>
                            </li>
                             <li>
                                <h5>Idioma</h5>
                                 <p>{{detalhe.spoken_languages['0'].name}}</p>
                            </li>
                             <li>
                                <h5>Duração</h5>
                                 <p>{{detalhe.runtime}}</p>
                            </li>
                             <li>
                                <h5>Orçamento</h5>
                                 <p>{{detalhe.budget}}</p>
                            </li>
                             <li>
                                <h5>Receita</h5>
                                 <p>{{detalhe.revenue}}</p>
                            </li>
                             <li>
                                <h5>Lucro</h5>
                                 <p>{{detalhe.revenue - detalhe.budget}}</p>
                            </li>
                        </ul>
                    </div>
                <div class="footer-card">
                    <div id="genero">
                        
                    </div>
                    
                    <div id="rating">
                         <p>
                            <span>
                                {{detalhe.vote_average}}
                            </span>
                        </p>
                    </div>
                </div>
                </div>
            </div>
             <div class="poster">
                <img :src="'https://image.tmdb.org/t/p/original/'+detalhe.poster_path" alt="poster">
            </div>
        </div>
    </div>
</template>

<script>
// import ButtonGenero from '../components/ButtonGenero'

export default {
props:['detalhe'],
components: {
    // ButtonGenero
  },

created(){
     console.log(this.detalhe);
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
        background: #ebebeb;
    }
    .title{
        display: flex;
        align-items: baseline;
        justify-content: space-between;
        background:#e6e6e6;
        padding: 0.5rem;
    }
    .title h2, h4{
        margin:0;
    }
    .title h2{
        font: 500 1.5rem 'Abel', sans-serif;
        color:  #116193;
        margin-left: 5%;
    }
    .title h4{
        font: 500 0.8rem 'Lato', sans-serif;
        color:  #939393;
    }
   .card{
       
        display: grid;
        grid-template-rows: 335px 1fr;
        grid-template-columns: 70% 30%;
        grid-template-areas:
            "corpo"
            "poster";
    }
    
    .card .dados{
        margin: 0rem 0.5rem;
    }
    .card .dados .sinopse h3{
        margin: 0.3rem 0.5rem;
        font: 500 1.2rem 'Abel', sans-serif;
        color:  #116193;
    }
    .card .dados .sinopse hr{
         border-top: 1.5px solid #01dfdf;
    }
    .card .dados .sinopse p{
       font: 500 0.8rem 'Lato', sans-serif;
       padding: 0.5rem;
       margin: -0.5rem 0.2rem 0rem;
       height: 5rem;
       overflow-y: scroll;
       color:#777777
    }
        /* Hide scrollbar for Chrome, Safari and Opera */
    .sinopse p::-webkit-scrollbar {
        display: none;
    }

    /* Hide scrollbar for IE, Edge and Firefox */
    .sinopse p {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    }

    .info h3{
        margin: 0.3rem 0.5rem;
        font: 500 1.2rem 'Abel', sans-serif;
        color:  #116193;
    }
    .info hr{
         border-top: 1.5px solid #01dfdf;
    }
    .info-itens {
        align-items: start;
        justify-content: space-between;
        display: flex;
        list-style: none;
        margin: 0;
        padding: 0;
        overflow-x: scroll;
    }
        /* Hide scrollbar for Chrome, Safari and Opera */
    .info-itens::-webkit-scrollbar {
        display: none;
    }

    /* Hide scrollbar for IE, Edge and Firefox */
    .info-itens {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    }
    .info h5{
        font: 500 1.1rem 'Abel', sans-serif;
        margin: 0rem 0.5rem;
        color:  #116193;
    }
    .info p{
        font: 500 0.8rem 'Abel', sans-serif;
        margin: 0rem 0.5rem;
         color:#777777;
        text-align: center;
    }
    .footer-card{
        margin: 1rem 0rem;
    }
    #rating{
        width: 3.8rem;
        margin: 12% 60%;
    }
     #rating p{
        margin: 0%;
        border: solid 2px #116193;
        border-radius: 50%;
        margin-top: -1.5rem;
        margin-left: 1rem;
        background: #116193;
        display: flex;  
        justify-content: center;  
        
    }
    #rating p span{
        border-radius: 50%;
        padding: 0.5rem 0.5rem;
        border: solid 3px #01dfdf;
        color: #01dfdf;
        font: 500 1rem 'Abel', sans-serif;
    }

    .poster img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
   
    @media(min-width: 700px){
        .card{
            background: #ebebeb;
            margin: 0rem;
            display: grid;
            grid-template-rows: 500px 1fr;
            grid-template-columns: 75% 25%;
            grid-template-areas:
                "corpo"
                "poster";
        }
        .card .dados{
            margin: 0rem 2rem;
        }
        .title h2{
           font: 500 2.5rem 'Abel', sans-serif;
            color:  #116193;
            margin-left: 3%;
            font-weight: bold;
        }
        .title h4{
            font: 500 1.2rem 'Lato', sans-serif;
            color:  #939393;
        }
        .sinopse h3{
            font: 500 1.5rem 'Abel', sans-serif;
        }
         .card .dados .sinopse p{
            font: 500 1rem 'Lato', sans-serif;
            height: 8rem;
        }
        .info h3{
            font: 500 1.5rem 'Abel', sans-serif;
        }
        .info h5{
            font: 500 1.2rem 'Abel', sans-serif;
            margin: 0rem 0.5rem;
            color:  #116193;
        }
          #rating p{
        margin: 0%;
        border: solid 4px #116193;
        border-radius: 50%;
        margin-top: -1.5rem;
        margin-left: 1rem;
        background: #116193;
        display: flex;  
        justify-content: center;  
        
        }
        #rating p span{
            border-radius: 50%;
            padding: 1rem 0.5rem;
            border: solid 3px #01dfdf;
            color: #01dfdf;
            font: 500 3rem 'Abel', sans-serif;
        }

        #rating{
            width: 12%;
            margin: 7% 85%
        }
        .poster img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
      
        
        
    }
</style>
