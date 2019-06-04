import React from 'react';
import SingleCoin from './SingleCoin';
import './Coins.scss';

export default function Coin(props) {
    
    const coins = props.data.map((coin, index) => {

        return <SingleCoin coin={coin} index={index} key={coin.id} onClick={() => props.handler(coin.id)} />;
    });

    return (
        <div className='purse'>
            {coins}
        </div>
    )
}