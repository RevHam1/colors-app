import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import "./Palette.css";

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = { level: 500, format: "hex" };
  }

  changeLevel = level => {
    this.setState({ level });
  };

  changeFormat = val => {
    this.setState({ format: val });
  };

  render() {
    const { colors } = this.props.palette;
    const { level, format } = this.state;
    //use this; which is simpler
    const colorBoxes = colors[level].map(color => (
      <ColorBox background={color[format]} name={color.name} />
    ));

    //Or this with {} and return()
    // const colorBoxes = this.props.palette.colors.map(color => {
    //   return <ColorBox background={color.hex} name={color.name} />;
    // });

    return (
      <div className="Palette">
        <Navbar
          level={level}
          changeLevel={this.changeLevel}
          handleChange={this.changeFormat}
        />
        <div className="Palette-colors">{colorBoxes}</div>
      </div>
    );
  }
}

export default Palette;
