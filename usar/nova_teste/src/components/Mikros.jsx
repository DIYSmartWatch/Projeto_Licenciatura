import React from 'react';
import { Flip } from 'react-reveal';
import 'jquery-ui-dist/jquery-ui';
import * as micro from './mikrosjs';
import * as color from'./jscolor';
import './mikrosjs';

const Mikros = () => {
       
    return (
        
      <div >
        
      <meta charSet="utf-8" />
      <title>Mikro</title>
      <div className="big_div">
        <div id="toggle-btn" onClick={micro.togglemenu}>
          <span />
          <span />
          <span />
        </div>
        <div id="sidebar">
          <ul>
            <li className="elementos_menu_direito" onClick={micro.togglemenu1}>Watch Types</li>
            <div id="first_menu_hidden">
              <div id="dragdiv">
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
            <div id="remaining_01">
              <li className="elementos_menu_direito" onClick={micro.togglemenu2}>Colors</li>
              <div id="second_menu_hidden">
                <p>Background Colors  <input type="color" id="myColor" defaultValue="#000000" onChange={micro.background_color}/> </p>
                <p>Digital <input type="color" id="myColor1" defaultValue="#FFFAFA" onChange={micro.digital_color}/> </p>
                <p>Analog Hours  <input type="color" id="myColor2" defaultValue="#FFFAFA" onChange={micro.analog_hours}/> </p>
                <p>Analog Minuts <input type="color" id="myColor3" defaultValue="#FFFAFA" onChange={micro.analog_minutes}/> </p>
                <p>Analog Seconds <input type="color" id="myColor4" defaultValue="#FF0000" onChange={micro.analog_seconds}/> </p>
                <p>Center Dot <input type="color" id="myColor5" defaultValue="#FFFAFA" onChange={micro.center_circule}/></p>
                </div>
              <div id="remaining_02">
                <li className="elementos_menu_direito" onClick={micro.togglemenu3}>Line</li>
                <div id="third_menu_hidden">
                  <p>Circle Bar 1</p> <br /> <input type="color" id="myColor6" defaultValue="#FF0000" onChange={micro.bar_color1}/> <br /><br />
                  <p>Circle Bar 2</p> <br /> <input type="color" id="myColor7" defaultValue="#00FFFF" onChange={micro.bar_color2}/> <br /><br />
                  <p>Circle Bar 1 Size </p><br /> <input id="bar_size1" defaultValue={100} max={89} onChange={micro.bar_thickness_1} type="range" name="b_size" /><br /><br />
                  <p>Circle Bar 2 Size </p> <br /> <input id="bar_size2" defaultValue={100} max={89} onChange={micro.bar_thickness_2} type="range" name="b_size" /><br /><br />
                  <p>Circle Bar Radius </p> <br /> <input id="bar_radius" min={59} onChange={micro.bars_radius} type="range" name="b_radius" defaultValue={100} /><br /><br />
                  <p>Circle Bar Start </p> <br />
                  <select name="bar_star" id="bar_type" onChange={micro.bar_type}>
                    <option value="full">Full</option>
                    <option value="tophalf">Top Half</option>
                    <option value="bottomhalf">Bottom Half</option>
                  </select>
                  <br /><br />
                  <p>Circle Bar Rotation </p> <br />
                  <select name="bar_rotation" id="bar_star" onChange={micro.update_rotation}>
                    <option value="clockwise">Clockwise</option>
                    <option value="counterclockwise">Counterclockwise</option>
                  </select>
                  <br /><br />
                  <input type="button" id="btAdd" defaultValue="Add Line" className="bt" />
                    <input type="button" id="btRemove" defaultValue="Remove Line" className="bt" /><br /><br />
                    <p>Bar <select id="bar_color_change">
                        <option value={0}>1</option>
                        <option value={1}>2</option>
                        <option value={2}>3</option>
                        <option value={3}>4</option>
                        <option value={4}>5</option>
                        <option value={5}>6</option>
                        <option value={6}>7</option>
                      </select> Color <input style={{marginLeft: '10px'}} className="jscolor {onFineChange:'barcolor(this)'}" defaultValue="fff" /> </p><br /><br />
                </div>
                <div id="remaining_03">
                  <li id="lastelemente" className="elementos_menu_direito" onClick={micro.togglemenu4}>Attributes</li>
                  <div id="fourth_menu_hidden">
                    <br /><br /><p>Text</p><br />
                    <select id="first_variable1">
                      <option value="none">None</option>
                      <option value="yesterday">Yesterday</option>
                      <option value="today">Today</option>
                      <option value="goal">Goal</option>
                      <option value="other_user">Other User</option>
                    </select>
                    <textarea style={{backgroundColor: 'rgb(225,225,225,0)', zIndex: 8, resize: 'none', textAlign: 'justify', color: 'white'}} id="second_variable1" name="field5" className="tex_box" placeholder="Insert your text" rows={1} cols={18} defaultValue={""} />
                    {/* <input type="color" id="myColor9" defaultValue="#ff0080" onChange={micro.text_color}/> */}
                    {/* <select id="third_variable1">
                      <option value="none">None</option>
                      <option value="yesterday">Yesterday</option>
                      <option value="today">Today</option>
                      <option value="goal">Goal</option>
                      <option value="other_user">Other User</option>
                    </select>
                    <textarea style={{backgroundColor: 'rgb(225,225,225,0)', zIndex: 8, resize: 'none', textAlign: 'justify', color: 'white'}} id="fourth_variable1" name="field7" className="tex_box" placeholder="Insert your text" rows={1} cols={18} defaultValue={""} />
                    <select id="fifth_variable1">
                      <option value="none">None</option>
                      <option value="yesterday">Yesterday</option>
                      <option value="today">Today</option>
                      <option value="goal">Daily Goal</option>
                      <option value="other_user">Other User</option>
                    </select> */}
                     <br /><br />
                    <select id="mesage_type1">
                      <option value="fixa">Fixa</option>
                      <option value="temporaria">Temporaria</option>
                    </select> <br />
                    <br />
                    <input type="button" id="btAddText" defaultValue="Add Fixed Text" className="bt" />
                    <input type="button" id="btRemoveText" defaultValue="Remove Fixed Text" className="bt" /><br /><br />
                  </div>
                </div>
              </div>
            </div>
          </ul>
        </div>
        <div className="watch">
          <div className="center_circule">
            <p id="rect" className="center_circule" />
            <div className="circule">
              <svg className="circle-chart" viewBox="0 0 33.83098862 33.83098862" width="90%" height="90%" style={{position: 'absolute', left: '50%', top: '50%', marginLeft: '-45%', marginTop: '-45%'}}>
                <circle className="circle-chart__circle" id="bar1" stroke="#FF0000" strokeWidth={2} strokeDasharray="65,100" fill="none" cx="16.91549431" cy="16.91549431" r={16} />
                <circle className="circle-chart__circle" id="bar2" stroke="#00acc1" strokeWidth={2} strokeDasharray="30,100" fill="none" cx="16.91549431" cy="16.91549431" r={14} />
              </svg>
            </div>
            <svg id="bardraw" className="circle-chart" viewBox="0 0 33.83098862 33.83098862" width="530px" height="530px" style={{position: 'absolute', left: '50%', top: '50%', marginLeft: '-265px', marginTop: '-265px'}}>
            </svg>
            <div id="dragdiv" style={{zIndex: 2}}>
              <ul id="allItems">
                <li id="primeiro" />
                <li id="segundo" />
                <li id="terceiro" />
                <li id="quarto" />
                <li id="quinto" />
                <li id="sexto" />
              </ul>
            </div>
            <div id="dropdiv" style={{zIndex: 2}}>
              <ul id="Ul1">
                <li id="setimo" />
                <li id="oitavo" />
              </ul>
            </div>
            <div id="dropdiv">
              <div className="child elementos " id="node1">
                <svg height={0} width={200}>
                  <text x={0} y={15} />
                </svg>
                <span id="hour" />
                <span id="minute" />
                <span id="second" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    ); 
}
export default Mikros;