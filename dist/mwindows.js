import React from "react";
import { dragElement } from "./dragit";

class MWindow extends React.Component {
  wExpand(e) {
    alert("wExpand");
  }

  render() {
    return React.createElement("div", {
      toolTip: "Assssssss",
      onClick: e => this.wExpand()
    }, "W");
  }

}

class MWindows extends React.Component {
  componentDidMount(e) {
    dragElement(this.dragWindowHolder, "a-d-w-Panel-drag");
  }

  wExpand(e) {
    alert("wExpand");
  }

  render() {
    return React.createElement("div", {
      className: "a-d-w-Panel",
      ref: ele => this.dragWindowHolder = ele
    }, React.createElement("span", {
      className: "a-d-w-Panel-drag"
    }, "#"), window.adwPanels.wds.map(obj => React.createElement(MWindow, null)));
  }

}

export default MWindows;