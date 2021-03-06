import React from 'react';
import {API_BASE_URL} from '../config';
import Loader from './Loader';
import SearchForm from './Search-form';
import Coin from './Coins';
import CoinDetail from './CoinDetail';
import './CoinList.scss';


export default class Coins extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            lists: [],
            searchTerm: '',
            loading: true,
            error: null,
            results: false,
            marketData: {}
        };
        this.backbutton = this.backbutton.bind(this);
        this.loadCoins = this.loadCoins.bind(this);
        this.moreData = this.moreData.bind(this);
        this.fetchCoinData = this.fetchCoinData.bind(this);
    }
   
    componentDidMount() {
        this.loadCoins();
    }

    //Just to show off the loader animation in case user browser has cached the json response
    sleeper(ms) {
    return function (x) {
        return new Promise(resolve => setTimeout(() => resolve(x), ms));
    };
    }

    backbutton(){
        this.loadCoins();
        this.setState({
            results: false
        });
    }
    //Data fetch from Coins API
    loadCoins() {
        this.setState({
            error: null,
            loading: true,
            marketData: {},
            searchTerm: ''
        });
        return fetch(API_BASE_URL)
        .then(res => {
            if(!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .then(
            this.sleeper(1000)
        )
        .then(coins => {
            
            this.setState({
                lists: coins,
                loading: false
            });
        })
        .catch(err => {
            this.setState({
                error: 'Could not load coins',
                loading: false
            })
        });
    }
    
    moreData(coinId) {
        
        const id = this.state.lists.findIndex(coin => coin.id === coinId);
        // const previous = this.state.lists[id - 1];
        // const next = this.state.lists[id + 1];
        const validIds = [coinId];
        const newCoins = this.state.lists.filter(coin => {
        return validIds.includes(coin.id);
    
        });
        
        this.setState({
            lists: newCoins,
            results: true
        });
        
        //originally to grab data for adjacent coins not used now
        const fn = this.fetchCoinData;
        // Promise.all([fn(coinId), fn(previous), fn(next)]);
        fn(coinId);
    }

    fetchCoinData(id) {
        const self = this;
        const url = API_BASE_URL + `/price_data/${id}`
        fetch(url)
            .then(res => res.json())
            .then(response => {
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
        if (this.state.searchTerm) {
            displayData = displayData.filter(coin =>
                coin.symbol.toLowerCase().includes(this.state.searchTerm.toLowerCase()) ||
                coin.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
            );
    
        //if user input matches exactly to a string in the array, assumes it will be first value in array, display that value
            if (displayData.length > 0 && displayData[0].name.toLowerCase() === this.state.searchTerm.toLowerCase()) {
                displayData = displayData.slice(0,1);
            }
        }
       
        let mainDiv = <Coin data={displayData} handler={this.moreData}/>;
        if (this.state.loading) {
            mainDiv = <Loader />
        }

        let coinResults = <CoinDetail marketData={this.state.marketData} coinId={this.state.lists} />;
        if (Object.keys(this.state.marketData).length === 0 && (this.state.marketData).constructor === Object) {
            coinResults = undefined;
        }

        let searchOrBack = <SearchForm onChange={searchTerm => this.setState({ searchTerm })} />;
        if (this.state.results === true) {
            searchOrBack = <button className='backbutton' onClick={this.backbutton}>Go back</button>;
        }

        return (
            <div className='main-container'>
                {searchOrBack}
                {mainDiv}
                {coinResults}
            </div>
        );
    }
}
