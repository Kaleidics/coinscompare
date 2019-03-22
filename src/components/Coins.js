import React from 'react';
import './Coins.css';

function tidyUp(num) {
    let stringNum = num.toFixed(2).toString();
    return (stringNum.replace(/\B(?=(?=\d*\.)(\d{3})+(?!\d))/g, ','));
}

export default function Coin(props) {
    
    const coins = props.data.map((coin, index) => {
        return (
            <ul className='coin-containers' index={index} key={coin.Id}>
                <li><img className='coinImages' src={`${coin.image}`} alt={coin.name} /></li>
                <li>{coin.market_cap_rank}</li>
                <li>{coin.name}</li>
                <li className='ticker'>{coin.symbol}</li>
                <li>${tidyUp(coin.current_price)}</li>
                <li>${tidyUp(coin.total_volume)}</li>
                <li>${tidyUp(coin.market_cap)}</li>
                <li>24HR</li>
                <li>{tidyUp(coin.market_cap_change_percentage_24h)}%</li>
            </ul>
        )
    });

    return (
        <div className='purse'>
            {coins}
        </div>
    )
}