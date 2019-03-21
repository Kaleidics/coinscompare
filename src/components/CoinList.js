import React from 'react';
import {API_BASE_URL} from '../config';
import Loader from './Loader';
import SearchForm from './Search-form';
import Coin from './Coins';
import './CoinList.css';

export default class Coins extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            lists: [],
            loading: true,
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
        let mainDiv = <Coin data={this.state.lists} />;
        if(this.state.loading){
            mainDiv = <Loader />
        }
        return (
        <div className='main-container'>
            <SearchForm />
            {mainDiv}
        </div>
        
        );
    }
}