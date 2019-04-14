import React from 'react';
import CoinList from './CoinList';

export default function CoinDetail(props) {

   let selectedCoin = Object.keys(props.marketData)

    return (
        <div>
            <button onClick={props.goBack}>go back</button>
            {selectedCoin}
        </div>
    )
}