import React from 'react'
import './ButtonImg.css'

class ButtonImg extends React.Component{
    constructor(props){
        super(props)
        this.state= {
            src: this.props.src,
            label: this.props.label
        }
    }

    render(){
        return(
            <div className="button">
                <img className="buttonImage" src={this.state.src} alt={`imagen de diamante tipo ${this.state.label}`}></img>
                <div className="buttonLabel">{this.state.label}</div>
            </div>
        )
    }
}

export default ButtonImg