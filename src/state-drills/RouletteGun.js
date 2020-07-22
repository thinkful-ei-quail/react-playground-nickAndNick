import React, { Component } from 'react';


class RouletteGun extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chamber: null,
            spinningTheChamber: false
        }
    }

    static defaultProps = {
        bulletInChamber: 8
    }

    handleTriggerClick = () => {
        this.setState({
            spinningTheChamber: true
        })
        let insideTimeout = 
            this.setState({
                chamber: Math.ceil(Math.random() * 8)
            })
            this.setState({
                spinningTheChamber: false
            })
        let timeout = setTimeout(insideTimeout, 2000)
        return timeout;
    }

    render() {
        return (
            <div>
                <p>{this.state.chamber}</p>
                <button onClick={this.handleTriggerClick}>Pull the trigger!</button>
            </div>
        );
    };
};

export default RouletteGun;