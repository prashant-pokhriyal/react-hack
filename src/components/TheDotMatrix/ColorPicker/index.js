import React from 'react';
import reactCSS from 'reactcss';
import { SketchPicker } from 'react-color';

class ColorPicker extends React.Component {
  state = {
    displayColorPicker: false,
    color: {
      r: '241',
      g: '112',
      b: '19',
      a: '1',
    },
    hex: this.props.value,
  };

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false })
  };

  handleChange = (color) => {
    this.setState({...color})
    this.props.onChange({ target: { name: this.props.name, value: color.hex } })
  };

  render() {

    const styles = reactCSS({
      'default': {
        color: {
          width: '100%',
          height: '14px',
          borderRadius: '2px',
          backgroundColor: `${this.state.hex}`,
        },
        swatch: {
          background: '#fff',
          borderRadius: '1px',
          boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
          cursor: 'pointer',
        },
        popover: {
          position: 'absolute',
          zIndex: '2',
        },
        cover: {
          position: 'fixed',
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px',
        },
      },
    });

    return (
      <div>
        <div style={styles.swatch} onClick={this.handleClick}>
          <div style={styles.color} />
        </div>
        {this.state.displayColorPicker ? <div style={styles.popover}>
          <div style={styles.cover} onClick={this.handleClose} />
          <SketchPicker color={this.state.color} onChange={this.handleChange} />
        </div> : null}

      </div>
    )
  }
}

export default ColorPicker