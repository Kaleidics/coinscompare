import React from 'react';
import CoinList from './CoinList';
import Graph from './Graph';
import './CoinDetail.scss';


export default function CoinDetail(props) {


    const graphData = [];
    for (let i = 0; i < props.marketData.undefined.prices.length; i += 10) {
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
        <div className='chart-outer-container'>
            <a className='buyButton' href={'https://www.coinmama.com/buy/'+ props.coinId[0].id} target="_blank">Buy Now</a>
            <Graph className='graph' marketData={props.marketData} timeData={timeData} priceData={data}/>
        </div>
    )
}