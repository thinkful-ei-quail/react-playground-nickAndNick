import React, { Component } from 'react';


class RouletteGun extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chamber: null,
            spinningTheChamber: false,
            clicked: false
        }
        this.timeout = null
    }

    static defaultProps = {
        bulletInChamber: 8
    }

    handleTriggerClick = () => {
        this.setState({
            spinningTheChamber: true,
            clicked: true
        })
        this.timeout = setTimeout(() => {
            this.setState({
                chamber: Math.ceil(Math.random() * 8),
                spinningTheChamber: false
            })
        }, 2000)
    }
    
    componentWillUnmount() {
        clearTimeout(this.timeout)
    }


    render() {
        let consequences ='';
        if(!this.state.clicked) {
            consequences ='ready to meet your maker?'
        }
        else if(this.state.spinningTheChamber) {
          consequences = 'spinning the chamber and pulling the trigger! ...'
          } else if  (this.state.chamber === this.props.bulletInChamber
          ) {
              consequences = 'BANG!!!!'
          } else consequences = "you're safe!" 
          
        return (
            <div>
                <p>{ consequences }</p>
                <button onClick={this.handleTriggerClick} disabled={this.state.spinningTheChamber}>Pull the trigger!</button>
            </div>
        );
    };
};

export default RouletteGun;