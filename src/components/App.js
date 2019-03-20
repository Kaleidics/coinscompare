import React from 'react';
import ParticlesBg from './ParticlesBg';
import CoinList from './CoinList';

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
