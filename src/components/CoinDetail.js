import React from 'react';
import CoinList from './CoinList';

export default function CoinDetail(props) {

   const coin = Object.keys(props.marketData);
    return (
        <div>
            <button onClick={props.goBack}>go back</button>
            <li>{typeof props.marketData}</li>
            <li>{props.marketData.ripple.id}</li>
            <li>{props.marketData[coin[0]].id}</li>
        </div>
    )
}