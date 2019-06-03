import React from 'react';
import { Line } from 'react-chartjs-2';
import './Graph.scss';

export default class Graph extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            marketData: [props.marketData],
            chartData:{
                labels: props.timeData,
                datasets: [
                    {
                        label: 'Price in USD',
                        fill: false,
                        borderColor: "#bae755",
                        borderDash: [5, 5],
                        pointRadius: this.props.pointSize,
                        pointHitRadius: 10,
                        pointHoverRadius: 5,
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

        return (
            <div className='graph-inner-container'>
                <h2 className='graphName'>{this.props.graphname}</h2>
                <Line
                    data={this.state.chartData}
                    width={900}
                    height={450}
                    options={
                        {
                            maintainAspectRatio: true,
                            responsive: true,
                            aspectRatio: 2,
                            scales:{
                                xAxes:[{
                                    display: false
                                }]
                            },
                            layout: {
                                padding: {
                                    right: 10
                                }
                            }
                        }
                    }
                />
            </div>
        )
    }
   
}