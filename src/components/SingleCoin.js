import React from 'react';

export default class SingleCoin extends React.Component {
    constructor(props) {
        super(props);

    }

        tidyUp(num) {
            let stringNum = num.toFixed(2).toString();
            return stringNum.replace(/\B(?=(?=\d*\.)(\d{3})+(?!\d))/g, ",");
        }

    render() {

        const coin = this.props.coin;
        
        return (
            <ul className="coin-containers" index={this.props.index} key={coin.id} onClick={() => this.props.onClick(coin.id)}>
                <li>
                    <img className="coinImages" src={`${coin.image}`} alt={coin.name} />
                </li>
                <li>{coin.market_cap_rank}</li>
                <li>{coin.name}</li>
                <li className="ticker">{coin.symbol}</li>
                <li className="price">${this.tidyUp(coin.current_price)}</li>
                <li className="totalvol">$ {this.tidyUp(coin.total_volume)}</li>
                <li className="marketcap">$ {this.tidyUp(coin.market_cap)}</li>
                <li className="hour">24HR</li>
                <li style={{ color: coin.market_cap_change_percentage_24h >= 0 ? "#7AC27A" : "#FF6060" }}>
                    {coin.market_cap_change_percentage_24h >= 0 ? "+" : ""}
                    {this.tidyUp(coin.market_cap_change_percentage_24h)}%
                </li>
            </ul>
        );
       
    }
}