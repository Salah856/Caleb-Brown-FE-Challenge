import axios from 'axios'; 

const listCoins = ()=>{

    return axios.get('https://api.coingecko.com/api/v3/coins/list');

}


export default listCoins; 

