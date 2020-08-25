<template>
    <div class="container">
        <div class="card">
            <div class="poster">
                <img src="https://uauposters.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/3/130620180226-uau-posters-filmes-thor-ragnarok.jpg" alt="poster">
            </div>
            <div class="dados">
                <!-- <Topo/> -->
               <div class="navbar">
                    <h1 class="title">Thor:Ragnarok</h1>
                </div>
                <div class="corpo">
                    <div class="header-card">
                        <CardNumber numero="74%"/>
                        <h4> 25/10/2017</h4>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec dolor lorem. Fusce at mollis massa. Curabitur quis fermentum nibh. Morbi eget tristique massa. Integer vitae sagittis sapien, nec finibus ipsum. Nullam varius, elit vitae posuere tempus, orci lectus facilisis lectus, at efficitur dui est non diam.
                    </p>
                    <div class="footer-card">
                        <ButtonGenero/>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import ButtonGenero from './ButtonGenero.vue'
import CardNumber from './CardNumber.vue'

export default {
components: {
    ButtonGenero,
    CardNumber
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
    .navbar h1{
        margin: 0%;
    }
    .title{
        display: flex;  
        justify-content: start;  
        padding: 1rem 1rem 0rem;
        font: 500 1.8rem 'Abel', sans-serif;
        color: #01dfdf;
        letter-spacing: 1px;
        margin-left: 20% !important;
        
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
        height: 5rem;
        overflow: hidden;
        font: 500 0.8rem 'Lato', sans-serif;
        color: #989898;
        overflow-y: scroll;
        display: flex;
    }
     /* Hide scrollbar for Chrome, Safari and Opera */
     .button::-webkit-scrollbar {
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
    @media(min-width: 700px){
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
         .title{
            display: flex;  
            justify-content: start;  
            padding: 1rem 1rem 0rem;
            font: 500 1.8rem 'Abel', sans-serif;
            color: #01dfdf;
            letter-spacing: 1px;
            margin-left: 10% !important;
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
