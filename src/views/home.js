import React, {useState, useEffect} from "react";
import axios from 'axios'; 
import { useHistory } from "react-router";
import MUIDataTable from "mui-datatables";
import Loading from '../components/loading'; 

function ListCoins(){

  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [err, setErr] = useState(false); 

  const history = useHistory();
    
    useEffect( () => { 
        async function fetchCoins() {
            try {
              const res = await axios.get(
                'https://api.coingecko.com/api/v3/coins/list'
              ); 
              
              setLoading(false);
              setCoins(res.data);
            
            } catch (err) {
              setLoading(false); 
              setErr(true); 
            }
        }
        fetchCoins();
    }, []);

  const columns = [
    'id', 
    'name', 
    'symbol',
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
      err && <div> error loading crypto coins </div>
    }
    <MUIDataTable 
      title={"Topics"} 
      data={coins} 
      columns={columns} 
      options={options} 
    />
    </>
  )
};


export default ListCoins;
