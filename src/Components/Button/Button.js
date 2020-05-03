import React from 'react'
import './Button.css'

class Button extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            label: this.props.label,
            color: this.props.color,
            textColor: this.props.textColor
        }
    }

    render(){
        return (
            <button style={{backgroundColor: this.state.color, color: this.state.textColor}} className="filterBtn">{this.state.label}</button>
        )
    }
}

export default Button