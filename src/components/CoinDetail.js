import React from 'react';
import CoinList from './CoinList';
import Graph from './Graph';


export default function CoinDetail(props) {


    const graphData = [];
    for (let i = 0; i < 280; i += 10) {
        graphData.push(props.marketData.undefined.prices[i])
    }


    const data = graphData.map((index, key) => {
        return (
            graphData[key][1]
        )
    });

   const coin = Object.keys(props.marketData);
    return (
        <div>
            <button onClick={props.goBack}>go back</button>
            <Graph marketData={props.marketData} priceData={data}/>
        </div>
    )
}