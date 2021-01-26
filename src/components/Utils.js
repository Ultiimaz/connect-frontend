import * as PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faHourglass } from '@fortawesome/free-solid-svg-icons'
import React from 'react';


export const Textbox = props => {
 return (<>
   <label htmlFor={props.id} className="text-white">{props.label}</label>
   <input type={props.type} id={props.id} placeholder={props.label} onChange={props.onChange} className="w-full mx-0 p-1 rounded mb-5 border outline-none focus:border-black border-gray-500 bg-gray-500 text-white"/>
 </>)
}
Textbox.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  id: PropTypes.string
};


export const Button = props => {
  let icon = null;
  if(props.loading)
    return <button className="text-white border border-gray-700 px-5 py-1.5 rounded bg-gray-500 outline-none appearance-none" disabled={props.checking} {...props}><FontAwesomeIcon icon={faHourglass} />  Loading</button>

  if(props.icon){
    icon = props.icon
  }
    icon = <FontAwesomeIcon icon={faCoffee} />
  return <button className="text-white border border-gray-700 px-5 py-1.5 rounded bg-blue-500 outline-none appearance-none" disabled={props.checking} {...props}>{icon}  {props.children}</button>
}
Button.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func,
  icon: PropTypes.element
};

