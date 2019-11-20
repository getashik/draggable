import React from "react";
import "./dragit.css";
import { dragElement } from "./dragit";
import MWindows from "./mwindows";

class Dragit extends React.Component {
  componentWillMount(e) {
    if (String(this.props.minimizable) == "true" && window.adwPanels.gMinimizable !== true) {
      window.adwPanels.gMinimizable = true;
      this.adwPanels = true;
    }
  }

  componentDidMount(e) {
    dragElement(this.dragit, this.props);
  }

  render() {
    return React.createElement("div", {
      className: "a-dragit-wrapper"
    }, React.createElement("div", {
      className: "a-dragit",
      ref: ele => this.dragit = ele
    }, this.props.children), this.adwPanels ? React.createElement(MWindows, null) : null);
  }

}

export default Dragit;