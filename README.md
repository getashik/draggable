This project is usefull to make react compnent as dragable or open as dailogue(if it is a dialogue or draggable popup, closing functionaliy has to implemented from your end).

## How to implement in your project

```js  
import Drag from "r-draggable"; 
<Drag headerToDrag="myheader"   posX="50rem" posY="20rem"><Your Component to Drag  /></Drag>
```
## How to Configure 
` 
You can pass your header(dragging element) class name or id  to the property "headerToDrag". If you did not configure "headerToDrag" entire body of your component can draggable
#  posX - for Align Left postion, You can pass unit with value or by default it will take it as "Px" 
#  posY - for Align Top postion, You can pass unit with value or by default it will take it as "Px" 
`