import React from 'react';
import ReactSlider from 'react-slider';
import './index.css';

function TheNumericalSlider() {
  return (
    <div className="slider-container">
      <span style={{fontSize: '1.2em'}}>25</span>
      <ReactSlider
        min="25"
        max="120"
        className="horizontal-slider"
        thumbClassName="slider-thumb"
        trackClassName="slider-track"
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
      />
      <span style={{fontSize: '1.2em'}}>120</span>
    </div>
  )
}

export default TheNumericalSlider;