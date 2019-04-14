import React from 'react';
import CoinList from './CoinList';

export default function CoinDetail(props) {

    const rawcoins = [];

    for(let key in props.marketData) {
        rawcoins.push(key);
    }

    const coins = rawcoins.map((coin) => {
        return(<li>{coin}</li>)
    })
    return (
        <div><button onClick={props.goBack}>go back</button>{coins}</div>
    )
}