import React,{useState} from 'react';
import {ProfilePicture} from "../components/ProfilePicture";
import {string} from "prop-types";
import ExampleWrapper from "../components/ExampleWrapper";

const ChatHeader = props => {
  return null;
}


const SidePanel = props => {
  return <>
    <button><ProfilePicture image={""} status={"online"}/> <span className="font-bold">{props.username}</span></button>
  </>
}

const ChatBox = props => {
  return null; // wip
}

const ChatPanel = props => {
  // If there are more items to be loaded then add an extra row to hold a loading indicator.
  const [items,setItems] = useState([
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },
    {
      message: 'message1',
      sender: 'sender 1'
    },

  ]);
  const [hasNextPage,setNextPage] = useState(true);
  const [isNextPageLoading,setNextPageLoading] = useState(false);

  const _loadNextPage = (...args) => {
    console.log("loadNextPage", ...args);
    setTimeout(() => {
    setItems([...items].concat(
      new Array(10).fill(true).map(() => ({ name: "test" }))
    ));
    setNextPage(items.length < 100);
    setNextPageLoading(false);
    }, 2500);
  };


  return (
    <>

    </>
  );
}


const Chat = props => {
  function handleChatChange(event){

  }
  return (
    <>
      {/*<ChatHeader />*/}
      {/*<SidePanel />*/}
      <ChatPanel />
      </>
  )
}

export default Chat;
