import React from "react";
import "./dragit.css";
import { dragElement } from "./dragit";
import MWindows from "./mwindows";
import "./fa/font-awesome.min.css"
//import "font-awesome/css/font-awesome.min.css";

class Dragit extends React.Component {
  componentWillMount(e) {
    if (
      String(this.props.minimizable) == "true" &&
      window.adwPanels.gMinimizable !== true
    ) {
      window.adwPanels.gMinimizable = true;
      this.adwPanels = true;
    }
  }
  componentDidMount(e) {
    dragElement(this.dragit, this.props);
  }

  render() {
    return (
      <div className="a-dragit-wrapper">
       <i className="fa fa-window-minimize"></i>
       <button class="btn btn-block btn-primary"><i class="fa fa-window-minimize"></i> </button>
        <div className="a-dragit" ref={ele => (this.dragit = ele)}>
          {this.props.children}
        </div>
        {this.adwPanels ? <MWindows /> : null}
      </div>
    );
  }
}

export default Dragit;
