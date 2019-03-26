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
            searchTerm: '',
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
   
    //Map the fetch data into individual cards/uls as JSX
    render() {
        let displayData = [...this.state.lists];

        //if user enters input, filter array and display all values matching current input
        if(this.state.searchTerm){
            displayData = displayData.filter(coin =>
                coin.symbol.toLowerCase().includes(this.state.searchTerm.toLowerCase()) ||
                coin.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
            );
        //if user input matches exactly to a string in the array, assumes it will be first value in array, display that value
        if(displayData[0].name.toLowerCase() === this.state.searchTerm.toLowerCase()) {
            displayData = displayData.slice(0,1);
        }
        }
       
        let mainDiv = <Coin data={displayData} />;
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
