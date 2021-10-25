import axios from 'axios'; 

test('it should fetch coins list and be greater than 0', ()=>{

    const {data} = axios.get('https://api.coingecko.com/api/v3/coins/list')

    expect(data.length).not.toBe(0)
    
})