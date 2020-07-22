import React, { Component } from 'react';

class Accordion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isCurrentlySelected: -1
        }
    }
static defaultProps = {
    sections:[{title:'',content:''}]
}
    renderButton = (section,index) => {
        if (this.state.isCurrentlySelected !== index) {
            return (
                <li>
                    <button onClick={() => this.expandSectionClick(index)}>
                      
                        {section.title}
                    </button>
                </li>
            )
        } else {
            return (
                <li>
                    <button onClick={() => this.expandSectionClick(index)}>
                        
                        {section.title}
                        
                        <p>{section.content}</p>
                    </button>
                </li>
            )
        } 
    }

    expandSectionClick = (index) => {
        if(this.state.isCurrentlySelected === index) {
            index = -1
        }
        this.setState({
            isCurrentlySelected: index
        })
        
        // console.log(this.state.isToggleOn)
    }

    render() {
        let sections = this.props.sections.map(this.renderButton)
        return (
            <ul>
                {sections}
            </ul>
        )
    }
}




export default Accordion;