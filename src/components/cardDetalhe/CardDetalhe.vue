<template>
    <div class="container" >
        <div class="titleDetail">
            <h2>{{detalhe.title}}</h2>
            <h4>{{detalhe.release_date.split('-').reverse().join('/')}}</h4>
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
                                 <p>{{detalhe.spoken_languages[0].name}}</p>
                            </li>
                             <li>
                                <h5>Duração</h5>
                                 <p>{{(detalhe.runtime/60) | currency('', 2, { decimalSeparator: 'H ' })}} min</p>
                            </li>
                             <li>
                                <h5>Orçamento</h5>
                                 <p>{{detalhe.budget | currency('R$ ', 2, { thousandsSeparator: '.',  decimalSeparator: ',' })}}</p>
                            </li>
                             <li>
                                <h5>Receita</h5>
                                 <p>{{detalhe.revenue | currency('R$ ', 2, { thousandsSeparator: '.',  decimalSeparator: ',' })}}</p>
                            </li>
                             <li>
                                <h5>Lucro</h5>
                                 <p>{{(detalhe.revenue - detalhe.budget) | currency('R$ ', 2, { thousandsSeparator: '.',  decimalSeparator: ',' })}}</p>
                            </li>
                        </ul>
                    </div>
                <div class="footer-card">
                    <div id="genero" class="button">
                        <button v-for="(genero, index) in detalhe.genres" :key="index"> 
                              {{genero.name}}
                        </button>
                    </div>
                    <div id="rating">
                        <div>
                            <p>
                                <span>
                                    {{detalhe.vote_average *10}}%
                                </span>
                            </p>
                        </div>
                         
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
export default {
props:['detalhe'],

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 @import '../../components/botao/botao.css';
 @import './cardDetalhe.css';   
</style>
