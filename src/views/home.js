import React, {useState, useEffect} from "react";
import MUIDataTable from "mui-datatables";
import Loading from '../components/loading'; 
import listCoins from "../APIs/listCoins";


function ListCoins(){

  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [err, setErr] = useState(false); 
    
    useEffect( () => { 
        async function fetchCoins() {
            try {
              
              const res = await listCoins(); 
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
