import React, {useState, useEffect} from "react";
import axios from 'axios'; 
import { useHistory } from "react-router";
import MUIDataTable from "mui-datatables";
import Loading from '../components/loading'; 


const filterTrending = (coins)=>{
    let trending = []; 
    coins.forEach(({item})=>{

        const {name, market_cap_rank, symbol, price_btc, score} = item; 

        let row = {
            name: name, 
            market_cap_rank: market_cap_rank, 
            symbol: symbol, 
            price_btc: price_btc, 
            score: score
        }; 

        trending.push(row); 
    }); 
    return trending; 
}; 


function TrendingCoins(){

  const [trendingCoins, setTrendingCoins] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [err, setErr] = useState(false); 

  const history = useHistory();
    
    useEffect( () => { 
        async function fetchTrendingCoins() {
            try {
              const res = await axios.get(
                'https://api.coingecko.com/api/v3/search/trending'
              ); 
              
              setLoading(false);
              setTrendingCoins(filterTrending(res.data.coins));
            
            } catch (err) {
              setLoading(false); 
              setErr(true); 
            }
        }
        fetchTrendingCoins();

    }, []);


  const columns = [ 
    'name', 
    'market_cap_rank',
    'symbol', 
    'price_btc', 
    'score'
  ]; 

  const options =  {
    filterType: 'dropdown', 
    responsive: 'scroll'
  }; 


  return (
    <>
    {
      loading && <Loading/>
    }
    {
      err && <div> error loading trending crypto coins </div>
    }
    <MUIDataTable 
      title={"Topics"} 
      data={trendingCoins} 
      columns={columns} 
      options={options} 
    />
    </>
  )
};


export default TrendingCoins;
