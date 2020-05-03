import React from 'react';
import './buttonFilter.css'
import ButtonImg from '../ButtonImage/ButtonImg'
import tooltip from '../../Images/TooltipIcon.png'

class ButtonFilter extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            title: this.props.title,
            buttons: this.props.buttons,
            tooltip: this.props.tooltip
        }
    }

    render(){
        return(
            <div className="buttonFilterWrapper">
                <div className="titleBox">
                    <p className="title">{this.state.title}</p>
                    <img className="tooltip" src={tooltip}></img>
                </div>
                <div className={`buttons ${this.state.buttons.length>4 ? "small":"large"}`}>
                {this.state.buttons.map((button) => (
                    <ButtonImg src={button.src} label={button.label}/>
                ))}
                </div>
            </div>
        )
    }
}

export default ButtonFilter