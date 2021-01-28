import React from 'react';
import {Provider} from 'react-redux';
import {store} from "./redux/store";
import {HashRouter, Route, Switch} from 'react-router-dom';
import {AuthenticatedRoute} from "./components/AuthenticatedRoute";
import Login from "./views/Login";
import Home from "./views/Home";
import Chat from "./views/Chat";
import axios from "axios";
import LandingPage from "./views/LandingPage";

export default function App() {
    axios.interceptors.response.use(function (response) {
        return response;
    }, function (error) {
        if (401 === error.response.status) {
            return Promise.reject(error);
        }
    });

    return (
    <Provider store={store}>
      <HashRouter>
          <Switch>
              <Route path={"/"} exact component={LandingPage}/>
            <AuthenticatedRoute path={"/home"} exact component={Home} />
            <AuthenticatedRoute path={"/chat"} component={Chat} />
            <Route path={"/login"} exact component={Login}/>
            <Route path={"/404"} render={() => (<div>404</div>)} />
          </Switch>
      </HashRouter>
    </Provider>
  );
}
