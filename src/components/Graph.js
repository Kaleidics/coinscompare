import React from 'react';
import Moment from 'react-moment';

export default function Graph(props) {

    const graphData = [];
    for(let i=0; i<280; i+=10) {
        graphData.push(props.marketData.undefined.prices[i])
    }
    

    const data = graphData.map((index, key) => {
        return (
            <li key={key}><Moment>{new Date(graphData[key][0])}</Moment> / {graphData[key][1]}</li>
        )
    });

    return(
        <div>
            <h2>Graph Work in Progress</h2>
            {data}
        </div>
    )
}