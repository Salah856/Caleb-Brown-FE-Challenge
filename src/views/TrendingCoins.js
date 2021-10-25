import React, {useState, useEffect} from "react";
import MUIDataTable from "mui-datatables";

import Loading from '../components/loading'; 
import filterTrending from "../utils/filterTrending";
import trendingCoins from "../APIs/trendingCoins";

function TrendingCoins(){

  const [trendingCoins, setTrendingCoins] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [err, setErr] = useState(false); 
    
    useEffect( () => { 
        async function fetchTrendingCoins() {
            try {
              const res = await trendingCoins(); 
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
