import React, { Component } from 'react';
import Data from './Data.js'
import axios from 'axios';


export default class Search extends Component {
    constructor() {
        super();
        this.state={}

        this.getCoinData=this.getCoinData.bind(this)

    }

    getCoinData() {
        axios({
            method: 'get',
            url: 'https://min-api.cryptocompare.com/data/histoday?',
            params: {
                fsym: 'BTC',
                tsym: 'USD',
                limit: 29
            }
        })
        .then(response => {
            let data = response.data.Data;
            console.log(response.data.Data);
            this.setState({
                data
            })
            console.log(this.state);
        })
        .catch(err => console.log(err));
    }



    render() {
        return(
            <div className="Search-wrapper">
                Search for coin:
                <div className="Data-wrapper">
                    <div className="coin-search">
                        <input type="text" id="search-input" />
                        <button className="search-btn" onClick={this.getCoinData} />
                    </div>

                    <Data data={this.state.data}/>

                </div>
            </div>
        )
    }
}
