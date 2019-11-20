window.adwPanels = {
  gMinimizable: false,
  wds: [{}, {}, {}]
};

const dragElement = function (elmnt, props) {
  var pos1 = 0,
      pos2 = 0,
      pos3 = 0,
      pos4 = 0,
      headerRef = props.headerToDrag,
      elmHeader = headerRef ? elmnt.querySelector("#" + headerRef) || elmnt.querySelector("." + headerRef) : ""; //  elmnt.getElementsByClassName("mydivheader")[0]
  //alert(elmnt.querySelector("#mydivheader")||elmnt.querySelector(".mydivheader"));

  if (props.posY) {
    elmnt.style.top = isNaN(props.posY) ? props.posY : props.posY + "px";
  }

  if (props.posX) {
    elmnt.style.left = isNaN(props.posX) ? props.posX : props.posX + "px";
  }

  if (elmHeader) {
    // if present, the header is where you move the DIV from:
    elmHeader.onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault(); // get the mouse cursor position at startup:

    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement; // call a function whenever the cursor moves:

    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault(); // calculate the new cursor position:

    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY; // set the element's new position:

    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
};

export { dragElement };