import React from 'react';
import {oneOf, string} from "prop-types";

export const ProfilePicture = props => {

  if(props.status){
    return <><img src={props.image} alt={null}/></>
  }
  return <><img src={props.image} alt={null}/> <Status status={"online"}/> </>
}
const Status = props => {
  switch(props.status){
    case "online": {
      return <div className="bg-green-800" />;
    }
    case "busy": {
      return <div className="bg-red-800" />;
    }
    case "offline": {
      return <div className="bg-gray-300" />;
    }
  }
}
Status.propTypes = {
  status: oneOf(['online', 'busy','offline']),
};
ProfilePicture.propTypes = {
  image: string
};
