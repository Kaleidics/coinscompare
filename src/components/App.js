import React from 'react';
import ParticlesBg from './ParticlesBg';
import CoinList from './CoinList';
import './CoinList.scss';
import './Coins.scss';
import './Loader.scss';
import './ParticlesBg.scss';
import './Search-form.scss';


export default class App extends React.Component {
    render() {
        return (
            <div>
                <header id = "title">
                    <ParticlesBg />
                </header>
                <CoinList />
            </div>
        )
    }
}
