import React, { Component } from "react";
import ColorBox from "./ColorBox";
import "./Palette.css";

class Palette extends Component {
  render() {
    //use this; which is simpler
    const colorBoxes = this.props.colors.map(color => (
      <ColorBox background={color.color} name={color.name} />
    ));

    //Or this with {} and return()
    // const colorBoxes = this.props.colors.map(color => {
    //   return <ColorBox background={color.color} name={color.name} />;
    // });

    return (
      <div className="Palette">
        <div className="Palette-colors">{colorBoxes}</div>
      </div>
    );
  }
}

export default Palette;
