import React from 'react';
import './index.css';

function Shape(props) {
  return (
    <div className={props.className}>
      <span className="dot" style={{backgroundColor: props.color, width: props.radius * 2, height: props.radius * 2}}></span>
    </div>
  );
}

export default Shape;