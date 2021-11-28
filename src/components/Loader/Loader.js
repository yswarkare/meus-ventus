import React, { Component } from "react";
import uploadicon from "../../assets/icons/tail-spin.svg";

class Loader extends Component {
  render() {
    return (
      <div
        className="flex flex-col items-center justify-center w-full"
        style={this.props.style}
      >
        <img src={uploadicon} className="w-12 h-12"  alt=""/>
        <div className="text-primary-color-400 text-sm">{this.props.loadingText}</div>
      </div>
    );
  }
}

export default Loader;
