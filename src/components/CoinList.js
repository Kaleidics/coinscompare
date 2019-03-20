import React from 'react';
import {API_BASE_URL} from '../config';
import {API_BASE_IMAGE} from '../config';
import Coin from './Coins';
import './CoinList.css';

export default class Coins extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            lists: [],
            error: null,
        };
    }
    //lifecycle method to call loadCoins when Coins component is displayed?
    componentDidMount() {
        this.loadCoins();
    }

    //Data fetch from Coins API
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

    //Map the fetch data into individual cards/uls as JSX
    render() {
        const coins = this.state.lists.map((coin, index) => {
            return (
                <Coin index={index} data={coin} key={coin.CoinInfo.Id} />
            )
        });

        //display the new array of mapped coins data
        return (
        <div className='purse'>
            {coins}  
        </div>
        );
    }
}