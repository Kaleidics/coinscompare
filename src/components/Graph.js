import React from 'react';
import Moment from 'react-moment';
import {Line} from 'react-chartjs-2';

export default class Graph extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            marketData: props.marketData,
            chartData:{
                labels: [],
                datasets: [
                    {
                        label: 'Price',
                        data:props.priceData,
                        backgroundColor:[
                            'rgba(66, 66, 66, 1)',
                            'rgba(66, 66, 66, 1)',
                            'rgba(66, 66, 66, 1)',
                            'rgba(66, 66, 66, 1)',
                            'rgba(66, 66, 66, 1)',
                            'rgba(66, 66, 66, 1)'
                        ]
                    }
                ]
            }
        }
    }


    render(){

      
        return (
            <div>
                <h2>Graph Work in Progress</h2>
                <Line
                    data={this.state.chartData}
                    width={100}
                    height={50}
                    options={{ maintainAspectRatio: false }}
                />
            </div>
        )
    }
   
}