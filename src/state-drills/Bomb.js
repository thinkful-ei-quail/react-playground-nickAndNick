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
        const bombBoom = this.state.count % 2 === 1 ? 'tick' : 'tock';
        return (
            <div>
                <p>{bombBoom}</p>
            </div>
        )
    }

}

export default Bomb;