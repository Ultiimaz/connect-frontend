import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMinus, faSquare, faTimes} from '@fortawesome/free-solid-svg-icons'
import {BrowserWindow} from "electron";
const TitleBar = props => {

  const browserWindow = BrowserWindow;
  debugger;
  const focussedWindow = browserWindow.getFocusedWindow();

  debugger;
  return(
    <div className="flex justify-between draggable">
      <div>App logo here</div>
      <div >test123</div>
      <div className="flex w-16">
        <div className="w-4 m-1 -inset-x-0">
          <FontAwesomeIcon icon={faMinus}/>
        </div>
        <div className="w-2 m-2">
          <button onClick={() => focussedWindow.maximizable}><FontAwesomeIcon icon={faSquare} /></button>

        </div>
        <div className="w-4 m-1">
          <FontAwesomeIcon icon={faTimes} />
        </div>
      </div>
    </div>
  )
}

export default TitleBar;
