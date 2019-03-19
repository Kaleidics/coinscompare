import React from 'react';
import {API_BASE_URL} from '../config';
import {API_BASE_IMAGE} from '../config';
import './CoinList.css';

export default class Coins extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            lists: [],
            error: null,
        };
    }

    componentDidMount() {
        this.loadCoins();
    }

    loadCoins() {
        this.setState({
            error: null,
            loading: true
        });
        return fetch(API_BASE_URL)
        .then(res => {
            if(!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .then(coins => {
            console.log('coins:', coins);
            this.setState({
                lists: coins.Data,
                loading: false
            })
        }
        )
        .catch(err => {
            this.setState({
                error: 'Could not load coins',
                loading: false
            })
        });
    }

    render() {
        const coins = this.state.lists.map((coin, index) => {
            return <ul className='coin-containers' key={coin.CoinInfo.Id}>
            <li><img className='coinImages' src={`${API_BASE_IMAGE}${coin.CoinInfo.ImageUrl}`} alt={coin.CoinInfo.FullName}/></li>
            <li>{index+1}</li>
            <li>{coin.CoinInfo.FullName}</li>
            <li className='ticker'>{coin.CoinInfo.Name}</li>
            <li>{coin.DISPLAY.USD.PRICE}</li>
            <li>{coin.DISPLAY.USD.SUPPLY}</li>
            <li>{coin.DISPLAY.USD.MKTCAP}</li>
            <li>24HR</li>
            <li>{coin.DISPLAY.USD.CHANGEPCT24HOUR}%</li>
            </ul>
        });

        return (
        <div className='purse'>
            {coins}  
        </div>
        );
    }
    
}