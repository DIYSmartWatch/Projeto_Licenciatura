import React from 'react';
import { Flip } from 'react-reveal';
import 'jquery-ui-dist/jquery-ui';
import * as garden from './Garden';
import * as colors from './jscolor';




const Gardens = () => {
    return (

      <div>
  <meta charSet="utf-8" />
  <title>Garden</title>
  <div className="big_div">
    <div id="toggle-btn" onClick={garden.togglemenu}>
      <span />
      <span />
      <span />
    </div>
    <div id="sidebar">
      <ul>
        <li className="elementos_menu_direito" onClick={garden.togglemenu1}>Watch Types</li>
        <div id="first_menu_hidden">
          <div id="dragdiv">
            <div className="child elementos " id="node1">
              <svg height={70} width={200}>
                <text x={0} y={15} />
              </svg>
              <span id="hour" />
              <span id="minute" />
              <span id="second" />
            </div>
          </div>
        </div>
        <div id="remaining_01">
          <li className="elementos_menu_direito" onClick={garden.togglemenu2}>Colors</li>
          <div id="second_menu_hidden">
            <p>Background Colors <input type="color" id="myColor" defaultValue="#000000" onChange={garden.background_color}/> </p>
            <p>Digital <input type="color" id="myColor1" defaultValue="#FFFAFA" onChange={garden.digital_color}/> </p>
            <p>Analog Hours <input type="color" id="myColor2" defaultValue="#FFFAFA" onChange={garden.analog_hours}/> </p>
            <p>Analog Minuts <input type="color" id="myColor3" defaultValue="#FFFAFA" onChange={garden.analog_minutes}/> </p>
            <p>Analog Seconds <input type="color" id="myColor4" defaultValue="#FF0000" onChange={garden.analog_seconds}/> </p>
            <p>Center Dot <input type="color" id="myColor5" defaultValue="#FFFAFA" onChange={garden.center_circule}/></p>
          </div>
        </div>
      </ul>
    </div>
    <div className="watch">
      <div className="center_circule">
        <p id="rect" className="center_circule" />
        <div id="dropdiv">
          <div className="child elementos" id="node2">
            <svg id="clock" viewBox="0 0 100 100" width={200} height={200}>
              <g id="pointers">
                <line id="hour_pointer" x1={50} y1={50} x2={50} y2={27} />
                <line id="minute_pointer" x1={50} y1={50} x2={50} y2={17} />
                <line id="second_pointer" x1={50} y1={50} x2={50} y2={13} />
                <circle id="center_dot" style={{stroke: 'white', strokeWidth: '3px'}} cx={50} cy={50} r={1} />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  ); 
}
export default Gardens;