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

    const timeData = graphData.map((index, key) => {
        return (
            new Date(graphData[key][0])
        )
    });

   const coin = Object.keys(props.marketData);
    return (
        <div>
            <button onClick={props.goBack}>Go back</button>
            <Graph className='graph' marketData={props.marketData} timeData={timeData} priceData={data}/>
        </div>
    )
}