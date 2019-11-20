import React from "react";
import { dragElement } from "./dragit";
class MWindow extends React.Component {
  wExpand(e) {
    alert("wExpand");
  }

  render() {
    return (
      <div toolTip="Assssssss" onClick={e => this.wExpand()}>
        W
      </div>
    );
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
    return (
      <div className="a-d-w-Panel" ref={ele => (this.dragWindowHolder = ele)}>
        <span className="a-d-w-Panel-drag">#</span>

        {window.adwPanels.wds.map(obj => (
          <MWindow />
        ))}
      </div>
    );
  }
}

export default MWindows;
