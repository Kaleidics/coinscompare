import React from 'react';
import CoinList from './CoinList';
import Graph from './Graph';


export default function CoinDetail(props) {

   const coin = Object.keys(props.marketData);
    return (
        <div>
            <button onClick={props.goBack}>go back</button>
            <Graph marketData={props.marketData}/>
        </div>
    )
}