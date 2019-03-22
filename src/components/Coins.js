import React from 'react';
import { API_BASE_IMAGE } from '../config';
import './Coins.css';

export default function Coin(props) {
    
    const coins = props.data.map((coin, index) => {
        return (
            <ul className='coin-containers' index={index} key={coin.Id}>
                <li><img className='coinImages' src={`${coin.image}`} alt={coin.name} /></li>
                <li>{coin.market_cap_rank}</li>
                <li>{coin.name}</li>
                <li className='ticker'>{coin.symbol}</li>
                <li>{parseFloat(coin.current_price).toFixed(2)}</li>
                <li>{coin.total_volume}</li>
                <li>{coin.market_cap}</li>
                <li>24HR</li>
                <li>{coin.market_cap_change_percentage_24h}%</li>
            </ul>
        )
    });

    return (
        <div className='purse'>
            {coins}
        </div>
    )
}