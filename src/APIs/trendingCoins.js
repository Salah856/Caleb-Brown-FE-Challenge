import axios from 'axios'; 

const trendingCoins = () => {
    return axios.get('https://api.coingecko.com/api/v3/search/trending'); 
}; 


export default trendingCoins; 

