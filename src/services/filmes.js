import {http} from './config'

export default{
    Listar:() => {
        return http.get('search/keyword?api_key=ece5778e13c936b98163c3e58e4e11a3&page=1&query=matrix')
    } 
}