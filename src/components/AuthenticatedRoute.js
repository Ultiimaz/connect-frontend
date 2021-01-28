import React, {useState} from 'react';
import {Redirect, Route} from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import * as PropTypes from "prop-types";
import Login from "../views/Login";
import 'firebase/firestore';
import 'firebase/auth';
import {API} from "../utils/API";
import {store} from "../redux/store";
import {Loading} from "./Loading";


export const AuthenticatedRoute = props => {
  const [loading,setLoading] = useState(true);
 const user = store.getState().user
  if(user){
    let Component = props.component;
    return <Route exact path={props.path} render={() => (<DefaultLayout><Component/></DefaultLayout>)} />
  }

  API.fetchUser().then(response => {if(response.status === 401){
      setLoading(false);
  }}).catch(_ => {
    setLoading(false);
  });

  if(loading)
  {
    return <Loading />
  }
  return <Redirect to={"/login"} push />
}
AuthenticatedRoute.propTypes = {
  path: PropTypes.string,
  component: PropTypes.func
}
