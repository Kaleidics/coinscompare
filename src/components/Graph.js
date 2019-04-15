import React from 'react';

export default function Graph(props) {

    const graphData = [];
    for(let i=0; i<280; i+=10) {
        graphData.push(props.marketData.undefined.prices[i])
    }

    return(
        <div>
            <h2>Graph</h2>
            <li>{graphData[0]}</li>
        </div>
    )
}