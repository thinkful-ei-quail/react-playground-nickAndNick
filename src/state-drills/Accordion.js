import React, { Component } from 'react';

class Accordion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true
        }
    }

    renderButton() {
        if (!this.state.isToggleOn) {
            return (
                <li>
                    <button onClick={this.expandSectionClick}>
                        Dummy Title
                        {this.props.sections.title}
                    </button>
                </li>
            )
        } else {
            return (
                <li>
                    <button onClick={this.expandSectionClick}>
                        Dummy Title
                        {this.props.sections.title}
                        <p>Dummy Content</p>
                        <p>{this.props.sections.content}</p>
                    </button>
                </li>
            )
        } 
    }

    expandSectionClick = () => {
        this.setState({
            isToggleOn: !this.state.isToggleOn
        })
        // console.log(this.state.isToggleOn)
        this.renderButton();
    }

    render() {
        return (
            <ul>
                <li>
                    <button onClick={this.expandSectionClick} >
                        Dummy Title
                        {this.props.sections.title}
                    </button>
                </li>
            </ul>
        )
    }
}




export default Accordion;