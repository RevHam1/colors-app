import React, { Component } from "react";
import ColorBox from "./ColorBox";
import "./Palette.css";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = { level: 500 };
  }

  changeLevel = level => {
    this.setState({ level });
  };

  render() {
    const { colors } = this.props.palette;
    const { level } = this.state;
    //use this; which is simpler
    const colorBoxes = colors[level].map(color => (
      <ColorBox background={color.hex} name={color.name} />
    ));

    //Or this with {} and return()
    // const colorBoxes = this.props.palette.colors.map(color => {
    //   return <ColorBox background={color.hex} name={color.name} />;
    // });

    return (
      <div className="Palette">
        <Slider
          defaultValue={level}
          min={100}
          max={900}
          step={100}
          onAfterChange={this.changeLevel}
        />
        <div className="Palette-colors">{colorBoxes}</div>
      </div>
    );
  }
}

export default Palette;
