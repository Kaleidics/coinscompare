import React from 'react';
import Moment from 'react-moment';
import {Line, Bar} from 'react-chartjs-2';
import './Graph.scss';

export default class Graph extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            marketData: props.marketData,
            chartData:{
                labels: props.timeData,
                datasets: [
                    {
                        label: 'Price in USD',
                        fill: false,
                        borderColor: "#bae755",
                        borderDash: [5, 5],
                        backgroundColor: "#e755ba",
                        pointBackgroundColor: "#55bae7",
                        pointBorderColor: "#55bae7",
                        pointHoverBackgroundColor: "#55bae7",
                        pointHoverBorderColor: "#55bae7",
                        data: props.priceData,
                        backgroundColor:[
                            '#55bae7'
                        ]
                    }
                ]
            }
        }
    }

    render(){

      const listData = this.props.priceData.map((index, key) => {
          return(
              <li key={key}>{this.props.priceData[key]}</li>
          )
      });

        return (
            <div>
                <h2>Graph Work in Progress</h2>
                <Line
                    data={this.state.chartData}
                    width={1000}
                    height={500}
                    options={
                        {
                            maintainAspectRatio: true,
                            responsive: true,
                            aspectRatio: 2
                        }
                    }
                />
            </div>
        )
    }
   
}