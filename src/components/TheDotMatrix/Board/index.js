import React from 'react';
import Shape from '../Shape';
import './index.scss';

const patterns = {
  'grid': 1,
  'checker': 2,
  'odd': 3,
};

function Board(props) {
  return (
    <div className="grid-container"
      style={
        {
          width: `${props.width}px`,
          height: `${props.height}px`,
          gridTemplateColumns: `repeat(${props.cols}, auto)`,
          backgroundColor: props.boardColor,
        }
      }>
      {drawShape(props.rows, props.cols, props.pattern, props.shapeColor1, props.shapeColor2, props.radius)}
    </div>
  );
}

function drawShape(rows, cols, type, color1, color2, radius) {
  let shape = [];
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      shape.push(<Shape className="grid-item" key={`${i}.${j}`} color={getShapeColor(i, j, type, color1, color2)} radius={radius}></Shape>);
    }
  }

  return shape;
}

function getShapeColor(row, col, type, color1, color2) {
  return (row + col) % patterns[type] ? color2 : color1;
}

export default Board;