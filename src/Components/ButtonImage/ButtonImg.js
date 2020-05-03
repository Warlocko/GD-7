import React from 'react'
import './ButtonImg.css'

class ButtonImg extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div onClick={()=>{this.props.onSelect(this.props.label)}} className={`button ${this.props.selected==this.props.label ? "selected":""}`}>
                <img className="buttonImage" src={this.props.src} alt={`imagen de diamante tipo ${this.props.label}`}></img>
                <div className="buttonLabel">{this.props.label}</div>
            </div>
        )
    }
}

export default ButtonImg