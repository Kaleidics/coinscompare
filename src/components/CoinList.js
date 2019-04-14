import React from 'react';
import {API_BASE_URL} from '../config';
import Loader from './Loader';
import SearchForm from './Search-form';
import Coin from './Coins';
import './CoinList.scss';

export default class Coins extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            lists: [],
            searchTerm: '',
            loading: true,
            error: null,
            marketData: {}
        };
        this.moreData = this.moreData.bind(this);
        this.fetchCoinData = this.fetchCoinData.bind(this);
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
            this.setState({
                lists: coins,
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
    
    moreData(coinId) {
        console.log(coinId);
        const id = this.state.lists.findIndex(coin => coin.id === coinId);
        const previous = this.state.lists[id - 1];
        const next = this.state.lists[id + 1];
        const validIds = [previous.id, coinId, next.id];
        const newCoins = this.state.lists.filter(coin => {
            return validIds.includes(coin.id);
    
        });
        console.log(newCoins);
        this.setState({
            lists: newCoins
        })
        console.log(id);
      
        const fn = this.fetchCoinData;
        Promise.all([fn(previous.id), fn(coinId), fn(next.id)]);
    }

    fetchCoinData(id) {
        const self = this;
        fetch(`https://nameless-garden-17654.herokuapp.com/${id}`)
            .then(res => res.json())
            .then(response => {
                console.log(response);
                const coinData = {};
                coinData[response.id] = response;
                const newMarketData = Object.assign(coinData, self.state.marketData);
                self.setState({
                    marketData: newMarketData
                });
            });
    }
    //Map the fetch data into individual cards/uls as JSX
    render() {
        let displayData = [...this.state.lists];

        //if user enters input, filter array and display all values matching current input
        if(this.state.searchTerm){
            displayData = displayData.filter(coin =>
                coin.symbol.toLowerCase().includes(this.state.searchTerm.toLowerCase()) ||
                coin.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
            );
            console.log('initial', displayData);
        //if user input matches exactly to a string in the array, assumes it will be first value in array, display that value
            if(displayData.length > 0 && displayData[0].name.toLowerCase() === this.state.searchTerm.toLowerCase()) {
                displayData = displayData.slice(0,1);
            }
        }
       
        let mainDiv = <Coin data={displayData} handler={this.moreData}/>;
        if(this.state.loading){
            mainDiv = <Loader />
        }
        return (
        <div className='main-container'>
            <SearchForm onChange={searchTerm => this.setState({searchTerm})} />
            {mainDiv}
        </div>
        
        );
    }
}
