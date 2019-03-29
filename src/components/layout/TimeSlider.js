import React, { Component } from 'react';
import Slider, { Range, Handle } from 'rc-slider';
import Tooltip from 'rc-tooltip';
import 'rc-slider/assets/index.css';

//const createSliderWithTooltip = Slider.createSliderWithTooltip;
//const Range = Slider.createSliderWithTooltip(Slider.Range);
//const Handle = Slider.Handle;

const handle = () => {
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      placement="top" >
      <Handle  />
    </Tooltip>
  );
};

//Filtro per tempo, che prende come parametri le proprietà passate dal componente superiore
//Cambia il filtro del tempo con l'azione passata
class TimeSlider extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        TIME FILTER
        <Range allowCross={false}
          min={1900}
          max={2019}
          value={[this.props.start, this.props.finish]}
          defaultValue={[1990, 2010]}
          onChange={this.props.onChange} />
      </React.Fragment>
    )
  }
}

export default TimeSlider;
