import React, { Component } from 'react';

class Bomb extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            const newCount = this.state.count + 1
            this.setState({
                count: newCount
            })
        }, 1000)
    }

    componentWillUnmount() {
           clearInterval(this.interval)
    }

    
    render() {
        let bombBoom = '';
        if (this.state.count >= 8) {
            clearInterval(this.interval)
            bombBoom = 'BOOM!!!!'
        } else if (this.state.count % 2 === 0) {
            bombBoom = 'tick'
        } else if (this.state.count % 2 === 1) {
            bombBoom = 'tock'
        }
            
        return (
            <div>
                <p>{bombBoom}</p>
            </div>
        )
    }

}

export default Bomb;