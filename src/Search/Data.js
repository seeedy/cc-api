import React, { Component } from 'react';

export default class Data extends Component {
    constructor() {
        super();
        this.state = {
            data: null
        }
    }

    componentDidMount() {
        console.log('props', this.props);
    }

    componentDidUpdate() {
        console.log('props', this.props);
    }




    render() {
        const { data } = this.props;

        if (!data) {
            return null;
        }

        return(
            data.map(item => {
                return(
                <div className="result" key={item.time}>
                    <p>{item.time} : {item.volumeto}</p>
                </div>)
            })
        )
    }
}
