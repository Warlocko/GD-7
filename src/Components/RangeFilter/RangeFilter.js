import React from 'react';
import './RangeFilter.css'
import tooltip from '../../Images/TooltipIcon.png'
import Slider, { Range } from 'rc-slider'
import 'rc-slider/assets/index.css'

class RangeFilter extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        title: this.props.title,
        tooltip: this.props.tooltip,
        from: this.props.from,
        to: this.props.to,
        imageFrom: this.props.imageFrom,
        imageTo: this.props.imageTo,
        value: [this.props.from,this.props.to]
      }
    }

    onSliderChange = (value) =>{
      console.log(value);
      this.setState({
        value,
      });
    };

    getSelected(){
      return this.state.value
    }

    reset(){
      this.setState({ value:[this.state.from, this.state.to]});
    }

    render(){
    return (   
        <div className="rangeFilterWrapper"> 
            <div className="titleBox">
                <p className="title">{this.state.title}</p>
                <img className="tooltip" src={tooltip}></img>
            </div>
            <div className="slider">
            <img src={this.state.imageFrom}></img>
            <img src={this.state.imageTo} className="right"></img>
            <Range
              value={this.state.value}
              onChange={this.onSliderChange}
              onAfterChange={this.onAfterChange}
              max={this.state.to}
              min={this.state.from}
              step={this.state.step}
            ></Range>
            <input className="min" disabled value={this.state.value[0]}></input>
            <input className="max" disabled value={this.state.value[1]}></input>
            </div>
        </div>
      )
    }
}

export default RangeFilter