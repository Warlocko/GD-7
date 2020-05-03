import React from 'react';
import './buttonFilter.css'
import ButtonImg from '../ButtonImage/ButtonImg'
import tooltip from '../../Images/TooltipIcon.png'

class ButtonFilter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: this.props.title,
            buttons: this.props.buttons,
            tooltip: this.props.tooltip,
            selected: "REDONDO"
        }
    }

    onSelected = (label) => {
        this.setState({ selected: label })

    }

    getSelected() {
        return this.state.selected
    }

    limpiar() {
        this.setState({ selected: "" })
    }

    render() {
        return (
            <div className="buttonFilterWrapper">
                <div className="titleBox">
                    <p className="title">{this.state.title}</p>
                    <div className="tooltipDiv">
                        <img className="tooltip" src={tooltip}></img>
                        <p className="tooltipText">{this.state.tooltip}</p>
                    </div>
                </div>
                <div className={`buttons ${this.state.buttons.length > 4 ? "small" : "large"}`}>
                    {this.state.buttons.map((button) => (
                        <ButtonImg src={button.src} label={button.label} onSelect={this.onSelected} selected={this.state.selected} />
                    ))}
                </div>
            </div>
        )
    }
}

export default ButtonFilter