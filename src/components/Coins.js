import React from 'react';
import { API_BASE_IMAGE } from '../config';
import './Coins.css';

export default function Coin(props) {
    return (
        <ul className='coin-containers' index={props.index} key={props.key}>
            <li><img className='coinImages' src={`${API_BASE_IMAGE}${props.data.CoinInfo.ImageUrl}`} alt={props.data.CoinInfo.FullName} /></li>
            <li>{props.index + 1}</li>
            <li>{props.data.CoinInfo.FullName}</li>
            <li className='ticker'>{props.data.CoinInfo.Name}</li>
            <li>{props.data.DISPLAY.USD.PRICE}</li>
            <li>{props.data.DISPLAY.USD.SUPPLY}</li>
            <li>{props.data.DISPLAY.USD.MKTCAP}</li>
            <li>24HR</li>
            <li>{props.data.DISPLAY.USD.CHANGEPCT24HOUR}%</li>
        </ul>
    )
}