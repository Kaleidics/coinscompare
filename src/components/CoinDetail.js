import React from 'react';
import Graph from './Graph';
import './CoinDetail.scss';


export default function CoinDetail(props) {

    //handling the different time ranges, 24 hours, 7 days, 30 days
    const graphDay = [];
    const rawData = props.marketData.undefined.prices.length;

    for (let i = rawData-24; i < rawData; i += 1) {
        graphDay.push(props.marketData.undefined.prices[i])
    }

    const graphWeek = [];
    for (let i = rawData-168; i < rawData; i += 24) {
        graphWeek.push(props.marketData.undefined.prices[i])
    }
    
    const graphMonth = [];
    for (let i = 0; i < rawData; i += 1) {
        graphMonth.push(props.marketData.undefined.prices[i])
    }

    //sanitizing the raw prices and raw times for the above arrays
    const dayPrices = graphDay.map((index, key) => {
        return (
            +graphDay[key][1].toFixed(2)
        )
    });
 
    const dayTimes = graphDay.map((index, key) => {
        return (
            (new Date(graphDay[key][0])).toLocaleTimeString('en-US')
        )
    });

    const weekPrices = graphWeek.map((index, key) => {
        return (
            +graphWeek[key][1].toFixed(2)
        )
    });
 
    const weekTimes = graphWeek.map((index, key) => {
        return (
            (new Date(graphWeek[key][0])).toLocaleDateString('en-US')
        )
    });

    const monthPrices = graphMonth.map((index, key) => {
        return (
            +graphMonth[key][1].toFixed(2)
        )
    });
 
    const monthTimes = graphMonth.map((index, key) => {
        return (
            (new Date(graphMonth[key][0])).toLocaleDateString('en-US')
        )
    });

    return (
        <div className='chart-outer-container'>
            {/* <a className='buyButton' href={'https://www.coinmama.com/buy/' + props.coinId[0].id} target="_blank" rel="noopener noreferrer">Buy Now</a> */}
            <Graph className='graph' graphname={"Price Change in last 24 Hours"} marketData={props.marketData} timeData={dayTimes} priceData={dayPrices} pointSize={3}/>
            <Graph className='graph' graphname={"Price Change in last 7 Days"} marketData={props.marketData} timeData={weekTimes} priceData={weekPrices} pointSize={3}/>
            <Graph className='graph' graphname={"Price Change in last 30 Days"} marketData={props.marketData} timeData={monthTimes} priceData={monthPrices} pointSize={0}/>
        </div>
    )
}