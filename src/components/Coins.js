import React from 'react';
import { API_BASE_IMAGE } from '../config';
import './Coins.css';

export default function Coin(props) {
    
    const coins = props.data.map((coin, index) => {
        return (
            <ul className='coin-containers' index={index} key={coin.CoinInfo.Id}>
                <li><img className='coinImages' src={`${API_BASE_IMAGE}${coin.CoinInfo.ImageUrl}`} alt={coin.CoinInfo.FullName} /></li>
                <li>{index + 1}</li>
                <li>{coin.CoinInfo.FullName}</li>
                <li className='ticker'>{coin.CoinInfo.Name}</li>
                <li>{coin.DISPLAY.USD.PRICE}</li>
                <li>{coin.DISPLAY.USD.SUPPLY}</li>
                <li>{coin.DISPLAY.USD.MKTCAP}</li>
                <li>24HR</li>
                <li>{coin.DISPLAY.USD.CHANGEPCT24HOUR}%</li>
            </ul>
        )
    });

    return (
        <div className='purse'>
            {coins}
        </div>
    )
}