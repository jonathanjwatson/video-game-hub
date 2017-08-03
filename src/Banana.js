import React, { Component } from 'react';

class Banana extends Component {
    render() {
        return (
            <div>
                <h1>Description: {this.props.banana.Description}</h1>
            </div>
        )
    }
}

export default Banana