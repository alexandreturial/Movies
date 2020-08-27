import axios from 'axios';

const urlBase = 'https://api.themoviedb.org/3/';
const apiKey = 'ece5778e13c936b98163c3e58e4e11a3';

export default {
    //lista todos filmes
    getAllMovies: (movie, callback) => {
        const urlComics = urlBase + 'search/movie?api_key=' + apiKey + '&query=' + movie +'&language=pt-br';
        axios.get(urlComics).then((comics) => {
          callback(comics);
        })
    },
    //lista todos generos
    getAllGenres: (callback) => {
        const urlGenres = urlBase + 'genre/movie/list?api_key=' + apiKey+'&language=pt-br';
        axios.get(urlGenres).then((genres) => {
          callback(genres);
        })
    },
     //listar outra pagina dos filmes
    getMoreMovies: (movie, page,callback) => {
        const urlMovies = urlBase + 'search/movie?api_key=' + apiKey + '&query=' + movie +'&page='+page +'&language=pt-br';
        axios.get(urlMovies).then((movies) => {
          callback(movies);
        })
    },
    //listar detalhe do filme
    getDetailMovies: (id,callback) => {
        const urlMovies = urlBase + 'movie/'+id+'?api_key=' + apiKey +'&language=pt-br';
        axios.get(urlMovies).then((movies) => {
          callback(movies);
        })
    },
    //listar trailers do filme
    getMoviesTrailer: (id,callback) => {
      const urlMovies = urlBase + 'movie/'+id+'/videos?api_key=' + apiKey +'&language=pt-br';
      axios.get(urlMovies).then((movies) => {
        callback(movies);
      })
  }
}