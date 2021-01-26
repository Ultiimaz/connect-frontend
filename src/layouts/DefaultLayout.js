import React, {Component} from 'react';
import {Button} from "@material-ui/core";
import firebase from "firebase/app";

const DefaultLayout = props => {
    const auth = firebase.auth();

    return (
      <div className="bg-gray-custom w-screen h-screen block">
          <header className="bg-dark flex justify-between">
              <span className="text-white text-2xl mx-5">Connect</span>
              <button onClick={auth.signOut} className={"text-white mr-5"}>Sign Out</button>
          </header>
        <main >
          {props.children}
        </main>
      </div>
    );
}

export default DefaultLayout;
