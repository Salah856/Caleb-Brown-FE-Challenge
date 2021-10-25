
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


export default filterTrending; 
